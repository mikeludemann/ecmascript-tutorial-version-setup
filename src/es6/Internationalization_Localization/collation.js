var list = [ "ä", "a", "z" ];

var l10nDE = new Intl.Collator("de");
var l10nSV = new Intl.Collator("sv");

l10nDE.compare("ä", "z") === -1;
l10nSV.compare("ä", "z") === +1;

console.log(list.sort(l10nDE.compare));
console.log(list.sort(l10nSV.compare));