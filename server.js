require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.get("/hola", function(req, res){
    res.send("Express here!!!! Here I'am 2 :) - But 23-new 2 - LOCALLLLL")
    console.log("Express here!!!! Here I'am 2 :)")
})


app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});
