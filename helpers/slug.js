const createSlug = (title) => {
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    return slug
  };

  export default createSlug;