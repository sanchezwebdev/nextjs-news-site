const createSlug = (title) => {
    const slug = title.toLowerCase()
    .replace(/ /g, '-')
    .replace(/ & /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
    return slug
  };

  export default createSlug;