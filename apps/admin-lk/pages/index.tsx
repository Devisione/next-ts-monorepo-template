import React from "react";
import { theme, Table, Space } from "@project/ui-kit";

import { connectContext } from "context-base-api";
import { PostListStore } from "../entities/post/model/store/PostList";
import { Post } from "../entities/post/model/types";
import Link from "next/link";

const MainPage = connectContext(
  [PostListStore.Context],
  ([
    {
      state: { posts, loading },
      actions: { removePost },
    },
  ]) => ({ posts, removePost, loading })
)(({ posts, removePost, loading }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
      }}
    >
      <Table
        loading={loading}
        columns={columns({ removePost })}
        dataSource={posts}
      />
    </div>
  );
});

export default () => {
  return (
    <PostListStore.Provider>
      <MainPage />
    </PostListStore.Provider>
  );
};

const columns = ({ removePost }: any) => [
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
    render: (text: string, record: Post) => (
      <Link href={`/post/${record.id}`}>{text}</Link>
    ),
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, record: Post) => (
      <Space size="middle">
        <a onClick={() => removePost(record.id)}>Delete</a>
      </Space>
    ),
  },
];
