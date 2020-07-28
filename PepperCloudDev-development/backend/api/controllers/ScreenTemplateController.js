

var ScreenController = module.exports = {
    index: function (req, res) {
        ScreenTemplate.find({}).populate("fieldsList").populate("screenDetail").exec(function (err, screenTemplates){
            if (err) {
                console.log(err)
                return res.serverError(err);
            }
            return res.json(screenTemplates);
        });
    },

    create: function(req,res) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var fieldsList = params[fieldsList];
        params[fieldsList] = {};
        ScreenTemplate.create(params).exec(function screenTemplateCreated(err, createdScreenTemplate) {
            if (err) {
                return res.serverError(err);
            }
            if(!createdScreenTemplate) {
                return res.serverError(err);
            }
            UIScreenContentDetail.create({"screenId": createdScreenTemplate.scrId,
                                          "sectionId":"g201",
                                          "templateId": createdScreenTemplate.id
            }).then(function(uiScreenContentDetail){
                UIScreenContentDetail.create({"screenId":createdScreenTemplate.scrId,
                                          "sectionId":"g201",
                                          "containerId": uiScreenContentDetail.id,
                                          "fieldId":"f011012",
                                          "templateId": createdScreenTemplate.id
                }).then(function(){
                    ScreenController.updateChildrenFields(fieldsList,createdScreenTemplate.id);
                        return res.json(200,{createdScreenTemplate});
                })
            })
        });
    },

    show: function (req,res) {

        var id = req.param('id')

        if (!id) return res.send("No id specified.", 500);


        ScreenTemplate.findOne(id).populate("fieldsList").populate("screenDetail").exec(function screenTemplateFound(err, screenTemplate) {
            if(err) return res.sender(err,500);
            if(!screenTemplate) return res.send("ScreenTemplate "+id+" not found", 404);
            return res.json(200,{screenTemplate});
        });
    },

    update: function (req,res) {

        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var id = params.id;

        if (!id) return res.send("No id specified.",500);
        
        ScreenTemplate.findOne(id).exec(function (err,screenTemplate){
            ScreenController.resetIdsForNewFields(screenTemplate.fieldsList);
            ScreenTemplate.update(screenTemplate.id,params).exec(function(err,updatedScreenTemplate){
                return res.json(200,updatedScreenTemplate);
            })
        })

    },


    destroy: function (req,res) {
        var id = req.param('id');
        if (!id) return res.send("No id specified.",500);

        ScreenTemplate.find(id, function foundScreenTemplate(err, screenTemplate) {
            if (err) return res.send(err,500);
            if (!screenTemplate) return res.send("No screenTemplate with that id exists.",404);

            ScreenTemplate.destroy(id, function screenTemplateDestroyed(err) {
                if (err) return res.send(err,500);

                return res.json(200,{"success":true});
            });

        })
    },

    updateChildrenFields: function (fields,templateId) {
        var fieldlist_ids = _.map(fields, 'id');
        UIScreenContentDetail.update(fieldlist_ids,{"templateId":templateId,
                                                    "preElementId":null,
                                                    "postElementId":null,
                                                    "containerId":null}).exec(function(err,fieldsList){
                                                        fieldsList.forEach(function(field){
                                                           ScreenController.updateChildrenFields(field.children,templateId); 
                                                        })
                                                    })
                            
    },

    resetIdsForNewFields: function(fields){
        var fieldlist_ids = _.map(fields, 'id');
        fieldlist_ids.forEach(function(id){
            UIScreenContentDetail.findOne(id).populate("children").populate("fieldDetail").populate("fieldType").exec(function(err,uiScreenContentDetail){
                uiScreenContentDetail.fieldDetail.typeCode = uiScreenContentDetail.fieldDetail.fieldType.code
                uiScreenContentDetail.fieldDetail.save();
                resetIdsForNewFields(uiScreenContentDetail.children)
            })
        })
    }

};