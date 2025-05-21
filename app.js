function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteOne() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    display.value = Number.isFinite(result) ? result : 'خطا';
  } catch {
    display.value = 'خطا';
  }
}