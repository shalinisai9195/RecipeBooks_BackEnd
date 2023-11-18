const express = require('express');
const app = express();
const cors = require('cors');
const MongodbConnect = require('./db');
const book_router = require('./router/book_routes')
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
MongodbConnect();

app.use(express.json());
app.use(cors({origin:"*"}));

app.use('/books', book_router);

app.listen(port,()=>{
  console.log(`App listening port ${port}`);
});
