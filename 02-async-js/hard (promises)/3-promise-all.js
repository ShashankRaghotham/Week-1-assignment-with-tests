/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function waitOneSecond() {
  return delay(1000);
}

function waitTwoSecond() {
  return delay(2000);
}

function waitThreeSecond() {
  return delay(3000);
}

function calculateTime() {
  const startTime = Date.now();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then(() => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`The time taken is: ${duration}`);
    })
    .catch((error) => {
      console.log(`Error occured ${error}`);
    });
}

calculateTime();
