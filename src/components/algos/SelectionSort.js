export default async function SelectionSort({ myArr, sortArr, testSetter }) {
  let test = new Array(myArr.length).fill(0);
  const swap = async (i, j) => {
    if (myArr[j] < myArr[i]) {
      let temp = myArr[j];
      myArr[j] = myArr[i];
      myArr[i] = temp;
    }
  };

  const barChange = async (i, j) => {
    let test = new Array(myArr.length).fill(0);
    if (i !== 0) {
      for (let k = 0; k <= i - 1; k++) {
        test[k] = 3;
      }
    }
    if (i === myArr.length - 2) {
      test = new Array(myArr.length).fill(3);
    } else {
      test[i] = 1;
      test[j] = 1;
    }
    testSetter(test);
    swap(i, j);
  };

  for (let i = 0; i < myArr.length - 1; i++) {
    setTimeout(() => {
      for (let j = i + 1; j < myArr.length; j++) {
        setTimeout(async () => {
          await swap(i, j);
          await barChange(i, j);
        }, 100 * j);
      }
    }, 100 * i * myArr.length);
  }
  sortArr(myArr);
}
