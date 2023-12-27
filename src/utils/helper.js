export function addComma(number) {
  const arrNum = [...(number + "")];
  const newArr = [];

  let count = 0;

  for (let i = 0; i < arrNum.length; i++) {
    const value = arrNum[arrNum.length - 1 - i];
    if (value) {
      count++;
      newArr.unshift(value);
      if (count === 3) {
        if (arrNum[arrNum.length - 2 - i]) newArr.unshift(",");
        count = 0;
      }
    }
  }
  return newArr.join("");
}
