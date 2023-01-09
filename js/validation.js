const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// Error message for validation form email
const alertParent = document.querySelector(".submit-btn");
const alertMsg = document.createElement("p");
alertParent.appendChild(alertMsg);
alertMsg.innerText = "Veuillez saisir une adresse e-mail valide!!";
alertMsg.style.color = "#ff0000";
alertMsg.style.fontWeight = "500";
alertMsg.style.textShadow = "1px 1px 5px #f15656";
alertMsg.style.padding = "15px";
alertMsg.style.visibility = "hidden";

// When click to the submit button, if the email is in lowercase the form is submit if not the error message show bellow the button
form.addEventListener("submit", (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.visibility = "visible";
    email.style.boxShadow = "1px 1px 10px #d60303";

    setTimeout(() => {
      alertMsg.style.visibility = "hidden";
      email.style.boxShadow = "none";
    }, 10000);
    e.preventDefault();
  } else {
    alertMsg.style.visibility = "hidden";
    email.style.border = "1px solid #808080";
  }
});

//  The data "input" is preserve in the local storage
form.addEventListener("input", () => {
  const input = {
    enterName: nameInput.value,
    enterEmail: email.value,
    enterSubject: subjectInput.value,
    enterMessage: messageInput.value,
  };
  localStorage.setItem("dataStorage", JSON.stringify(input));
});

let savedDataStorage = localStorage.getItem("dataStorage");
savedDataStorage = JSON.parse(savedDataStorage);

window.onload = () => {
  if (savedDataStorage) {
    nameInput.value = savedDataStorage.enterName;
    email.value = savedDataStorage.enterEmail;
    subjectInput.value = savedDataStorage.enterSubject;
    messageInput.value = savedDataStorage.enterMessage;
  }
};
