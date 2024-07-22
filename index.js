const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hey from server");
})


app.listen(PORT, () => {
    console.log("listining to the port", PORT);
})