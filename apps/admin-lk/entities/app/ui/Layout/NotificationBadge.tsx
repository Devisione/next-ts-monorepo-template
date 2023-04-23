import React from "react";
import { connectContext } from "context-base-api";
import { AppStore } from "../../model/store";
import { Badge, Button } from "@project/ui-kit";
import { SoundOutlined } from "@project/ui-kit/icons";

const NotificationBadge = connectContext(
  [AppStore.Context],
  ([
    {
      state: { notifications },
    },
  ]) => ({ notifications })
)(({ notifications }) => {
  return (
    <div>
      {!!notifications.length && (
        <Badge count={notifications.length}>
          <Button icon={<SoundOutlined />} />
        </Badge>
      )}
    </div>
  );
});

export default NotificationBadge;
