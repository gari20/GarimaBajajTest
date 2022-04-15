var express=require("express");
var cors=require("cors");
var bp=require("body-parser");
const bodyParser = require("body-parser");

var app=express();
app.use(cors());
var url=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
var port=process.env.PORT||3000;
app.listen(port);
app.post('/bfhl', url, function (req, res) {
    s = false;
    name = "garima_mehta_20032001";
    email = "garimamehta2003@gmail.com";
    rollNo = "0827CS191091";
    a = req.body.data;
    if (a) {
        s = true;
    }
    no = [];
    ab = [];
    g = 0;
    j = 0;
    for (i = 0; i < a.length; i++) {


        x = parseInt(a[i]);

        if (isNaN(x)) {

            ab[g++] = a[i];

        }
        else {
            no[j++] = a[i];
        }

    }
    json = { is_success: s, user_id: name, email: email, roll_number: rollNo, numbers: no, alphabets: ab };
    res.send(json);
})
