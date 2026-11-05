// Seleção de elementos
const multipliForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multipliInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(
  "#multiplication-operations",
);
const multiplicationTitle = document.querySelector(
  "#multiplication-title span",
);

// Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;
    const template = `<div class="row">
          <div class="operation">${number} x ${i} =</div>
          <div class="result">${result}</div>
        </div>`;
    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);
  }
  multiplicationTitle.innerText = number;
};

// Eventos
multipliForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multipliInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) {
    window.alert("Preencha ambos os inputs!!");
    return;
  }

  createTable(multiplicationNumber, multiplicatorNumber);
});
