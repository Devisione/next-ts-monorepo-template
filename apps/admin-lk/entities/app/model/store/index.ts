import { createStore } from "context-base-api";
import { useNotificationState } from "../../../notifications/model/store/useNotificationState";

export const AppStore = createStore(() => {
  const { notifications, setNotifications } = useNotificationState();

  return { state: { notifications }, actions: { setNotifications } };
});
