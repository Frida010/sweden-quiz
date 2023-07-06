# Sweden Quiz

The Sweden Quiz website is a game page. All questions are about some facts about Sweden.

![Screenshot of the website on diffrent screen sizes](https://user-images.githubusercontent.com/129947589/240970731-6b7d71e9-f187-470c-b0c7-64016dfd34f4.png)

## Features

#### Navigation
- At the top of the page you have the name of the company: Pawesome Grooming. When this logo is clicked you go back to the homepage.  
- On the right side of the page under the logo you have the navigation links to the Homepage, About us section, Gallery page and the Book now page.
- The navigation is in a font that looks clean and modern, and has a color that contrasts the background. 
- The navigation tells the user were to find what the user is looking for. 

![Screenshot of the head of the page with the navigation links](https://user-images.githubusercontent.com/129947589/240970784-042dbf01-195d-4836-bf91-9b02ec888a7b.png)
#### The First Section

- The first section contains four images of different dogs and gives the user an extra additional clarification of what the website is for. 
- The images are there to entice the reader to want to know more.
- The images lie horizontally next to each other and has a background color that makes them feel more coherent and connected. 

![Screenshot of the row picture section](https://user-images.githubusercontent.com/129947589/240865800-1733538a-2c3a-4cb0-870d-5fc34f29fb78.png)
#### The Second Section

- The second section contains the information "About us" "Our services" "Address" and "Contact us"
- The About us divition tells the user about some important criteria that the company is proud of to offer its customers. 
- The Our services divition tells the user which services are offered and available.
- The Address divition tells the user where the dog groomers premises are located. 
- The Contact us divition gives the user the contact information to the company. 
- This section is surrounded the same way as the first section to make the website feel consistent. 
- Used icons from Font awesome to make the headings in this section more clear and lively.

![Screenshot of the about us, our services, address and contact us](https://user-images.githubusercontent.com/129947589/240256588-26c75357-d96e-4ec0-a9c2-1dd2c5d8ec70.png)
## Footer section
- The footer section has the same background image as the logo to keep the website coherent. 
- The footer contains clickable social media links for the user to find the company on facebook, tiktok, instagram and youtube. 

![Screenshot of the footer section with social media links](https://user-images.githubusercontent.com/129947589/240261458-9d13d883-7322-46eb-9b51-2b1f057c25aa.png)
## Gallery

- The gallery contains images of dogs, some of dogs getting a haircut, some of dogs getting a bath and some of beautiful groomed dogs. 
- Some of the images has a pink background and some have blue details. And this is used to make a pattern and make the gallery more vivid. 
- The gallery has the same header and footer as the homepage and the images have the same background color as the first and second section on the homepage to make the website coherent.  

![Screenshot of the gallery.html page](https://user-images.githubusercontent.com/129947589/240970839-dc7a90b5-b0cd-4c89-b5b5-c0d2a7e3112c.png)
## Book now 

- The book now page has a form for the customers to fill in and book an appointment to have their dog groomed. 
- The form collects the dog owners firstname, lastname, email and what weekday and time the owner will book. 
- The book now page has the same style as the rest of the website, the header and footer is the same as the rest of the pages on this website. 

![Screenshot of the booknow.html page](https://user-images.githubusercontent.com/129947589/240970893-e6322eaa-a27c-4ac9-8d15-246bec71de03.png)
## Testing
- I tested this website in different browsers: Safari, Crome and Firefox and it works. 
- I confirmed that this website looks good on different screen sizes using the devtools device toolbar. 
- I confirmed that this websites navigation, header, sections, gallery and book now page are readable and easy to understand.  
- I have confirmed that the form works on book now page: requiers entries in every field and will only accept email in email field and the submition button works. 

### Bugs
- A bug that I fixed was that when the user filled in the form and clicked the "Book now!" button, an error messege apeared "405 Not Allowed". I fixed that by adding Code Institutes formdump link to the booknow.html form action. After that no error or bugs did appear. 


### Validator Testing

#### HTML
- Errors returned when passed through the official W3C validator was Error duplicate ID for fname, lname and email.  
- Deleted the id:s for fname, lname and email in label element in booknow.html page to fix the error. 
- After that no errors were found by the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffrida010.github.io%2Fhttps-github.com-Frida010-Pawesome-grooming%2F). 
- However, there is a warning message from the validator about missing headings on the homepage. 

#### CSS
- Errors returned when passing trough the official (Jigsaw) validator was "_Value Error : float center is not a float value : center_" for #services, #address, #contact and #about
- Deleted the float center value in the style.css. 
- After that no errors were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffrida010.github.io%2Fhttps-github.com-Frida010-Pawesome-grooming%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

#### Accessibility
- I confirmed that the fonts and colors used on the website are easy to read and accessible by running it through lighthouse in devtools. 

![Screenshot of the lighthouse in devtools](https://user-images.githubusercontent.com/129947589/241943628-01c87c37-b121-4746-b564-b03458af9977.png)

### Unfixed bugs

- I do not have any unfixed bugs on this website. 

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page provided the link to the completed website.

The live link can be found here - https://frida010.github.io/https-github.com-Frida010-Pawesome-grooming/

## Credits

### Content
- In the proccess of making this webpage I have used [Code Institute](https://codeinstitute.net/) videos and course material to help me and remind me of how to write some of the code. 
- Used [W3Schools](https://www.w3schools.com/) as my help on how to write some of the code on this website. 
- The Fonts on the website were taken from [Google fonts](https://fonts.google.com/).
- Used [Codecademy](https://www.codecademy.com/) as help with how to write some of the code on this website. 
- Used [Developer Mozilla](https://developer.mozilla.org/en-US/) as help with how to write some of the code on this website. 
- Introduction on how to insert images to this README file was taken from this youtube video made by [Sean C Davis](https://www.youtube.com/watch?v=Ljj1wGFJqPY&ab_channel=SeanCDavis).
- Used [Stack overflow](https://stackoverflow.com/questions/39217732/is-it-possible-to-change-the-order-of-list-items-using-css3) as help with how to change the order of list items. 
- Used [Stack overflow](https://stackoverflow.com/questions/17687328/getting-a-link-to-go-to-a-specific-section-on-another-page) as help with how to link to a specific section on another page of the website. 
- As inspiration I also looked on [Pinterest](https://www.pinterest.com/). 

### Media
- The icons in the homepage section and the footer were taken from [Font awesome](https://fontawesome.com/)
- All the images on the website are taken from [Pexels](https://www.pexels.com/)
- The colors and background colors on the entire website were picked out from the hero-image by [Imagecolorpicker](https://imagecolorpicker.com/) 

