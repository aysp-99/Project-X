const { Router } = require('express');
const dashboarddetails = require('./dashboarddetails');

const router = Router();


//router.get("/", dashboarddetails.userdata);
router.get("/", dashboarddetails.getdata);

module.exports = router;