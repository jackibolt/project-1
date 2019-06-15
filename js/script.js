/******************************************
Treehouse FSJS Techdegree: Jacki Bolt
project 1 - A Random Quote Generator
******************************************/


/*** 
Array of quotes
***/

var quotes = [
  {
    Quote: 'Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.',
    Source: 'Ron Swanson',
    Citation: 'Parks & Recreation',
    Year: '2012',
    Topic: 'Dessert'
  },
  {
    Quote: 'There has never been a sadness that can’t been cured by breakfast food.',
    Source: 'Ron Swanson',
    Citation: 'Parks & Recreation',
    Topic: 'Breakfast'
  },
  {
    Quote: 'Time is money, money is power, power is pizza, and pizza is knowledge..',
    Source: 'April Ludgate',
    Year: '2015',
    Topic: 'Pizza',
  },
  {
    Quote: 'Sometimes you gotta work a little so you can ball a lot.',
    Source: 'Tom Haverford',
    Citation: 'Parks & Recreation',
  },
  {
    Quote: 'What I hear when I\'m being yelled at is people caring loudly at me.',
    Source: 'Leslie Knope',
    Citation: 'Parks & Recreation',
    Year: '2013'
  }
]

/***
  getRandomQuote function to create a random number, dependent on number of quotes available in the array.
***/

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  randomBackground function to create a random background color.
***/

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomBackground(){
  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  background = `rgb(` + red + `,` + green + `,` + blue + `)`;
  document.body.style.backgroundColor = background;
}



/***
printQuote function to create the html for inside the #quote-box div
***/

function printQuote() {
  var quoteFunc = getRandomQuote();
  var htmlString = '';

  htmlString += `<p class="quote">`;
  htmlString += quoteFunc.Quote;
  htmlString += `</p><p class="source">`;
  htmlString += quoteFunc.Source;

  // make sure a citation exists
  if (quoteFunc.Citation) {
    htmlString += `<span class="citation">`;
    htmlString += quoteFunc.Citation;
    htmlString += `</span>`
  } 
  
  // make sure a year exists
  if (quoteFunc.Year) {
    htmlString += `<span class="year">`;
    htmlString += quoteFunc.Year;
    htmlString += `</span>`
  }
  
  // make sure topic exists
  if (quoteFunc.Topic) {
    htmlString += `<p class="topic">Topic: `;
    htmlString += quoteFunc.Topic;
    htmlString += `</p>`;
  }

  htmlString += `</p>`;

  // assign to #quote-box div
  var quoteDiv = document.getElementById('quote-box');
  quoteDiv.innerHTML = htmlString;

  randomBackground();
};


setInterval(printQuote, 25000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.