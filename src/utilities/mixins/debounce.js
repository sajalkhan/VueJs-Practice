const debounce = (fnc, wait = 1000) => {
  let timeout;

  //TODO: whatever you enter in this functin it will return after a specific tiem
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fnc(...args);
    }, wait);
  };
};

export default debounce;
