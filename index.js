function shout (string) {
  return string.toUpperCase() //'HELLO!'
}
shout("hello");

function whisper (string) {
  return string.toLowerCase() //'hello!'
}
whisper("HELLO");

function logShout (string) {
  console.log('HELLO');
}

function logWhisper (string) {
  console.log('hello');
}
whisper("HELLO");

function sayHiToGrandma (string) {
  if (string === string.toLowerCase())
  return "I can\'t hear you!";
}