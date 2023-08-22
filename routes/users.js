const express = require("express");
const persons = require("../people");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users main page");
});

router.get("/:id", (req, res) => {
    const { id } = req.params; 
    if (id > persons.length) {
        return res.send("Person doesn't exist with that ID");
        
    }
    res.json(persons[id]);
});

module.exports = router;