function shout (string) {
  return string.toUpperCase() //'HELLO!'
}
shout("hello");

function whisper (string) {
  return string.toLowerCase() //'hello!'
}
whisper("hello");

function logShout (string) {
  console.log('HELLO');
}

function logWhisper (string) {
  console.log('hello');
}

function sayHiToGrandma (string) {
  if (string === string.toLowerCase())
  return "I can\'t hear you!";
}