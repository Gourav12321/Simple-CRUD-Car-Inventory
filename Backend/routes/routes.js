const express = require('express');
const router = express.Router();

const {adddata,showdata,updatedata,getalldata,deletedata} = require('../controller/controller.js');


router.route("/add").post(adddata);
router.route("/show/:name").get(showdata);
router.route("/update/:name").get(showdata);
router.route("/update1").get(getalldata);
router.route("/edit/:id").post(updatedata); // Ensure this route is correct
// router.route("/delete/:id").post(deletedata);
router.route("/delete/:id").delete(deletedata);


module.exports = router;