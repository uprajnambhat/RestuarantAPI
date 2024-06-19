const getMainDishes = (req, res) => {
  console.log("reached here");
  res.send({
    mainDishes: [
      {
        id: "533143aaff604d567f8b4571",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg",
        name: "Crispy Fish Goujons ",
        price: "$23",
      },
      {
        id: "53314247ff604d44808b4569",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314247ff604d44808b4569.jpg",
        name: "Moroccan Skirt Steak ",
        price: "$25",
      },
      {
        id: "53314276ff604d28828b456b",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314276ff604d28828b456b.jpg",
        name: "Simple Sumptuous Sea Bream",
        price: "$20",
      },
      {
        id: "533143bfff604d44808b456a",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143bfff604d44808b456a.jpg",
        name: "Mozzarella and Pesto Roulades",
        price: "$20",
      },
      {
        id: "5331430fff604d557f8b456d",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5331430fff604d557f8b456d.jpg",
        name: "Mexican Tortilla Stack",
        price: "$23",
      },
      {
        id: "53314328ff604d4d808b456b",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314328ff604d4d808b456b.jpg",
        name: "Roasted Rosemary Butternut Squash ",
        price: "$28",
      },
      {
        id: "53314343ff604d28828b456c",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314343ff604d28828b456c.jpg",
        name: "Gnocchi Allo Genovese",
        price: "$30",
      },
      {
        id: "53314398ff604d6c7a8b456a",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg",
        name: "Herbed Italian Polpetti",
        price: "$25",
      },
      {
        id: "5252b20c301bbf46038b477e",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg",
        name: "Genki Yakitori with Crispy Red Onions",
        price: "$28",
      },
      {
        id: "5331430fff604d557f8b456c",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/sausage-risotto-wk41-a201d2fa.jpg",
        name: "Sausage Risotto",
        price: "$24",
      },
      {
        id: "53314328ff604d4d128b456b",
        image:
          "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/54511c31ff604dee7b8b4571.jpg",
        name: "Bacon Wrapped Pork Loin ",
        price: "$32",
      },
    ],
  });
};

module.exports = getMainDishes;
