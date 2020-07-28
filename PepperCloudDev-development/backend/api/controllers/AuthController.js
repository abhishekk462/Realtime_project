
module.exports = {

  index : function(req, res) {
    User.find({}).exec(function selectCB(err,result){

      res.json(200, {user: result});
    });

  },


  authenticate : function(req, res){

    //TODO: replace with actual oauth code

    let tokenTemp = {
      user: 'admin',
      client: 'adminSecret',
      refreshTokenExpiresAt: null,
      refreshToken: "1234567890",
      refresh_token: "1234567890",
      auth_token :"1234567890",
      scope: 'temp'
    };

    res.json(tokenTemp);

  }

}
