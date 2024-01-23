import { useRouter } from 'next/router';
import createSlug from '../../helpers/slug';
import styles from "../../styles/CardSecondary.module.css";
import { Divider } from "@mui/material";

const CardSecondary = ({ data, className }) => {
  if (!data) {
    return null;
  }

  const router = useRouter();
  let titleClass = styles.title;
  let imageClass = styles.image;
  let descriptionClass = styles.description;
  const combinedClassName = `${styles.containerSecondary} ${className}`;

   // Iterating through numbers 1 to 12 to check if 'className' includes a specific cardMain class.
  for (let i = 1; i <= 12; i++) {
    if (className.includes(`cardSecondary${i}_`)) {
      titleClass = `${styles[`title${i}`] || ''} ${styles.title}`;
      imageClass = `${styles[`image${i}`] || ''} ${styles.image}`;
      descriptionClass = `${styles[`description${i}`] || ''} ${styles.description}`;
      break; 
    }
  }

  // Function to handle navigation when any part of the card is clicked.
  const handleNavigation = () => {
    if (data.title) {
      const titleSlug = createSlug(data.title);
      const categorySlug = createSlug(data.category);
      router.push(`/${categorySlug}/${titleSlug}`);
    }
  };

  return (
    <div className={combinedClassName} onClick={handleNavigation}>
      <img src={data.imgUrl} alt={data.title} className={imageClass} onClick={handleNavigation}/>
      <div className={titleClass} onClick={handleNavigation}>{data.title}</div>
      <div className={descriptionClass} onClick={handleNavigation}>{data.description}</div>
      <Divider className={styles.cardDivider}/>
    </div>
  );
};

export default CardSecondary;
