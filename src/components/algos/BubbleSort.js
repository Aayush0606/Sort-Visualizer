export default async function BubbleSort({ myArr, sortArr, testSetter }) {
  let test = new Array(myArr.length).fill(0);
  const swap = async (j) => {
    if (myArr[j] > myArr[j + 1]) {
      let temp = myArr[j];
      myArr[j] = myArr[j + 1];
      myArr[j + 1] = temp;
    }
  };

  const barChange = async (i, j) => {
    let test = new Array(myArr.length).fill(0);
    if (i !== 0) {
      for (let k = myArr.length - i; k < myArr.length; k++) {
        test[k] = 3;
      }
    }
    if (i === myArr.length - 2) {
      test = new Array(myArr.length).fill(3);
    } else {
      test[j] = 1;
      test[j + 1] = 1;
    }
    testSetter(test);
  };

  for (let i = 0; i < myArr.length - 1; i++) {
    for (let j = 0; j < myArr.length - i; j++) {
      const res = setTimeout(async () => {
        await swap(j);
        await barChange(i, j);
      }, 1000);
    }
  }
  sortArr(myArr);
}
