const getBreakFastItems = (req, res) => {
  console.log("reached breakfastItems");
  res.send([
    {
      name: "Pancakes",
      price: 5.99,
    },
    {
      name: "Omelette",
      price: 6.99,
    },
    {
      name: "French Toast",
      price: 7.49,
    },
    {
      name: "Bagel with Cream Cheese",
      price: 3.99,
    },
    {
      name: "Breakfast Burrito",
      price: 8.49,
    },
    {
      name: "Smoothie Bowl",
      price: 7.99,
    },
    {
      name: "Avocado Toast",
      price: 6.49,
    },
    {
      name: "Waffles",
      price: 6.99,
    },
    {
      name: "Scrambled Eggs",
      price: 4.99,
    },
    {
      name: "Fruit Parfait",
      price: 5.49,
    },
    {
      name: "Egg Sandwich",
      price: 4.79,
    },
    {
      name: "Cinnamon Roll",
      price: 3.29,
    },
    {
      name: "Granola with Yogurt",
      price: 5.99,
    },
    {
      name: "Hash Browns",
      price: 2.99,
    },
    {
      name: "Muffin",
      price: 2.49,
    },
  ]);
};

module.exports = getBreakFastItems;
