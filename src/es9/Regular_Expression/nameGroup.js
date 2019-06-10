let regexp = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/u;

let regexpExec = regexp.exec('2019.12.31');

console.log(regexpExec);