const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", //요소검사에 뜨는 이름
  SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text); //input의 입력값을 저장
}

function handleSubmit(event) {
  event.preventDefault(); //submit의 기본 이벤트를 삭제
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); //css를 확인하면 form은 none으로 되어있는데 이를 풀어주는 역할
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //form의 showing 클래스를 삭제해서 숨김
  greeting.classList.add(SHOWING_CN); //h4에 showing 클래스를 부여해 나타나게함
  greeting.innerText = `Hello ${text}`; //h4에 이름 보이게하기
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
