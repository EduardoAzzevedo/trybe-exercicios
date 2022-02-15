let word = 'tryber';
let inverso = '';
for (let index = word.length - 1; index >= 0; index-=1) {
    inverso += word[index]
}
console.log(inverso);
// Um diferencial importante.
//outra forma de se resolver
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

//mais outra forma
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);