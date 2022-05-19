const postData = () => {
  return fetch(
    "https://o-zone-glo-academy-default-rtdb.firebaseio.com/goods.json",
    {
      method: "POST",
      body: JSON.stringify({
        title: "Ведьмак 3",
        price: 3000,
        sale: true,
        img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
        category: "Игры и софт",
      }),
    }
  ).then((res) => res.json());
};

export default postData;
