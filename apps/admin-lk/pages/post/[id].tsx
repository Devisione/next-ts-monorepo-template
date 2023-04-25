import { PostStore } from "../../entities/post/model/store/Post";
import { connectContext } from "context-base-api";
import { theme } from "@project/ui-kit";

const PostPage = connectContext(
  [PostStore.Context],
  ([
    {
      state: { post },
    },
  ]) => ({ post })
)(({ post }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (!post) return null;

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
      }}
    >
      <div>{post.label}</div>
      <div>{post.full_text}</div>
    </div>
  );
});

export default () => {
  return (
    <PostStore.Provider>
      <PostPage />
    </PostStore.Provider>
  );
};
