const express = require('express');
const db = require('./config/connection');
const cookieParser = require('cookie-parser');

//Require Model
// const { User } = require('./models');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is now running on port ${PORT}`);
    });
});
