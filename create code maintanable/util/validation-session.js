function getSessionErrorData(req, defaultVlue){
          let sessionInputData = req.session.inputData;
        
          if (!sessionInputData) {
            sessionInputData = {
              hasError: false,
              ...defaultVlue
            };
          }
        
          req.session.inputData = null;  

          return sessionInputData;
}



function flashErrorsToSesssion(req, data, action){
          req.session.inputData = {
                    hasError: true,
                   ...data
                  };

                  req.session.save(action);
}


module.exports = {
          getSessionErrorData: getSessionErrorData,
          flashErrorsToSesssion: flashErrorsToSesssion
}