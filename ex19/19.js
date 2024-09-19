var prompt = require('prompt-sync')();

let senha = Number(prompt('Digite uma senha forte:'))

let cv = senha > 8;
let tm = /[A-Z]/.test(senha);
let tmi = /[a-z]/.test(senha);
let tn = /\d/.test(senha);
let te = /[@#%%&*-+=.]/.test(senha);
 
let senhaForte = cv && tm && tmi && tn && te 
 if (senhaForte){
   console.log('A senha é forte');
} else {
   console.log('A senha não é forte, tente novamente');
}