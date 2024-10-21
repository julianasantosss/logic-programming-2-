const input = document.getElementById("number");
const calculate = document.querySelector(".calculate");

calculate.addEventListener("click", function () {
  if (input.value == "") {
    modalAlert("Enter a number");
  } else {
    const result = document.querySelector(".result");
    const inputP = parseInt(input.value);
    let factorial = 1; 
    let factorialString = "";  

    for (let index = inputP; index >= 1; index--) {
      factorial *= index;  
      factorialString += index;  
      if (index > 1) {
        factorialString += " * ";  
      }
    }

    result.textContent = `${inputP}! = ${factorialString} = ${factorial}`;
    input.value = "";
  }
});

input.addEventListener("input", function () {
  const inputCheck = document.getElementById("number").value;
  const containLetters = /[a-zA-Z]/.test(inputCheck);
  if (containLetters) {
    modalAlert("No letters allowed");
    const emptyLetters = inputCheck.replace(/[a-zA-Z]/g, "");
    this.value = emptyLetters;
  }
});

function modalAlert(message) {
  Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    confirmButtonText: "Close",
  });
}
