var express = require('express');
var router = express.Router();
var {saveData} = require("../controllers/dataController")
var {persistData} = require("../controllers/dataController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API running ! ")
});

// Recive data from the Gateway and save it in the DB
router.route('/save').post(saveData)
router.route('/persist/:type').post(persistData)

module.exports = router;
