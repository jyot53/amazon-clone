const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JgrGfSEkasDND80wACf0b1dTEln18S1OcGafesRX5DDCCe9GZHzwbPJpPvfnQk6bMXCuahptD6nn0xrw4WSr9Hs00YYHWQsSN');

//api 

//app config
const app = express();


//middlewares
app.use(cors({origin:true}));
app.use(express.json());


//api routes
app.get('/', (req, res)=>{
    res.status(200).send('hello backend');
})
app.get('/jyot', (req, res)=>{
    res.status(200).send('hello jyot route');
})

app.post('/payments/create', async (req, res)=>{
    const total = req.query.total;
    // console.log(total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"inr",
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})


//listen command
exports.api = functions.https.onRequest(app);