var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/tutorial/question2', function (req, res) {

  // Make a variable and give it the value from 'juggling-ability'
  var jugglingAbility = req.session.data['radio-group1']

  // Check whether the variable matches a condition
  if (jugglingAbility == "Yes"){
    // Send user to next page
    res.redirect('/tutorial/question2')
  }
  else {
    // Send user to ineligible page
    res.redirect('/tutorial/Not')
  }

})

module.exports = router
