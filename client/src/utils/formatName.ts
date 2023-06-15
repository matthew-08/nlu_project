const formatName = (name: string) => {
  return name.replace(/\s+/g, '-').toLowerCase();
};

export default formatName;
