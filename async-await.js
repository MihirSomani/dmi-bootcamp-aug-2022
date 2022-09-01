const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Success");
    }, 5000);
  } else {
    setTimeout(() => {
      reject("Failure");
    }, 5000);
  }
});

setTimeout(() => {
  while (true) {}
}, 0);

myPromise
  .then((value) => {
    console.log(value);
    for (let i = 0; i < 100; i++) {
      console.log("promises", i);
    }
  })
  .catch(console.log);

async function myAsyncFunc() {
  try {
    const value = await myPromise;
    console.log(value);
    for (let i = 0; i < 100; i++) {
      console.log("async/await", i);
    }
    //   const secondValue = await mySecondPromise;
    //   console.log(secondValue);
  } catch (e) {
    console.error(e);
  }
}

myAsyncFunc();

console.log("Hello World");
