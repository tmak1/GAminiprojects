# SEI Emergency Compliment, in Express

## Mission…

Create your own version of [Emergency Compliment](http://emergencycompliment.com/), using Express. When a user visits the site, they should be greeted with a WDI-themed compliment to cheer them up.


## Level 1: generic compliment

When you visit the root (`"/"`) path of your app, it should display a generic greeting and a randomly chosen compliment. The background color of the app should be randomized as well. Use **server side technology (not client side js)** to set the background color.

Here are some sample compliments and colors (feel free to substitute in your own):

```js
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
```

> You may want to use the **underscore** or **lodash** module on the server to help you pick a random compliment & color

## Level 2: personalized compliment

When you visit `"/name"` (ie: `"/randy"`), the greeting should personalize itself to the provided name. There should still be a random compliment and background color.
