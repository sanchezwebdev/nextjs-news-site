import { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import useScrollPosition from '../helpers/useScroll'
import SearchComponent from '../components/Search'

const Menu = ({ className }) => {
  const [isTransitionDisabled, setIsTransitionDisabled] = useState(false);
  const scrollY = useScrollPosition();
  // Calculating dynamic margin-top based on scroll position.
  const dynamicMarginTop = Math.max(60 - scrollY, 0);
  // Conditional class name for the menu based on the 'active' state.
  const menuClass = className === 'active' ? styles.menuActive : styles.menu;
  // Conditional class names for the sidebar menu based on 'active' state and transition state.
  const sidebarMenuClass = className === 'active'
  ? isTransitionDisabled ? `${styles.sidebarActive} ${styles.noTransition}` : styles.sidebarActive
  : isTransitionDisabled ? `${styles.sidebarMenu} ${styles.noTransition}` : styles.sidebarMenu;

  // Effect hook to manage the transition state during window resize.
  useEffect(() => {
    const handleResize = () => {
      setIsTransitionDisabled(true);
      setTimeout(() => {
        setIsTransitionDisabled(false);
      }, 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={menuClass} style={{ marginTop: `${dynamicMarginTop}px`}}>
      <div className={sidebarMenuClass}>
        <ul className={styles.sidebarMenuInner}>
            <li><SearchComponent className={styles.search}/></li>
            <li><Link href="/"className={styles.customLink}>Home</Link></li>
            <li><Link href="/local-news"className={styles.customLink}>Local News</Link></li>
            <li><Link href="/california"className={styles.customLink}>California</Link></li>
            <li><Link href="/politics"className={styles.customLink}>Politics</Link></li>
            <li><Link href="/sports"className={styles.customLink}>Sports</Link></li>
            <li><Link href="/business-economy"className={styles.customLink}>Business & Economy</Link></li>
            <li><Link href="/arts-entertainment"className={styles.customLink}>Arts & Entertainment</Link></li>
            <li><Link href="/food-wine"className={styles.customLink}>Food & Wine</Link></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Menu
