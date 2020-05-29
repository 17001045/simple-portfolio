import Swal from "sweetalert2";

export const alertSwal = async ({ text, title, icon }: IAlert) => {
  return await Swal.fire(title, text, icon);
};

export const confimSwal = async ({
  title,
  text,
  cancelButtonText,
  confirmButtonText,
  icon
}: IConfirm) => {
  return await Swal.fire({
    title,
    text,
    icon: icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText
  });
};

interface IAlert {
  title: string;
  text?: string;
  icon: EIcon;
}
interface IConfirm {
  title: string;
  text?: string;
  confirmButtonText: string;
  cancelButtonText: string;
  icon: EIcon;
}

export enum EIcon {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  QUESTION = "question"
}
