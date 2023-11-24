export type Action =
  | "ADD"
  | "REMOVE"
  | "EDIT"
  | "VIEWALL"
  | "NEXT"
  | "PREV"
  | "RANDOM"
  | "CLOSE"
  | "SAVE";

export interface RecordInterface {
    id: number;
    date: Date;
    title: string;
    content: string;
}
