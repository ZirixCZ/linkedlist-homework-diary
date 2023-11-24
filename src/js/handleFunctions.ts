import { Dispatch, SetStateAction } from "react";
import LinkedList from "./diary";
import { RecordInterface } from "./types";

export const handleAdd = (diary: LinkedList) => {
  const title = prompt("Enter title");
  if (!title) {
    return;
  }

  const content = prompt("Enter content");
  if (!content) {
    return;
  }

  const newNode: RecordInterface = {
    id: Date.now(),
    title,
    content,
    date: new Date(),
  };

  return diary?.add(newNode);
};

export const handleSave = (diary: LinkedList) => {
  if (!diary) {
    return;
  }

  const diaryArray = diary.getAll();
  localStorage.setItem("diary", JSON.stringify(diaryArray));
};

export const handleViewAll = (
  diary: LinkedList,
  setDiaryTitleList: Dispatch<SetStateAction<RecordInterface[]>>
) => {
  setDiaryTitleList(diary?.getAll() ?? []);
};

export const handleRandom = (
  diary: LinkedList,
  setRandomRecord: Dispatch<SetStateAction<string>>
) => {
  if (!diary) {
    return;
  }

  const random = diary.getRandom();

  console.log(random);
  if (random) {
    setRandomRecord(random.title);
  }
};

export const handleDelete = (diary: LinkedList | undefined, id: number) => {
  if (!diary) {
    return;
  }

  diary.deleteById(id);
};

export const handlePrevious = (
  diary: LinkedList,
  setRandomRecord: Dispatch<SetStateAction<string>>
) => {
  if (!diary) {
    return;
  }

  const previous = diary.getPrevNode();
  if (previous) {
    setRandomRecord(previous.title);
  }
};

export const handleNext = (
  diary: LinkedList,
  setRandomRecord: Dispatch<SetStateAction<string>>
) => {
  if (!diary) {
    return;
  }

  const next = diary.getNextNode();
  if (next) {
    setRandomRecord(next.title);
  }
};
