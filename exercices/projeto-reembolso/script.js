const header = document.querySelector("header");

const name = document.querySelector("#expense");
const category = document.querySelector("#category");
const amount = document.querySelector("#amount");

const form = document.querySelector("form");
const ul = document.querySelector("ul");

let countExpense = 0;
let amountTotal = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");

  const amountValue = Number(amount.value).toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  let categoryIcon = "./img/others.svg";
  let categoryText = "Desconhecido";

  if (category.value === "food") {
    categoryIcon = "./img/food.svg";
    categoryText = "Alimentação";
  } else if (category.value === "accommodation") {
    categoryIcon = "./img/accommodation.svg";
    categoryText = "Hospedagem";
  } else if (category.value === "services") {
    categoryIcon = "./img/services.svg";
    categoryText = "Serviços";
  } else if (category.value === "transport") {
    categoryIcon = "./img/transport.svg";
    categoryText = "Transporte";
  } else if (category.value === "others") {
    categoryIcon = "./img/others.svg";
    categoryText = "Outros";
  } else {
    categoryIcon = "./img/others.svg";
    categoryText = "Outros";
  }

  const li = `
    <li class="expense">
    <img src="${categoryIcon}" alt="Ícone de tipo da despesa" />

    <div class="expense-info">
        <strong>${name.value}</strong>
        <span>${categoryText}</span>
    </div>

    <span class="expense-amount"><small>R$</small>${amountValue}</span>

    <img src="./img/remove.svg" alt="remover" class="remove-icon" />
    </li>
    `;

  countExpense++;
  amountTotal += Number(amount.value);

  header.innerHTML = `
          <p>
            Minhas solicitações <i>&bullet;</i>
            <span>${countExpense} despesas</span>
          </p>
          <h2><small>R$</small>${Number(amountTotal).toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
          })}</h2>
    `;

  ul.innerHTML += li;
  name.value = "";
  category.value = "";
  amount.value = "";

  let removeIcons = document.querySelectorAll(".remove-icon");

  removeIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("remove");

      const li = e.target.parentNode;
      const amountText = li
        .querySelector(".expense-amount")
        .textContent.replace("R$", "")
        .trim();

      const amountValue = Number(amountText.replace(/\D/g, "")) / 100;

      countExpense--;
      amountTotal -= Number(amountValue);

      if (Number.isNaN(amountTotal)) {
        amountTotal = 0;
      }

      header.innerHTML = `
          <p>
            Minhas solicitações <i>&bullet;</i>
            <span>${countExpense} despesas</span>
          </p>
          <h2><small>R$</small>${Number(amountTotal).toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
          })}</h2>
        `;

      li.remove();
    });
  });
});
