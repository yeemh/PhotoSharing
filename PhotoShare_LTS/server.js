const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/directory', (req, res) => {
    res.send([
        {
            id: 0,
            image: 'https://placeimg.com/64/64/any',
            name: "여수 여행",
            password: "1234"
          },
          {
            id: 1,
            image: 'https://placeimg.com/64/64/any',
            name: "춘천 여행",
            password: "2345"
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));