const superhero=require('superheroes'); // add superheroes module to our project .
const supervillain=require('supervillains'); // add supervillains module to our project .
console.log('players ready')
const hero=superhero.random();
const villain=supervillain.random();
const hero_val=Math.random();
const villain_val=Math.random();
if(hero_val>villain_val)
	console.log(hero + " is the winner !!!");
if(villain_val>hero_val)
	console.log(hero + " lost"+" the winner is "+villain+" !!!")
if(villain_val==hero_val)
	console.log(hero+" and "+villain+" are equally matched, and fought to a stand-still")