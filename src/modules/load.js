import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
  const cartBtn = document.getElementById("cart");
  getData().then((goods) => {
    renderGoods(goods);
  });
};

export default load;
