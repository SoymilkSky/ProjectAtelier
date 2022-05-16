# Project Atelier

<div align="center" width="100%">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
</div>

<h4 align="center">A modern reimagining of an eCommerce products page.</h4>

## Motivation and Story
Tasked by a client to recreate their products page to be more in line with modern design ideas, we took on the task and created a brand new user interface for their website. 

All components in this repo have been written from scratch using React and Styled Components

## Features

### Landing Page
<img src="https://i.imgur.com/8L0a1vb.gif" />

Built by <a href=https://github.com/genewongs>Gene Wong</a>

<b>Features</b>
- Responsive button on hover that leads the user to a products page

### Product Overview
Gallery/Styles             |  Add to Cart
:-------------------------:|:-------------------------:
![gallery and styles](https://i.imgur.com/56JtGSx.gif)  |  ![add to cart](https://i.imgur.com/q4YhjjP.gif)

Built by <a href=https://github.com/genewongs>Gene Wong</a>

<b>Features</b>
- Image gallery carousel with the ability to zoom and expand the photo
- Styles Selector dynamically lists out styles based on the item
- Size Selector dynamically fills out based on product
- Add to cart feature
- Share to social media buttons

### Related Items & Your Outfit
<img src="https://i.imgur.com/tlsAQ0E.gif" />

Built by <a href=https://github.com/bootdme>David Estephanian</a>

<b>Features</b>

- Related items that dynamically generated based on the item currently being viewed
- If an item is clicked on, a modal will appear with a comparison of the features of the current item and the item selected
- A 'Your Outfit' section which allows you to save the currently viewed item into a list that persists while traversing the site

### Questions & Answers
<img src="https://i.imgur.com/Oeg24x4.gif" />

Built by <a href=https://github.com/ElliotLandon>Elliot Landon</a>

<b>Features</b>
- Questions will load two at a time
- Loads more answers to each question
- The ability to search through all loaded questions
- Adding a question
- Adding an answer to an already existing question

### Ratings & Reviews
<img src="https://i.imgur.com/JZ5Df6M.gif" />

Built by <a href=https://github.com/SoymilkSky>Danny Wong</a>
  
<b>Features</b>
- Reviews load two at a time
- Searching the reviews allows for the ability to search by keyword
- Sorting reviews by the star rating
- Sorting by Helpfulness, Newest, Relevance
- The ability to Add a new review as well as upload review photos by utilizing the Cloudinary API
- All portions are dynamically generated based on the current product being viewed

## Code Styles
This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Tech Stack
**Built with**
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [AWS](https://aws.amazon.com/)

## Contributors
**Gene Wong (Product Overview)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/genehwong/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/genewongs) 

**David Estephanian (Related Products)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/david-estephanian-738039160/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/bootdme) 

**Elliot Landon (Questions & Answers)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/elliot-landon/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/ElliotLandon) 

**Danny Wong (Ratings & Reviews)**

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/danny96wong/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/SoymilkSky) 

## Instructions for how to deploy the webpage:

Fork this repo into your local machine and do the following.

Create a .env file and copy over the example.env contents
  
Generate your own github api key with these settings:  
- read:org  
- user  
- read:user  
- user:email  
- user:follow  
  
In order to get image upload functionality, please visit https://cloudinary.com/ and create a free account. 
Copy the following into your .env file with these keys. 
  
CLOUD_NAME=  
CLOUD_API_KEY=  
CLOUD_API_SECRET=  
  
Your .env file should end up looking something like this:  
  
PORT="8008"  
APIKEY="GITHUB_API_KEY_HERE"  
  
CLOUD_NAME="CLOUD_NAME_HERE"  
CLOUD_API_KEY="CLOUD_API_KEY_HERE"  
CLOUD_API_SECRET="CLOUD_API_SECRET_HERE"  
  
After finishing your .env file and saving it, you can now run ```npm run build``` to have webpack create the bundle.js that will be served in your server.  
Once that finishes you can run ```npm run start``` which should start up the server.   
  
Navigate in your browser to localhost:(PORT_THAT_YOU_CHOSE_HERE) and you should see the webpage!  
  
© TheCatalinaWineMixer 2022  
