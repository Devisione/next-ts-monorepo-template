import { createStore } from "context-base-api";
import { useCallback, useEffect, useState } from "react";
import { Post } from "../types";
import { useRouter } from "next/router";

export const PostStore = createStore(() => {
  const { query } = useRouter();

  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);

  const fetchList = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://fun-calf-70.hasura.app/api/rest/post/${query.id}`,
      {
        method: "get",
        headers: {
          "x-hasura-admin-secret":
            "dVQ1UtSXTfS4uxX1lbZBzMoKMOSBKlssgffrjaS548INt4WB4j3j4knfhYSu6gb0",
        },
      }
    );

    const data: { posts: Post[] } = await response.json();

    setPost(data.posts[0]);
    setLoading(false);
  }, [query.id]);

  useEffect(() => {
    if (!query.id) return;
    fetchList();
  }, [fetchList, query.id]);

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

  return { state: { post, loading }, actions: { removePost } };
});
