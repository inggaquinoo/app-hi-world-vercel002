const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Our app is running on portss ${ PORT }`);
});

app.get("/", function(req, res){
    res.send("Express here!!!! Here I'am 2 :) - But 23-new 2 - LOCALLLLL - ahora estamos en v.002")
    console.log("Express here!!!! Here I'am 2 :)")
})



//app.use("/users/", require("./routes/usersRoute"));



