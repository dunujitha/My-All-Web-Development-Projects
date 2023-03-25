function getSessionData(req){
   const sessionData = req.session.flashData;
   
   req.session.flashData = null;
   return sessionData;
}


function flashedData(req, data, action){
    req.session.flashData = data;
    req.session.save(action);


}



module.exports = {
  getSessionData: getSessionData,
  flashedData: flashedData
}