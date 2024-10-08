"use client";
import React from "react";
import styles from "../../../../../styles/lesson.module.css";
import { useRouter } from "next/navigation";
import ButtonSmall from "./ButtonSmall";

const info = {
  img: "bgLessonCard.jpg",
  title: "FREE GUITAR LESSONS!",
  subTitle:
    "Purchase any guitar over $499.99 and recieve one-hour guitar lesson free.",
  titleButton: "LEARN MORE",
};

const LessonCallOut = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/LessonsPage");
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textSubContainer}>
          <div className={styles.textTitle}> {info.title} </div>
          <div className={styles.textSubTitle}> {info.subTitle} </div>
        </div>
      </div>
      <ButtonSmall texto={"LEARN MORE"} handler={handleBtn} width={"200px"} />
    </div>
  );
};
export default LessonCallOut;
