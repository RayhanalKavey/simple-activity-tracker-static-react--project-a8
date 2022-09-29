const addToLocalStorage = (value) => {
  localStorage.setItem("added-break-time", JSON.stringify(value));
};
const getLocalStorageValue = () => {
  const getValue = localStorage.getItem("added-break-time");
  return getValue;
};
export { addToLocalStorage, getLocalStorageValue };
