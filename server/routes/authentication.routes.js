var express = require('express');
var router = express.Router();
var connection = require('../connection');
var bcrypt = require('bcrypt');
var jwtMiddlewate = require('./../middlewares/jwt.middleware');
var config = require('./../config');
var jwt = require('jsonwebtoken');



router.get('/', (req, res, next) => {
    return res.status(200).json({data: 'succuss'})
})

router.get('/guarded', jwtMiddlewate.checkUserAuthentication, (req, res, next) => {
    console.log(req.userData)// you have the username of the token user
    return res.status(200).json({data: 'succuss authenticated'})
})

router.get('/', (req, res, next) => {
    return res.status(200).json({data: 'succuss'})
})

router.post('/login', (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
        connection.query(`select * from users where username = '${username}'`, (err,users) => {
            if (err) 
                return next({status: 401, message: 'bad input'});
            const result = bcrypt.compareSync(password, users[0].password);
            if (!result) 
                return next({status: 401, message: 'wrong password'});
        
            const JWT_KEY = config.JWT_SEC;
            jwt.sign({ user: users[0].username }, JWT_KEY, (err , token) => {
                return res.status(200).json({ success: true, token: token});    
            });
  
        })
 
})

router.post('/signup',  (req, res, next) => {
//   res.status(200).json(req.body);

  let first_name = req.body.form.firstName;
  let last_name = req.body.form.lastName;
  let username = req.body.form.username;
  let password = bcrypt.hashSync(req.body.form.password, 10);

  try{
          connection.query(`INSERT INTO users(first_name, last_name, username, password) VALUES ('${first_name}', '${last_name}', '${username}', '${password}')`, function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
            res.send('1 record inserted');
        });
  }
  catch (err) {
      res.status(400).json(err);
  }


})




module.exports = router;