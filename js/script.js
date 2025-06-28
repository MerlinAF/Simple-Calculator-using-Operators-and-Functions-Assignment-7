let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert('Invalid Input');
    clearDisplay();
  }
}

function square() {
  if (display.value) {
    display.value = Math.pow(display.value, 2);
  }
}

function cube() {
  if (display.value) {
    display.value = Math.pow(display.value, 3);
  }
}