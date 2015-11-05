## Getting started
- Install Node.js (includes npm)
- In the project directory, run ```npm install``` (may need to prefix with sudo)
- Once the project dependencies are installed, install gulp globally: ```npm install -g gulp```

#### Configuration
To connect to the database, a DB username and password is required.

Copy ```config/db.example.js``` to ```config/db.js``` and replace the username and pw fields with information from [MongoLab](https://mongolab.com/databases/mepracticenode#users).

#### Running the server
- Run ```gulp dev``` to run the server at **localhost:3000**
- Note: The server will restart upon changes to .js files

## API Docs
- [User](https://github.com/MetaEdge/node-practice/blob/master/docs/api/user.md)
- [Match](https://github.com/MetaEdge/node-practice/blob/master/docs/api/match.md)
