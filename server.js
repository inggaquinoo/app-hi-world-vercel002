const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Express here!!!! Here I'am 2 :) - But 23-new 2 - LOCALLLLL")
    console.log("Express here!!!! Here I'am 2 :)")
})



//app.use("/users/", require("./routes/usersRoute"));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
