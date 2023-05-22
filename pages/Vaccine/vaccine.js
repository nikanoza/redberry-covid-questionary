const vaccine_yes = document.querySelector("#vaccine_yes");
const vaccine_no = document.querySelector("#vaccine_no");
const level_question = document.querySelector(".level-question");
const level_boxes = document.querySelectorAll(".level-box");
const wait_question = document.querySelector(".wait-question");
const wait_boxes = document.querySelectorAll(".wait-box");

const onPreviousPage = () => {
  document.location.href = "../Covid/covid.html";
};

const onNextPage = () => {
  document.location.href = "../Office/office.html";
};

vaccine_yes.addEventListener("input", () => {
  level_question.classList.add("active");
  level_boxes.forEach((box) => box.classList.add("active"));
  wait_question.classList.remove("active");
  wait_boxes.forEach((box) => box.classList.remove("active"));
});

vaccine_no.addEventListener("input", () => {
  wait_question.classList.add("active");
  wait_boxes.forEach((box) => box.classList.add("active"));
  level_question.classList.remove("active");
  level_boxes.forEach((box) => box.classList.remove("active"));
});
