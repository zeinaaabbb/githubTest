const querystring = require("querystring");

const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const queryToParse = querystring.split('?')[1];
