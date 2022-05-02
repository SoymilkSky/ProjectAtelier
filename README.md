# ProjectAtelier
HR2202 FEC Project

## Motivations and Story
Given a business document with client specifications on how their product page should be interacted with, we set on building out the client to spec. 

Integrated their product API into our front end, displaying all relevant data that was required according to the business document. 


## Fork this into your own github and clone to your local machine. 

## Instructions for how to deploy the webpage:

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
