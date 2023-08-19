"use client"
import React from 'react';
import styles from "../../../../../styles/lesson.module.css";
import { useRouter } from 'next/navigation';

const info = {
  img: "bgLessonCard.jpg",
  title: "FREE GUITAR LESSONS!",
  subTitle: "Purchase any guitar over $499.99 and recieve one-hour guitar lesson free.",
  titleButton: "LEARN MORE",
}

const LessonCallOut = () => {

  const router = useRouter();

  const handleBtn = () => {
    router.push('/LessonsPage')
  }
  
  return(
    <div className={styles.container}>
      <img className={styles.backgroundImage}  src={info.img} />
      <div className={styles.textContainer}>
        <div className={styles.textSubContainer}>
          <div className={styles.textTitle}> {info.title} </div>
          <div className={styles.textSubTitle}> {info.subTitle} </div>
        </div>
      </div>
      <button id={styles.button} style={{boxShadow:"none !important"}} onClick={handleBtn}> {info.titleButton} </button>
    </div>
)};
export default LessonCallOut;