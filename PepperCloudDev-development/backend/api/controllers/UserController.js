

module.exports = {
    index: function (req, res) {
        User.find({}).exec(function (err, companies){
            if (err) {
                return res.serverError(err);
            }
            return res.json(companies);
        });
    },

    create: function(req,res) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        User.create(params).exec(function (err, user){
            if (err) { return res.serverError(err); }
            return res.json(200,{"success":true});
            });
        },

    show: function (req,res) {

        var id = req.param('id')

        if (!id) return res.send("No id specified.", 500);


        User.find(id, function userFound(err, user) {
            if(err) return res.sender(err,500);
            if(!user) return res.send("User "+id+" not found", 404);
            return res.json(200,{user});
        });
    },

    update: function (req,res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);

        User.update(id, params, function userUpdated(err, updatedUser) {
          if (err) {
            return res.serverError(err);
          }
          if(!updatedUser) {
            return res.serverError(err);
          }
          return res.json(200,{updatedUser});
        });
    },


    destroy: function (req,res) {
        var id = req.param('id');
        if (!id) return res.send("No id specified.",500);

        User.find(id, function foundUser(err, user) {
            if (err) return res.send(err,500);
            if (!user) return res.send("No user with that id exists.",404);

            User.destroy(id, function userDestroyed(err) {
                if (err) return res.send(err,500);

                return res.json(200,{"success":true});
            });

        })
    },

    addClients: function (req,res) {
        var id = req.param('id');
        if (!id) return res.send("No id specified.",500);
        User.findOne(id).exec(function(err, user) {
            if (err) return res.send(err,500);
            if (!user) return res.send("No user with that id exists.",404);

            // Queue up a record to be inserted into the join table
            user.clients.add(req.param('client_ids'));

            // Save the user, creating the new pet and associations in the join table
            user.save(function(err) {
                if (err) return res.send(err,500);

                return res.json(200,{"success":true});
            });
        });
    },

    getClients: function (req,res) {
        var id = req.param('id');
        if (!id) return res.send("No id specified.",500);
        User.findOne(id).populate("clients").exec(function(err, user) {
            if (err) return res.send(err,500);
            if (!user) return res.send("No user with that id exists.",404);

            return res.json(200,{user});
        });
    },

};
