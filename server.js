const express = require('express');
const app = express();
const cors = require('cors');
const userController = require('./userController');

app.use(express.json());
app.use(cors());

app.use('/users', userController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
