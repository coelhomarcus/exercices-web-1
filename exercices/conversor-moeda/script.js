const input = document.getElementById("amount");
const select = document.getElementById("currency");
const result = document.getElementById("result");
const description = document.getElementById("description");
const form = document.querySelector("form");
const footer = document.querySelector("footer");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);

    let coin = 1;

    if (select.value === "USD") {
        coin = 4.86;
    } else if (select.value === "EUR") {
        coin = 5.25;
    } else if (select.value === "GBP") {
        coin = 6.10;
    }

    const amount = parseFloat(input.value);
    const value = amount * coin;

    description.innerHTML = `${select.value} 1.00 = R$ ${coin.toFixed(2)}`;
    result.innerHTML = `${value.toFixed(2)} Reais`;
    footer.style.display = "block";
});