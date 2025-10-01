const mainButton = document.querySelector(".main__button");
const mainBoxIndicator = document.querySelector(".main__boxIndicator");
const mainIndicator = document.getElementById("main__indicator");
const mainResult = document.querySelector(".main__result");

function showResult() {
  mainIndicator.style =
    "animation-name: showIndicator; animation-duration: 5s; animation-fill-mode: both;";
}

mainButton.addEventListener("click", () => {
  const mainInputID = document.getElementById("main__inputID").value;
  mainBoxIndicator.style = "display: flex;";

  showResult();

  setTimeout(function getUserData() {
    console.log(mainInputID);

    if (mainInputID <= 0 || mainInputID > 100) {
      mainResult.innerHTML = `Пользователь с ID &laquo;<b>${mainInputID}</b>&raquo; в базе данных не найден`;
    } else {
      mainResult.innerHTML = `Пользователь с ID &laquo;<b>${mainInputID}</b>&raquo; существует в базе данных`;
    }
    mainBoxIndicator.style = "display: none;";
  }, 5000);
});

