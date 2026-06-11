// Do not modify this line directly
var ranks = ["domain", "kingdom", "category", "family", "genus"];

// Write your code below
ranks.splice(5,0, "species");
ranks.splice(2,1);
ranks.splice(2, 0, "phylum", "class", "order");


console.log(ranks);