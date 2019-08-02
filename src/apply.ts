const apply = (action: string, ...args: string[]) => {
  require(`./${action}`)(...args);
};

export default apply;
