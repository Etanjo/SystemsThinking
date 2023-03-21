import {writable} from 'svelte/store'

export let globalText = writable({
  events:{
  displayText: "I can't find my car",
  popupText: 'I went to the parking lot after work to find where my car was, but it was gone!'
},
patterns:{
  displayText: "My car keeps going missing!!",
popupText: 'This is a common occurence. Twice a week (Tuesdays and Thursdays of course) my car disappears from the work parking lot! This is preposterous!! Who would do something so extremely dastardly?? '
},
structures:{
  displayText: 'People want cool, expensive cars like the one I have!!  ',
  popupText: "Alright, so maybe leaving my modified 2022 Lamborghini Huracan unlocked in a parking lot near the inner city isn't the best idea. And yes, I only bring it on Tuesdays and Thursdays. And of course it doesn't happen when I bring my 1999 Honda Accord to work. I suppose whichever fiend is wronging me is purely jealous of my status as a Huracan owner. " 
},
mentalModel: {
  displayText: "Having an expensive car is often seen as a status symbol, which means you're better to be around!!!! ",
  popupText: "According to the international car census of 2021 (and not my brain), people LOVE cars that are over $100,000!! ESPECIALLY SPEEDTAILS. Now I don't own a Speedtail, but I wish I did because of how cool they are. I would steal one if I had the oppurtunity. THis must be what people think of my Lambo!! What's awesome about mine is it has a custom wrap on it. I picked an olive green (my favorite color), and I would wrap any car with that (especially a Speedtail). Now of course some people don't fully appreciate the olive green color with the yellow racing stripes, BUT I DON'T CARE!!! Clearly people want my car because of money. They can show off on their instagrams! "
}})