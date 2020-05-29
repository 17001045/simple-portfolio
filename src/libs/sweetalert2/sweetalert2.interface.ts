export interface IAlert {
  title: string;
  text?: string;
  icon: EIcon;
}
export interface IConfirm {
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
