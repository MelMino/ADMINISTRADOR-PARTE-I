const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tu_basededatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database successfully connected'))
    .catch(err => console.error('Database connection error:', err));

require('./server/config/mongoose.config');

require('./server/routes/product.route')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});