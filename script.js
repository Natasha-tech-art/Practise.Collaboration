let count = 0;

function updateCounter() {
  console.log("Current count:", count);
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}
