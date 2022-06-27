var Twitter=require('twitter')
require('dotenv/config')
var express = require('express');
var router = express.Router();
var cors = require('cors');


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
API_KEY='0Pe3gQFtThLjMc8Kt51rNAzV0'
API_SECRET_KEY='1Ccr0rkgosbx0DlamwGiKzLT4ijXCXkJp9sjAJ3JZPVonK30IY'
BEARER_TOKEN='AAAAAAAAAAAAAAAAAAAAAEvgcQEAAAAAqmQ46ShHaygNx60JCIx94IYrPSw%3DifWmhZKlbJQhURIpHZoUOe9rYwFaqDC2QIHzlWTBLHciqRI3qK'
ACCESS_TOKEN='864608135532740608-jVP4HgwtzNLx9OZbIWLdgjumebeNLBZ'
ACCESS_SECRET_TOKEN='EO8dfPt81yFWwyeLCZ66iT8jeMJm6ol3im8PPmfiFDHxW'
CLIENT_ID='VlI1b2ZoWVI0NE1Bc0l2aUVHMjE6MTpjaQ'
CLIENT_SECRET='wKd8xvR9ofWWO5iLsvNZdrXMNOZrtYRe6_dtXtlBh0fH3PssQM'

var client= new Twitter({
    consumer_key:API_KEY,
    consumer_secret:API_SECRET_KEY,
    access_token_key:ACCESS_TOKEN,
    access_token_secret:ACCESS_SECRET_TOKEN

    })
    var params={
        screen_name:'Assraljawalksa',
        // fetch the last 10 tweets
        count:10
    }
    client.get('statuses/user_timeline',params,function(error,tweets,response){
        if(!error){
        //  console log tweets and fix arabic characters
        router.get('/',function(req,res,next){
        console.log(tweets)
        res.send(tweets)
        })
        }
    }
    )
    app.listen( process.env.PORT || 3002, () => {
        console.log("the server is running");
      });
      