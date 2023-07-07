export const CapitalizeFirst = (value: string) => {
  const newValues = value?.toLocaleLowerCase().split(" ");
  const result = newValues?.reduce((prevValue, item, index) => {
    const start = item?.charAt(0)?.toLocaleUpperCase();
    const newText = start + item.slice(1);
    if (index === 0) {
      return newText;
    }
    return prevValue + " " + newText;
  }, "");
  return result;
};
