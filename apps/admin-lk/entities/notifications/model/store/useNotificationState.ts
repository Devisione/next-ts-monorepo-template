import { useEffect, useState } from "react";

export const useNotificationState = () => {
  const [notifications, setNotifications] = useState<
    {
      id: number;
      text: string;
    }[]
  >([]);

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
