const router = require("express").Router();
const Course = require("../../models/Course_Mgmt/Course");

router.route("/").post((req, res) => {

    const reqBody = req.body;
    if (reqBody.name == null || reqBody.name == "") {
        res.json("Name cannot be null");
    }
    if (reqBody.category == null || reqBody.category == "") {
        res.json("Category cannot be null");
    }


    Course.create(reqBody)
        .then((response) => {
            res.status(201);
            res.json(response);
        }).catch((err) => {
            console.log(err);
        })

});

router.route("/").get((req, res) => {
    Course.find()
        .then((response) => {
            res.status(200);
            res.json(response);
            console.log(response);
        }).catch((err) => {
            res.status(400);
            res.json(err.message);
            console.log(err);
        })
});

router.route("/:id").get((req, res) => {

    const id = req.params.id;

    Course.findById(id)
        .then((response) => {
            res.status(200);
            res.json(response);
            console.log(response);
        }).catch((err) => {
            res.status(400);
            res.json(err.message);
            console.log(err.message);
        })
});


router.route("/:id").delete((req, res) => {

    const id = req.params.id;

    Course.findByIdAndDelete(id)
        .then(() => {
            res.status(200);
            res.json("Deleted");
            console.log("Deleted");
        }).catch((err) => {
            res.status(400);
            res.json(err.message);
            console.log(err.message);
        })

});


router.route("/:id").put((req, res) => {

    const id = req.params.id;
    const data = req.body;

    Course.findByIdAndUpdate(id, data)
        .then(() => {
            res.status(200);
            res.json("Updated");
            console.log("Updated");
        }).catch((err) => {
            res.status(400);
            res.json(err.message);
            console.log(err.message);
        })

});

module.exports = router;