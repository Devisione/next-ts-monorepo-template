import { useEffect, useState } from "react";
import { Notification } from "../types/Notifications";

export const useNotificationState = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // pseudo sockets
  useEffect(() => {
    const setValues = () => {
      setNotifications((ntf) => ntf.concat({ id: 1, text: "Hello" }));
    };
    setInterval(setValues, 10000);

    setValues();
  }, []);

  return { notifications, setNotifications };
};
