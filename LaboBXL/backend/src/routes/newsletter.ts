import { Router } from "express";
import https from 'https'
import { catchAsync, guest } from "../middleware";


const router = Router()

router.post('/newsL', catchAsync(async (req, res) => {

   const {emailN,fName,lName,js} =req.body
   console.log(req.body);
   
   const mcData = { 
       members: [
        {
            email_address: emailN,
            status: 'subscribed',
            merge_fields: {
                FNAME: fName,
                LNAME: lName
            }
        }

       ]
   }
   
   const mcDataPost = JSON.stringify(mcData)
   const url = 'https://us2.api.mailchimp.com/3.0/lists/AUDIENCE'
   const options = {
       url : url,
       method: 'POST',
       headers: {
           Authorization: 'auth TOKEN'
       },
       body: mcDataPost
   }
   
   const request = https.request(url, options, response => {
    if (response.statusCode === 200) {
        res.render('index');
    } else {
        res.render('index');
    }
    response.on('mcData', mcData => {
        console.log(JSON.parse(mcData));
    });
});

request.write(mcDataPost);
request.end();
 
}));


export default router;
