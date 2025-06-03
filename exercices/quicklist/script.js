const list = document.querySelector(".item-list");
const input = document.querySelector("#input-item");
const addButton = document.querySelector("#input-button");

const alertMessage = document.querySelector(".remove-alert");
const alertMessageButton = document.querySelector(".remove-alert button");

addButton.addEventListener("click", function () {
  if (!input.value) {
    alert("Por favor insira um item.");
    return;
  }

  list.innerHTML += `<li class="item">
            <div class="item-container">
              <input type="checkbox" name="" id="" />
              <p>${input.value}</p>
            </div>
            <button>
              <img src="./assets/delete.png" class="delete-button" alt="" />
            </button>
          </li>`;

  list.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const item = event.target.closest(".item");
      item.remove();
      alertMessage.style.display = "flex";
    }
  });
});

alertMessageButton.addEventListener("click", function () {
  alertMessage.style.display = "none";
});
