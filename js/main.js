var btn = document.getElementById("btn");
var arrQuote = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    aurthor: `― Oscar Wilde`,
  },
  {
    quote: `“So many books, so little time.”`,
    aurthor: `― Frank Zappa`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    aurthor: `― Marcus Tullius Cicero`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    aurthor: `― Mae West`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    aurthor: `― Mahatma Gandhi`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    aurthor: `― Mark Twain`,
  },
  {
    quote: `“Without music, life would be a mistake.”`,
    aurthor: `― Friedrich Nietzsche, Twilight of the Idols`,
  },
  {
    quote: `“Good friends, good books, and a sleepy conscience: this is the ideal life.”`,
    aurthor: `― Mark Twain`,
  },
];
btn.addEventListener("click", function () {
  var randonNum = Math.floor(Math.random() * arrQuote.length);
  document.getElementById("qoute").innerHTML = arrQuote[randonNum].quote;
  document.getElementById("aurthor").innerHTML = arrQuote[randonNum].aurthor;
});
