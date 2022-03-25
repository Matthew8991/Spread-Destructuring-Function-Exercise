// 1)
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];
function seeDinos(i, ...j){
    console.log(i);
    console.log(j);
};
seeDinos(...jPDinos);
console.log(`=`.repeat(25));

// 2)
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcom: "Jeff Goldblum"
};
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);
console.log(`=`.repeat(25));

// 3)
const jurassicParkMovies = [
    {
        one: "Jurassic Park",
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];
const [{one, two, three}, {four, five, six}] = jurassicParkMovies;
const allMovies = [one, two, three, four, five, six];
seeJPMovies = y => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(allMovies);