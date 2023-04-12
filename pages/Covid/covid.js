const covid_yes = document.querySelector("#covid_yes");
const covid_no = document.querySelector("#covid_no");
const covid_now = document.querySelector("#covid_now");
const test_yes = document.querySelector("#test_yes");
const test_no = document.querySelector("#test_no");

const test_amount_title = document.querySelector(".test-amount-title");
const test_date = document.querySelector("#test_date");
const amount = document.querySelector("#amount");

const covid_date_title = document.querySelector(".covid-date");
const covid_date = document.querySelector("#covid-date");

const test_question = document.querySelector(".test-question");
const test_boxes = document.querySelectorAll(".test-box");

covid_yes.addEventListener("input", () => {
  test_question.classList.add("active");
  test_boxes.forEach((box) => box.classList.add("active"));
});

covid_no.addEventListener("input", () => {
  test_question.classList.remove("active");
  test_boxes.forEach((box) => box.classList.remove("active"));
});

covid_now.addEventListener("input", () => {
  test_question.classList.remove("active");
  test_boxes.forEach((box) => box.classList.remove("active"));
});

test_yes.addEventListener("input", () => {
  test_amount_title.classList.add("active");
  test_date.classList.add("active");
  amount.classList.add("active");
  covid_date_title.classList.remove("active");
  covid_date.classList.remove("active");
});

test_no.addEventListener("input", () => {
  covid_date_title.classList.add("active");
  covid_date.classList.add("active");
  test_amount_title.classList.remove("active");
  test_date.classList.remove("active");
  amount.classList.remove("active");
});

const onPreviousPage = () => {
  document.location.href = "../Personal/personal.html";
};

const onNextPage = () => {
  document.location.href = "../Vaccine/vaccine.html";
};
