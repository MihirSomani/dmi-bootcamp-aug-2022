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

setInterval(() => {
  console.log("+1 sec");
}, 1000);

myPromise.then(console.log).catch(console.log);

const syncWait = (ms) => {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    console.log("I own the only thread available 😈😈😈!");
    continue;
  }
};
