const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();
var url = "mongodb://localhost:27017/";


app.get('/api/students/:firstName/:lastName', (req, res) => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    console.log("query:", req.params);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("students");
        dbo.collection("students").find({"firstName": firstName, "lastName": lastName}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
})

const port = 8000;
console.log(`Visit http://localhost:${port}/`);
app.listen(port);