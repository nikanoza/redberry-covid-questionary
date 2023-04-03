const nameError = document.querySelector("#name-error");
const surnameError = document.querySelector("#surname-error");
const emailError = document.querySelector("#email-error");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");

let trySubmit = false;

const nameCheckFunc = () => {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "სახელის ველი არ უნდა იყოს ცარიელი";
    return false;
  }
  if (!(nameInput.value.trim().length > 1)) {
    nameError.textContent =
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან";
    return false;
  }
  nameError.textContent = "";
  return true;
};

const surnameCheckFunc = () => {
  if (surnameInput.value.trim() === "") {
    surnameError.textContent = "გვარის ველი არ უნდა იყოს ცარიელი";
    return false;
  }
  if (!(surnameInput.value.trim().length > 1)) {
    surnameError.textContent =
      "გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან";
    return false;
  }
  surnameError.textContent = "";
  return true;
};

const emailCheckFunc = () => {
  const value = emailInput.value.trim();
  if (value === "") {
    emailError.textContent = "ელ.ფოსტის ველი არ უნდა იყოს ცარიელი";
    return false;
  }
  if (!value.includes("@") || !value.includes(".")) {
    emailError.textContent = "უნდა აკმაყოფილებდეს ელ.ფოსტის ფორმატს";
    return false;
  }

  if (!value.endsWith("@redberry.ge")) {
    emailError.textContent = "უნდა მთავრდებოდეს @redberry.ge სუფიქსით";
    return false;
  }
  emailError.textContent = "";
  return true;
};

nameInput.addEventListener("input", () => {
  if (trySubmit) {
    nameCheckFunc();
  }
});

surnameInput.addEventListener("input", () => {
  if (trySubmit) {
    surnameCheckFunc();
  }
});

emailInput.addEventListener("input", () => {
  if (trySubmit) {
    emailCheckFunc();
  }
});

const onNextPage = () => {
  if (!trySubmit) {
    trySubmit = true;
  }
  const nameStatus = nameCheckFunc();
  const surnameStatus = surnameCheckFunc();
  const emailStatus = emailCheckFunc();

  if (nameStatus && surnameStatus && emailStatus) {
    document.location.href = "../Covid/covid.html";
  }
};
