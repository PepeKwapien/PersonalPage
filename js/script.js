var myName = document.getElementById("myName");
console.log(myName);

let names = [
  ["e", "p", "e"],
  ["a", "w", "e", "ł"],
];

async function waitUntil(condition, action, intervalTime) {
  return await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (condition()) {
        resolve();
        clearInterval(interval);
      } else {
        action();
      }
    }, intervalTime);
  });
}

var whichName = 0;
var intervalTime = 200;
var lap = 0;

async function removeAndChangeName() {
  await waitUntil(
    () => myName.innerHTML.length <= 1,
    () => {
      myName.innerHTML = myName.innerHTML.slice(0, -1);
    },
    intervalTime
  );

  var whichLetter = 0;

  await waitUntil(
    () => myName.innerHTML.length > names[whichName].length,
    () => {
      myName.innerHTML += names[whichName][whichLetter];
      whichLetter++;
    },
    2 * intervalTime
  );

  whichName = ++whichName % 2;
}

setInterval(removeAndChangeName, 5000);
