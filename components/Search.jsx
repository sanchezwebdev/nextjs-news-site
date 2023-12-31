import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SearchComponent.module.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
      className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit" className={styles.button}><SearchIcon style={{fontSize: 'xx-large'}}/></button>
    </form>
  );
};

export default SearchInput;
