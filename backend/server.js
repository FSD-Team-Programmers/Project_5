const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());


const placeRouter = require('./routers/routes/place');

// router middleware
app.use( "/place", placeRouter);

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
