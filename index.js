// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  counter1 contains the variable count within a function, while counter2 contains count in the global scope.
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1 uses a closure because it has a function enclosed in it, in which it calls out to a variable outside of it but within the outer function and manipulates it.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *  If you wouldn't want count to be manipulated or invoked by anything other than the function provided, counter1 would be the better option. If you did want count to be manipulated or to be able to invoke it in some other way, you might want to use counter2.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning()

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let points = Math.floor(Math.random() * 3);
  return points;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(cb, innings) {
  let score = {"Home": 0, "Away": 0};

  for(i = 0; i < innings; i++) {
  score.Home = score.Home + cb();
  score.Away = score.Away + cb();
  }
  return score;
}

/* Task 4:

Create a function called `scoreboard` that accepts the following parameters:

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

let homeScore = 0
let awayScore = 0

function getInningScore(cb, i) {
  let inningScore = `${i}th inning: ${homeScore += cb()} - ${awayScore += cb()}`;
  return inningScore;
}

function scoreboard(cb, cb2, innings) {
  for(let i = 1; i <= innings; i++) {
    console.log(cb(cb2, i));
  }
  return `Final Score: ${awayScore} - ${homeScore}`;
}



