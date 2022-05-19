import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
  const catalogBtn = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItem = catalogModal.querySelectorAll("li");

  let isOpen = false;

  catalogBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    catalogModal.style.display = isOpen ? "block" : "";
  });

  catalogModalItem.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent;

      getData().then((goods) => {
        renderGoods(categoryFilter(goods, text));
      });
    });
  });
};

export default catalog;
