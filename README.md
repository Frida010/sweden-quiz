# Sweden Quiz

The Sweden Quiz is a game were you can play a quiz and learn more about Sweden. The quiz has six questions in total and has four answer options per question. The questions are fun and why not test your knowledge against friends? At the end of the game the user will get a score of how many points the person got in total and a choice to play again.

The Sweden Quiz game is targeted towards adults and children as a simple way to learn some fun facts about the land in the far north.

The website contains a header and a footer. The footer contains icons with links to social media.

![Screenshot of the website on diffrent screen sizes](https://user-images.githubusercontent.com/129947589/256338850-4a7f9080-bcc3-456e-9bd5-a049fd3e7491.png)

## Features

#### - Header

- Featured at the top at the page is the header. The header does not have any features it does only displays the name which makes it more apparant for the user what game they are playing.
- The header creates a nice contrast on the game's website and creates a nice framing.
- The font has a playful look and fits the character of the website well.

![Screenshot of the header](https://user-images.githubusercontent.com/129947589/256337714-5afc0f22-f100-4eef-ac49-90992a4ab5f6.png)

#### - The Quiz

- The quiz has a yellow border that frames the quiz area.
- The quiz area has one question and four options for the user to choose from.
- The buttons have a hover effect that lights up the button the mouse hovers over.

![Screenshot of the quiz area](https://user-images.githubusercontent.com/129947589/256340795-7cab7851-06a3-4a0f-8baa-555e24176732.png)
![Screenshot of the quiz area with hower effect](https://user-images.githubusercontent.com/129947589/256340841-1e0158ac-10fc-4e9a-9bc9-824b0e1dc544.png)

- When the user has made a decision the button with the right answer will light up in a green color and the wrong answer in a red color (if the user picked the wrong answer).
- When a choice is made, a button with the text "Next" will appear for the user to click on and get to the next question.

![Screenshot of the quiz area whit wrong answer selected](https://user-images.githubusercontent.com/129947589/256340869-d12f194c-de5b-4c49-afca-3d74c40ba804.png)

- When the quiz is over and all the questions are answered, the user will get a message saying "You scored ... out of 6!"
- On this last page the button will also have changed and have a text saying "Play Again" and now the user can make the choice to play again if wanted.

![Screenshot of the score board in the end of the game](https://user-images.githubusercontent.com/129947589/256337867-32abf0b2-3b28-4a44-9e62-1ae46ebb4afa.png)

#### - Footer

- The footer contains clickable social media links for the user to find the game on Facebook and Instagram.
- The footer also contains the text "Share your results with us on social media!" to invite the user to interact with the game on different platforms.

![Screenshot of the footer with social media links](https://user-images.githubusercontent.com/129947589/256343939-f97eaa3c-43d8-42b1-9b67-bcb6bfe49046.png)

### Features left to implement

- In the future I would like to expand this game and make more questions and levels with different levels of difficulty.

## Testing

- I tested this website on different browsers such as: Safari, Crome and Firefox and it works as expected.

- I confirmed that this website looks good on different screen sizes using the devtools device toolbar.

- I confirmed that the header, options, results and footer text are all readable and easy to understand.

- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![Screenshot of the lighthouse](https://user-images.githubusercontent.com/129947589/256337680-ce8c1053-a547-4d31-98cf-67def10ef31f.png)

### Bugs

- One bug that I have discovered when working on this project is that the favicon.ico did not work at first, but that is fixed now and works as it should. 

![Screenshot of the favicon](https://user-images.githubusercontent.com/129947589/256337887-d4f01cb0-63b8-4106-aa98-a9458b840d53.png)
- One other problem that I discovered is that codeanywhere gives me this problem message in my css file.

![Screenshot of the problem message in codeanywhere](https://user-images.githubusercontent.com/129947589/252320956-c30b8393-6bf5-435f-a4a0-dc3f0898af77.png)

### Validator Testing

##### - HTML

- One error that was found first when passing through the validator was that the favicon link was broken.
- After fixing that and changing the format of the favicon link by downloading the favicon and then dropping it directly in the direcory, and coping and adding a HTML snippet inside the head tag.
- After this no errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffrida010.github.io%2Fsweden-quiz%2F).

##### - CSS

- No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffrida010.github.io%2Fsweden-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

##### - JAVASCRIPT

- No errors were found when passing through the official [Jshint validator](https://jshint.com/), however I did get some warnings.
  - The following metrics were returned:
  - There are 9 functions in this file.
  - Function with the largest signature take 1 arguments, while the median is 0.
  - Largest function has 8 statements in it, while the median is 4.
  - The most complex function has a cyclomatic complexity value of 2 while the median is 2.

### Unfixed bugs

- I do not have any unfixed bugs on this website.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page provided the link to the completed website.

The live link can be found here - [Sweden Quiz](https://frida010.github.io/sweden-quiz/)

## Credits

### Content

- All the colors on this gamepage is taken from the swedish flag and was identified by the [HTML color codes](https://html-color-codes.info/colors-from-image/).
- In the process of making this webpage I have used [Code Institutes](https://codeinstitute.net/) videos and course material as help with how to write some of the code and to remind me how the code works.
- I used [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp) and their JavaScript Array forEach() lesson as help on that part of the code.
- Used [W3Schools](https://www.w3schools.com/js/js_if_else.asp) and their JavaScript if, else, and else if lesson to remind me of how to write that code.
- Reminder of how to make JavaScript Array forEach() I looked on [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp).
- I used [W3Schools](https://www.w3schools.com/js/js_functions.asp) to help me with JavaScript Functions.
- I used [Simple Steps Code](https://simplestepscode.com/javascript-quiz-tutorial/) as inspiration with how to make a quiz game.
- I also used [Geeks for geeks](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/) to help me with the javascript in this project.
- In the process of making this game I used this [Youtube video](https://www.google.com/search?q=how+to+make+a+quiz+in+javascript&oq=how+to+make+a+quiz&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRhBMgYIBxBFGEHSAQg4MzUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:509fe98a,vid:p-2G-7vLuV4) as help.
- I also used this [Youtube video](https://www.google.com/search?q=how+to+make+a+quiz+in+javascript&oq=how+to+make+a+quiz&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRhBMgYIBxBFGEHSAQg4MzUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:370e1017,vid:riDzcEQbX6k) as help with the javascript code writing.
- This [Youtube video](https://www.youtube.com/watch?v=-cX5jnQgqSM&ab_channel=GeekProbin) was used as help when making this quiz game.
- And this [Youtube video](https://www.youtube.com/watch?v=pQr4O1OITJo&t=146s&ab_channel=CodingNepal) was used to help me when making this quiz game.
- I used this [Youtube video](https://www.youtube.com/watch?v=MxrGPP4F8Sc&ab_channel=Keepcoding) when making this quiz game as help.
- In the process of making this quiz game I also used the [Python Tutor code visualiser](https://pythontutor.com/javascript.html#mode=edit).

### Media

- The icons in the footer were taken from [Font awesome](https://fontawesome.com/).
- The favicon in the browser were taken from [Favicon.cc](https://www.favicon.cc/?action=icon&file_id=963533).
- The quiz questions were inspiried and/or taken from [Swedish Nomad](https://www.swedishnomad.com/sweden-quiz/).
