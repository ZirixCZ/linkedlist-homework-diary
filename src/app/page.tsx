"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import LinkedList from "@/js/diary";
import { Action, RecordInterface } from "@/js/types";
import { handleRandom, handlePrevious, handleAdd, handleDelete, handleNext, handleSave, handleViewAll } from "@/js/handleFunctions";

export default function Home() {
  const [diary, setDiary] = useState<LinkedList>();
  const [randomRecord, setRandomRecord] = useState<string>("");
  const [diaryTitleList, setDiaryTitleList] = useState<RecordInterface[]>([]);

  useLayoutEffect(() => {
    const diaryJSON = localStorage.getItem("diary");
    const parsedDiary = diaryJSON ? JSON.parse(diaryJSON) : null;

    if (parsedDiary) {
      setDiary(new LinkedList(parsedDiary));
    } else {
      setDiary(new LinkedList());
    }
  }, []);

  useLayoutEffect(() => {
    if (!diary) {
      return
    }

    handleRandom(diary, setRandomRecord);
    handleViewAll(diary, setDiaryTitleList);
  }, [diary])

  const handleClick = (action: Action) => {
    if (diary) {
      switch (action) {
        case "PREV":
          handlePrevious(diary, setRandomRecord);
          break;
        case "RANDOM":
          handleRandom(diary, setRandomRecord);
          break;
        case "NEXT":
          handleNext(diary, setRandomRecord);
          break;
        case "VIEWALL":
          handleViewAll(diary, setDiaryTitleList);
          break;
        case "ADD":
          handleAdd(diary);
          handleViewAll(diary, setDiaryTitleList);
          break;
        case "SAVE":
          handleSave(diary);
          break;
      }
    }
  };

  const formatTime = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  };

  const buttons: { label: string; action: Action; padding?: boolean }[] = [
    { label: "Previous", action: "PREV" },
    { label: "Random", action: "RANDOM" },
    { label: "Next", action: "NEXT", padding: true },
    { label: "Show all", action: "VIEWALL" },
    { label: "New diary", action: "ADD" },
    { label: "Save", action: "SAVE" },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full">
      <h1 className="text-7xl tracking-widest">Diary</h1>
      <main className="main">
        <p id="random-diary-paragraph">{randomRecord}</p>
        <div className="controls max-w-lg">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="box-border w-full mb-4 py-2 border border-gray-800 rounded bg-white hover:bg-gray-800 hover:text-white"
              style={{ marginBottom: button.padding ? "3rem" : "" }}
              onClick={() => handleClick(button.action)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="flex gap-8 flex-col overflow-scroll h-[20rem]">
          {diaryTitleList.map((record, index) => (
            <div key={index}>
              <div className="font-bold">{record.title}</div>
              <div className="font-light">
                {formatTime(new Date(record.date))}
              </div>
              <div className="mt-2">{record.content}</div>
              <p
                onClick={() => handleDelete(diary, record.id)}
                className="mt-2 font-black cursor-pointer"
              >
                delete
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer>Michal Vaniš</footer>
    </div>
  );
}
