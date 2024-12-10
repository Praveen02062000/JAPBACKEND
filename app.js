const express = require('express');
const StudentRouter = require("./Routers/Student");
const body_Parser = require("body-parser");
const cors = require("cors");



const PORT = process.env.PORT || 5000;
const App = express();

App.use(cors())
App.use(body_Parser.json());
App.use(body_Parser.urlencoded({ extended: true }));
App.use('/student', StudentRouter);
App.use('/excel/download', express.static(__dirname + '/Routers/ExcelFile/Studentdata.xlsx'))






App.listen(PORT, () => {
    console.log("server is running on port number : ", PORT);
})










