const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const refs = {
    body: document.body,
    startBtn: document.querySelector('[data-action = "start"]'),
    stopBtn: document.querySelector('[data-action = "stop"]'),
  };
  
  refs.startBtn.addEventListener("click", onStartBtnClick);
  refs.stopBtn.addEventListener("click", onStopBtnClick);
  let intervalId;
  
  const changeColor = () => {
    const randomColor = colors[randomIntegerFromInterval(0, 5)];
    refs.body.style.backgroundColor = randomColor;
  }
  
  function onStartBtnClick() {
    intervalId = setInterval(changeColor, 1000);
    refs.startBtn.disabled = true;
  }
  
  function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
  }
  