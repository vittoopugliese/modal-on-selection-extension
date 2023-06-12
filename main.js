const allowInput = document.querySelector("#allowInput");
const localData = JSON.parse(localStorage.getItem("allowModal"));

if (localData === null) {
  localData = true;
  localStorage.setItem("allowModal", JSON.stringify(localData));
}

if (localData) {
  allowModalOnSelection();
} else {
  removeModalOnSelection();
}

allowInput.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    allowModalOnSelection();
  } else {
    removeModalOnSelection();
  }
});

function allowModalOnSelection() {
  document.addEventListener("mouseup", showModal);
  localStorage.setItem("allowModal", JSON.stringify(true));
  allowInput.setAttribute("checked", "checked");
}

function removeModalOnSelection() {
  document.removeEventListener("mouseup", showModal);
  localStorage.setItem("allowModal", JSON.stringify(false));
  allowInput.removeAttribute("checked");
}

function showModal() {
  const selectedText = window.getSelection().toString();

  if (selectedText.length > 3) {
    console.log(selectedText);
    alert(selectedText)
  }
}
