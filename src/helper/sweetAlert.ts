import Swal from "sweetalert2";

export enum SweetIcon {
  SUCCESS = "success",
}

export const notify = (msg: string, icon: SweetIcon) =>
  Swal.fire({
    title: "Todo App!",
    text: msg,
    icon: icon,
    confirmButtonText: "Cool",
  });
