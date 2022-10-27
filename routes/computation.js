var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    //res.render('computation', { title: 'Praneeth Vallabhaneni who works on functions' });
    var x = Math.random()
    var z = Math.random()
    y = Math.atan(x);
    y1 = Math.exp(x,z)
    y2 = y = Math.expm1(x);
    res.send("Math.atan() applied to "+x+" is "+y+"<br></br>"+"Math.exp() applied to "+x+", "+z+" is "+y1+"<br></br>"+
                "Math.expm1() applied to "+x+" is "+y2);
});

module.exports = router;
