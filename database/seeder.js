const moment = require('moment');
const mysql = require('mysql');
const databaseconfig = require('./config.js');

const ITEM_COUNT = 100;

const restaurants = [];
for (let i = 0; i < ITEM_COUNT; i += 1) {
  restaurants.push([(i + 1).toString()]);
}

const users = [
  [null, 'FryLover', false, 'Scotland', '3'],
  [null, 'FreeTable Diner', true, 'San Francisco', '8'],
  [null, 'DrNick', false, null, '2'],
  [null, 'MiltonJ', false, 'San Francisco', '1'],
  [null, 'Pomegranate', true, 'New York Area', '4'],
];

// user_id needs to be programatically set based on i?
// dined_date needs to be programatically inserted as an offset of the date to keep this stuff fresh
const reviews = [
  [null, 'FIX ME', 'FIX ME', 1, '4', '5', '3', '4', '4', 'moderate', true, true, 'The flavours/tastes were brilliant. We tasted the trout, loved the scallops - very umami, only the duck was a bit problematic. It fell off the bone which is an indication it came from the freezer/cooler and was re-heated, but the taste was so good we ate the whole thing. The kitchen needs to dissolve the freezer issue. We will be back, but not for the duck.'],
  [null, 'FIX ME', 'FIX ME', 2, '5', '5', '5', '5', '5', 'moderate', true, true, 'The food was simply amazing : from presentation to taste everything was spot on.\nUnlike the other “Indian” restaurants in the bay area, every curry tasted different!!'],
  [null, 'FIX ME', 'FIX ME', 3, '3', '3', '3', '3', '2', 'moderate', false, true, 'not memorable. good enough for a lunch but not special in any way nor anything to go back to.'],
  [null, 'FIX ME', 'FIX ME', 7, '3', '4', '1', '4', '3', 'moderate', false, true, 'Service was terrible, were seated without menus, asked for menus from the host after 20 min, sat for another 15 mean before we went back to the host and asked if we could have a waiter, the waiter finally arrived, i told him about my gluten allergy and he said he would get back to me about what dishes were GF and after waiting another 10 min when he never got back to us I asked the host (who was so kind) for another waiter, she brought the manager who was kind and confirmed my order was GF.'],
  [null, 'FIX ME', 'FIX ME', 2, '5', '5', '5', '5', '5', 'moderate', true, true, 'One of my favorite places for brunch & sharing with out of town guest. Creative take on some classic Indian & American dishes.'],
  [null, 'FIX ME', 'FIX ME', 9, '4', '4', '5', '5', '4', 'moderate', true, true, 'Disappointed - food is not as good as it was on previous visits (it’s been over a year since we were here). The only memorable dish was dessert (mango pana cotta). Delightful waitress and excellent cocktail.'],
  [null, 'FIX ME', 'FIX ME', 3, '3', '3', '3', '4', '2', 'quiet', true, true, 'Bit overpriced for the food delivered'],
  [null, 'FIX ME', 'FIX ME', 4, '3', '4', '3', '3', '1', 'loud', false, true, 'Food was ok, service was odd. Dishes placed on our table with comment like " this is chicken". We were pre theater and the could not get us out in 1 hour and 15 min. Pro- Drinks are awesome. Con- it\'s super expensive for fairly pedestrian food. We like Amber and Dosa much more.'],
  [null, 'FIX ME', 'FIX ME', 1, '5', '5', '5', '5', '5', 'moderate', true, true, 'Fascinating Indian Fusion dishes! Wonderful, delicious and visually stunning mocktails and cocktails - I recommend the Pink City and the Spicy Gold drinks. We also enjoyed, for the meal, the very crispy baby spinach Palak Chaat, the mushroom and cheese Kulcha, and the Appams. Do check out their menus!! The decor is beautiful- an elegant interpretation very consistent with their style of cuisine: traditional elements of deep turquoise and peacock feather in a completely contemporary application. You must not miss this experience!'],
  [null, 'FIX ME', 'FIX ME', 11, '4', '4', '5', '5', '4', 'moderate', true, true, 'Everything is great except the chicken kebab is very bland.'],
];

const fullReviews = [];
for (let j = 0; j < restaurants.length; j += 1) {
  const reviewCount = Math.floor(Math.random() * 200 + 1);
  for (let i = 0; i <= reviewCount; i += 1) {
    const randomReview = Math.floor(Math.random() * 10);
    const randomUser = Math.floor(Math.random() * 5);
    const review = reviews[randomReview].slice();
    // set which restaraunt the review is for
    review[1] = restaurants[j];
    // compute which user authored the review
    review[2] = (randomUser + 1).toString();
    // compute the date timestamp for MySQL
    const offset = review[3];
    const reviewDate = moment().subtract(offset, 'days').format();
    review[3] = reviewDate.slice(0, reviewDate.indexOf('T'));
    fullReviews.push(review);
  }
}

const connection = mysql.createConnection(databaseconfig);

connection.query('INSERT INTO restaurant_pages (page_id) VALUES ?', [restaurants], (err, results) => {
  if (err) {
    console.log('error while seeding restaurant_pages', err);
  } else {
    console.log('seeding of restaurant_pages completed successfully', results);
  }
});

connection.query('INSERT INTO users (user_id, name, vip, location, review_count) VALUES ?', [users], (err, results) => {
  if (err) {
    console.log('error while seeding users in the database', err);
  } else {
    console.log('seeding of users completed successfully', results);
  }
});

connection.query('INSERT INTO reviews (review_id, page_id, user_id, dined_date, overall, food, service, ambiance, value, noise, would_recommend, good_for_groups, description) VALUES ?', [fullReviews], (err, results) => {
  if (err) {
    console.log('error while seeding reviews in the database', err);
  } else {
    console.log('seeding of reviews completed successfully', results);
  }
});
