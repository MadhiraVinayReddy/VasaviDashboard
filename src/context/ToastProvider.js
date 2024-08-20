import { createContext, useContext } from "react";
import toast from "react-hot-toast";
const nullfn = () => null;
const ToastContext = createContext({
  success: nullfn,
  error: nullfn,
});
export const useToast = () => useContext(ToastContext);
export const ToastProvider = ({ children }) => {
  const toastStyle = {
    position: "top-right",
    className:
      "font-semibold text-xl border-violet-600 bg-violet-600 border-2 p-5",
    style: {
      minWidth: "250px",
      minHeight: "70px",
    },
  };
  const success = (message) => toast.success(message, toastStyle);
  const errormsg = (message) => toast.error(message, { ...toastStyle });
  const values = {
    success,
    errormsg,
  };
  return (
    <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
  );
};
