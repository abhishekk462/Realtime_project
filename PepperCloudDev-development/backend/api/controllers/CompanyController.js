

module.exports = {
    index: function (req, res) {
      CompanyDetail.find({}).populate("client").exec(function (err, companies){
        if (err) {
          return res.serverError(err);
        }
        return res.json(companies);
    });
    },

    create: function(req,res) {
      let params = _.extend(req.query || {}, req.params || {}, req.body || {});
      CompanyDetail.create(params).exec(function (err, company){
      if (err) { return res.serverError(err); }
      return res.json(200,{"success":true});
      });
      },

    show: function (req,res) {

        let id = req.param('id');

        if (!id) return res.send("No id specified.", 500);


        CompanyDetail.findOne({'id':id}).populate("client").exec(function (err, company) {
          if(err) return res.sender(err,500);
          if(!company) return res.send("Company "+id+" not found", 404);
          return res.json(200,{company});
        });
    },

    update: function (req,res) {

        let params = _.extend(req.query || {}, req.params || {}, req.body || {});
        let id = params.id;

        if (!id) return res.send("No id specified.",500);

        CompanyDetail.update(id, params, function companyUpdated(err, updatedCompany) {
          if (err) {
            return res.serverError(err);
          }
          if(!updatedCompany) {
            return res.serverError(err);
          }
          return res.json(200,{updatedCompany});
        });
      },


    destroy: function (req,res) {
      let id = req.param('id');
      if (!id) return res.send("No id specified.",500);

      CompanyDetail.find(id, function foundCompany(err, company) {
        if (err) return res.send(err,500);
        if (!company) return res.send("No company with that id exists.",404);

        CompanyDetail.destroy(id, function companyDestroyed(err) {
          if (err) return res.send(err,500);

          return res.json(200,{"success":true});
        });

      })
    }

};
