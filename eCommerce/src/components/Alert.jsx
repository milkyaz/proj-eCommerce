import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../features/alertSlice";

export function Alert() {
  const message = useSelector((state) => state.alert.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => dispatch(hideAlert()), 1500);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div
      id="toast-container"
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        zIndex: 9999,
      }}
    >
      {message} добавлен в корзину
    </div>
  );
}
