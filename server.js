const express = require ("express");
const Users = require ("./data/users");


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

    if (!users.length){
        return res.status(404).json({
            success: false,
            message: "No users found"
        })
    }
    res.status(200).json({
        success: true,
        message: "Users fetched successfully!!",
        data: users
    })
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = Users.find(user => user.id == id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    res.status(200).json({
        success: true,
        message: "User fetched successfully!!",
        data: user
    })
})

app.post("/users", (req, res) => { 
    const new_user = req.body;
    if (!new_user.name || !new_user.email){
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        })
    }
    Users.push(new_user);
    res.status(201).json({
        success: true,
        message: "User created successfully!!",
        data: new_user
    })
})

app.put("/users/:id", (req, res) => { 
    const { id } = req.params;
    const user = Users.find(user => user.id == id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    const { name, email } = req.body;
    Users.map(user => {
        if (user.id == id) {
            user.name = name;
            user.email = email;
        }
    })
    res.status(200).json({
        success: true,
        message: "User updated successfully!!",
        data: user
    })
})

app.delete("/users/:id", (req, res) => { 
    const { id } = req.params;
    const user = Users.find(user => user.id == id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    const users = Users.filter(user => user.id != id);
    res.status(200).json({
        success: true,
        message: "User deleted successfully!!",
        data: users
    })
})