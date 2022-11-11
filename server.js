import express from "express";

const app = express();
const port = process.env.PORT || 5001;

app.get("/water", (req, res) => {
    console.log("Express here!!!! Welcome to a new Railway yee on master")
    res.send("Here is some water for you")
})

app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});
