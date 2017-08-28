// var name = 'Keith';

// var printName = function() {
//   console.log('My name is ' + name );
// };

// printName();

// Before running - I expect this will output "My name is Keith"
// True

// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// };

// console.log(result());

// Before running - I expect this will output 3
// True

// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }

// listAnimals();

// Before running - I expect this will output
// 0: Ducks
// 1: Dogs
// 2: Lions
// True

// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';

// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

// Before running - I expect this will output
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is:Keith
// True

// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };

// var printName = function(detective) {
//   return detective.name
// };

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };

// console.log(detectiveInfo());

// Before running - I expect this will output Poirot
// True

// var murderer = 'rick';

// var outerFunction = function() {
//   var murderer = 'marc';

//   var innerFunction = function() {
//     murderer = 'valerie';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('the murderer is ', murderer);

// Before running - I expect this will output valerie
// False
// murderer = 'valerie' isn't declared as a variable, so takes effect within the scope set by murderer in outerFunction. 
// Global variable var murderer = 'rick' isn't affected...

// My example

var notebook = {
  secondPage : "Joe"
}

var detective = {
  pocket : ( notebook["firstPage"] ? notebook["firstPage"] : notebook["secondPage"] )
}

var suspectsInDrawingRoom = function(){
  notebook = {
    firstPage: "Alice"
  }
  console.log( detective["pocket"] );
}

suspectsInDrawingRoom();



