const express = require ("express");
const Users = require ("data/users");


const app = express();
const PORT = 8081;

app.use(express.json())
app.listen(PORT, () => {
    console.log(`Server runing incrontolly on port ${PORT} `)
})

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: `Server runing incrontolly on port ${PORT}`
    })
})

app.get("/users", (req, res) => {
    const users = Users;
    res.status(200).json({
        success: true,
    message: "Users fetched successfully!!",
    data: users
})
})