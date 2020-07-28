

module.exports = {
    index: function (req, res) {
        ClientDetail.find({}).populate("companies").exec(function (err, companies){
            if (err) {
                return res.serverError(err);
            }
            return res.json(companies);
        });
    },

    create: function(req,res) {
        let params = _.extend(req.query || {}, req.params || {}, req.body || {});

        ClientDetail.create(params).exec(function (err, client){
            if (err) { return res.serverError(err); }
            return res.json(200,{"success":true});
            });
        },

    show: function (req,res) {

        let id = req.param('id')

        if (!id) return res.send("No id specified.", 500);


        ClientDetail.findOne({'id': id}).populate("companies").exec(function (err, client) {
            if(err) return res.sender(err,500);
            if(!client) return res.send("Client "+id+" not found", 404);
            return res.json(200,{client});
        });
    },

    update: function (req,res) {

        let params = _.extend(req.query || {}, req.params || {}, req.body || {});
        let id = params.id;

        if (!id) return res.send("No id specified.",500);

        ClientDetail.update(id, params, function clientUpdated(err, updatedClient) {
          if (err) {
            return res.serverError(err);
          }
          if(!updatedClient) {
            return res.serverError(err);
          }
          return res.json(200,{updatedClient});
        });
    },


    destroy: function (req,res) {
        let id = req.param('id');
        if (!id) return res.send("No id specified.",500);

        ClientDetail.find(id, function foundClient(err, client) {
            if (err) return res.send(err,500);
            if (!client) return res.send("No client with that id exists.",404);

            ClientDetail.destroy(id, function clientDestroyed(err) {
                if (err) return res.send(err,500);

                return res.json(200,{"success":true});
            });

        })
    }

};
