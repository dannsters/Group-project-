'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use('/',(req,res)=>{
var records = req.body
var full_name = records.full_name
var address = records.address
var dob = records.DOB
var email_address = records.email_address
var marital_status = records.marital_status
var city = records.city
var ask_a_question = records.ask_a_question
var state = records.state
var zip_code = records.zip_code
var phone_number = records.phone_number
var emergency_contact = records.emergency_contact
var emergency_contact_relationship = records.emergency_contact_relationship


var connect = mysql.createConnection()

  connect.query(`INSERT INTO Records() VALUES()`,[],(err)=>{})





  

  


  
})

app.use('/account-page',router)
module.exports.handler = serverless(app)
