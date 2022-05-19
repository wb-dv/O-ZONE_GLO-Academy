import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
  const searhInput = document.querySelector(".search-wrapper_input");

  searhInput.addEventListener("input", (event) => {
    const value = event.target.value;

    getData().then((goods) => {
      renderGoods(searchFilter(goods, value));
    });
  });
};

export default search;
