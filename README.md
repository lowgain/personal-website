# Lowgain's Personal Startpage

### Welcome to my selfhosted startpage!

### Installation
#### Standard install
- clone the repo
- make .env in root folder with Required info 
  - API_KEY = Open weather map api key
  - CITY = The city where you live
  - UNITS = the units you wish to use (imperial or metric)
- Run <code>npm run start</code>

#### If you wish to use docker
1. clone the repo
2. make .env in root folder with Required info 
  - API_KEY = Open weather map api key
  - CITY = The city where you live
  - UNITS = the units you wish to use (imperial or metric)
3. <code>docker build --tag startpage .</code>
4. <code>docker run -p 3000:80 startpage</code>

### Usage
##### Simply go to the url of your server and port of the app :)