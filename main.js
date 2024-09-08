const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".textInput");
const checkBox = document.querySelector("#checkBox");
const queryField = document.querySelector(".queryField");
const toast = document.querySelector(".toast");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  inputs.forEach((element) => {
    if (element.value.trim() === "") {
      element.classList.toggle("invalidState");
      const parent = element.parentElement;
      parent.children[2].style.visibility = "visible";
      isValid = false;
    } else {
      element.classList.remove("invalidState");
      const parent = element.parentElement;
      parent.children[2].style.visibility = "hidden";
    }
  });
  if (checkBox.checked == false) {
    const parent = checkBox.parentElement.parentElement;
    parent.children[4].style.visibility = "visible";
    isValid = false;
  } else {
    const parent = checkBox.parentElement.parentElement;
    parent.children[4].style.visibility = "hidden";
  }
  if (document.getElementById("1").checked == false && document.getElementById("2").checked == false) {
    queryField.children[1].style.visibility = "visible";
    isValid = false;
  } else {
    queryField.children[1].style.visibility = "hidden";
  }

  if (isValid) {
    showToast();
    inputs.forEach((input) => (input.value = ""));
    checkBox.checked = false;
    document.getElementById("1").checked = false;
    document.getElementById("2").checked = false;
  }
});
function showToast() {
  toast.classList.toggle("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 1500);
}
