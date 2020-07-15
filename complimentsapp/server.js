const express = require('express'); //express is a function
const app = express();
const _ = require('lodash');

app.use(express.static('public'))
app.set('views', './views'); 
app.set('view engine', 'ejs');

const chooseRandom = () => {
    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ];
      
    const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

    const names = [
        "Pouyan",
        "DT",
        "Tarik",
        "Kasun",
        "Sri",
        "David"
    ];

    let compliment = _.sample(compliments);
    let color = _.sample(colors);
    let name = _.sample(names);

    return [compliment, color, name];
}

app.get('/', (req, res) => {
    let choices = chooseRandom();
    console.log(choices);
    res.render('home', {
        compliment: choices[0],
        color: choices[1],
        name: choices[2]
    });
});

app.get('/:name', (req, res) => {
    let choices = chooseRandom();
    res.render('name', {
        name: req.url.slice(1),
        compliment: choices[0],
        color: choices[1]
    });
});

app.listen(4567, () => {
    console.log('listening on 4567');
});
