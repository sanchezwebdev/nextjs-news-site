import React from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import useScrollPosition from '../helpers/useScroll'

const Menu = ({ className }) => {
    const scrollY = useScrollPosition();
  const dynamicMarginTop = Math.max(60 - scrollY, 0);
    const sidebarMenuClass = className === 'active' ? styles.sidebarActive : styles.sidebarMenu;
    const menuClass = className === 'active' ? styles.menuActive : styles.menu;
  return (
    <div className={menuClass} style={{ marginTop: `${dynamicMarginTop}px` }}>
      
      <div className={sidebarMenuClass} >
        <ul className={styles.sidebarMenuInner}>
            <li><Link href="/"className={styles.customLink}>Home</Link></li>
            <li><Link href="/local-news"className={styles.customLink}>Local News</Link></li>
            <li><Link href="/california"className={styles.customLink}>California</Link></li>
            <li><Link href="/politics"className={styles.customLink}>Politics</Link></li>
            <li><Link href="/sports"className={styles.customLink}>Sports</Link></li>
            <li><Link href="/education"className={styles.customLink}>Education</Link></li>
            <li><Link href="/business-economy"className={styles.customLink}>Business & Economy</Link></li>
            <li><Link href="/arts-entertainment"className={styles.customLink}>Arts & Entertainment</Link></li>
            <li><Link href="/food-wine"className={styles.customLink}>Food & Wine</Link></li>
            <li><Link href="/health-safety"className={styles.customLink}>Health & Wellness</Link></li>
            <li><Link href="/faith"className={styles.customLink}>Faith</Link></li>
            <li><Link href="/community"className={styles.customLink}>Community</Link></li>
            <li><Link href="/real-estate"className={styles.customLink}>Real Estate</Link></li>
            <li><Link href="/classifieds"className={styles.customLink}>Classifieds</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Menu
