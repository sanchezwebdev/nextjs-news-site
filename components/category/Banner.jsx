import React, { useState, useEffect, useRef } from 'react';
import {useRouter} from 'next/router'
import styles from '../../styles/Banner.module.css';

const Banner = ({ data }) => {

  let titleClass = styles.title;
  let imageClass;

  switch (data.headerCategory) {
    case 'Arts & Entertainment':
      titleClass = `${titleClass} ${styles.longTitle}`;
      imageClass = styles.imageArts;
      break;
    case 'Business & Economy':
      titleClass = `${titleClass} ${styles.longTitle}`;
      imageClass = styles.imageBusiness;
      break;
    case 'Local News':
    case 'Food & Wine':
      titleClass = `${titleClass} ${styles.medTitle}`;
      imageClass = styles.imageLocal;
      break;
    case 'California':
      imageClass = styles.imageCali;
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <div className={titleClass}>{data.headerCategory}</div>
      <img
        src={data.headerImgUrl}
        className={`${styles.image} ${imageClass}`}
        alt=""
      />
    </div>
  );
};

export default Banner;
