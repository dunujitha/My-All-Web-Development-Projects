

function get401(req, res){
          res.status(401).render('401');
}





module.exports = {
          get401: get401
}