/* Logging Letters
var sentence = " ";

for(var i=0;i<sentence.length;i++){
  if(sentence[i] !==" "){
    console.log(sentence[i]);
  }
}*/

/*If statements
var n= window.prompt("Enter a number: ");
var result=0;


if(n%2==0){
  result=result+10;
}
else{
  result=result-n;
}
console.log(result); */

/*For loops
var sum=0;
for (var loopCounter=1;loopCounter<n;loopCounter++){
  sum=sum+loopCounter;
}*/

/* Counting Characters
function countingCharacters(stringtoCount){
  console.log(stringtoCount+" has "+ stringtoCount.length+" characters")
}*/

/*function countingCharacters2(stringToCount,characterToFind){
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    for (var characterPosition = 0;
           characterPosition < stringToCount.length;
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " +
                  characterCount);
}*/

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}
