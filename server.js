const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send('Hello World');
});

app.use('/api/v1/student', studentRoutes);

app.listen(port, () =>{
    console.log(`Server is creating and running on port ${port}`);
});