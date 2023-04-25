import { createStore } from "context-base-api";
import { useCallback, useEffect, useState } from "react";
import { Post } from "../types";

export const PostListStore = createStore(() => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchList = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      "https://fun-calf-70.hasura.app/api/rest/post",
      {
        method: "get",
        headers: {
          "x-hasura-admin-secret":
            "dVQ1UtSXTfS4uxX1lbZBzMoKMOSBKlssgffrjaS548INt4WB4j3j4knfhYSu6gb0",
        },
      }
    );

    const data: { posts: Post[] } = await response.json();

    setPosts(data.posts);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const removePost = useCallback(async (id: string) => {
    await fetch(`https://fun-calf-70.hasura.app/api/rest/post/${id}`, {
      method: "delete",
      headers: {
        "x-hasura-admin-secret":
          "dVQ1UtSXTfS4uxX1lbZBzMoKMOSBKlssgffrjaS548INt4WB4j3j4knfhYSu6gb0",
      },
    });

    fetchList();
  }, []);

  return { state: { posts, loading }, actions: { removePost } };
});
