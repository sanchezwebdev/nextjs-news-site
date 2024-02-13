import styles from '../styles/Loading.module.css'
const LoadingModal = () => (
    <div className={styles.loadingModal}>
       <div className={styles.spinner}></div>
      Loading...
    </div>
  );
  
  export default LoadingModal;
  