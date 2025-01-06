const forEach = (items: number[], callback: (n: number) => number) => {
  items.map(callback);
};

export default forEach;
