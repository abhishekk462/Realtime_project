var CircularJSON = require('circular-json')

/**
 * Core functionality of the Application
 */
class CoreController {

  constructor(){}


  /***
   * get the screen detail based on the id
   */
   screens(req, res) {

    let {id} =  req.params;
    console.log("Screen id is ", id);

    // search in the UI Screen Detail table for the record for screen Id
    UIScreenDetail.findOne({id:id}).exec((err, screen) => {

      if(err){
        res.json("Some error !!!", err);
      }

      console.log("record is", screen);
      res.json(screen);

    });
    //res.json({});
  }

  /**
   * Get screen details based on the company and screenId
   * @param req
   * @param res
   */
  screenContent(req,res) {
    let {id} = req.params;
    let {companyId} = req.query;

    UIScreenDetail
      .findOne({id: id})
      .populate('templates')
      .populate('links')
      .exec((err, screen) => {

      if (err) {
        console.log(err);
       return res.json({msg:"Some error !!!", err:CircularJSON.stringify(err)});
      }

      if (screen) {

        ScreenTemplate.find({companyId: companyId, scrId: id}).exec((err, templates) => {

          screen.templates = templates;
          res.json(screen);
        });

      } else {
        res.json({});
      }

    });
  }

  /**
   * Get all the fields for template Id
   * @param req
   * @param res
   */
  fields(req,res){

    let {templateId} = req.params;

    ScreenTemplate.findOne({id:templateId})
      .populate('fieldsList')
      .exec((err, template)=>{

      if (err) {
        res.json("Some error !!!", err);
      }

      let contents = [];

      async.each(template.fieldsList, (content, cb)=>{

        UIScreenContentDetail.findOne({id:content.id})
          .populate("fieldDetail")
          .populate("sectionDetail")
          .populate("screenDetail")
          .then((uiScrContentStl)=> {

            async.parallel([
              //fetch field detail
              (callback)=>{
                  if(uiScrContentStl.fieldDetail) {
                    uiScrContentStl.fieldId = uiScrContentStl.fieldDetail.fieldId;

                    UIFieldType.findOne({code:uiScrContentStl.fieldDetail.fieldType})
                      .then((fieldType)=> {
                        uiScrContentStl.fieldDetail.fieldType = fieldType;
                        callback();
                      });



                  }else{
                    uiScrContentStl.fieldId = null;
                    callback();
                  }
                },


              //others
               (callback)=> {

                if(uiScrContentStl.sectionDetail) {
                  uiScrContentStl.sectionId = uiScrContentStl.sectionDetail.secId;
                }else{
                  uiScrContentStl.secId = null;
                }

                if(uiScrContentStl.screenDetail) {
                  uiScrContentStl.screenId = uiScrContentStl.screenDetail.id;
                }else{
                  uiScrContentStl.screenId = null;
                }

                callback();
              }

            ], (err, results) => {

              console.log(results);

              contents.push(uiScrContentStl);
              cb();

            });




          });

      }, (err)=>{


        res.json(contents);

      });

        // template.fieldsList =  template.fieldsList.map((screenContentDtl)=> {
        //   UIScreenContentDetail.find({id:screenContentDtl.id})
        //     .populateAll()
        //     .then((uiScrContentStl)=>  uiScrContentStl );
        // });

      //res.json(template.fieldsList);

    });

  }

  /**
   * Get all the Transaction records for screen Id
   * @param req
   * @param res
   */
  records(req,res){
    let {scrid} = req.params;

    TransactionRecord.find({scrId:scrid }).exec((err, records) => {

      res.json(records);

    });

  }


  /**
   * Get the specific record for the transaction id
   * @param req
   * @param res
   */
  record(req,res){
    let {trnId} = req.params;

    TransactionRecord.findOne({trnId:trnId }).exec((err, record) => {

      res.json(record);

    });

  }


  /**
   * Get the menus for the specified user
   * TODO: move this one out of core
   * @param req
   * @param res
   */
  menus(req,res){
    let userId = req.params;

    MenuDetail.find({parentId:0})
      .populate('childrens')
      .exec((err,menus) => {

      res.json(menus);

    });

  }


  fieldTypes(req,res){


    UIFieldType.find().exec((err, fieldTypes)=>{

      if (err) {
        res.json({msg:"Some error !!!" +  err});
      }

      res.json(fieldTypes);

    });

  }



  templateSave(req,res){

    let templateData = req.body;
    let {id} = templateData;

    templateData = _.omit(templateData, 'id');
    console.log("templateData", templateData);

    /*

    ScreenTemplate.update({id:id}, templateData).exec((err,result)=> {

      if(err){
        console.log("cannot update the records", err);
      }else{

        console.log("updated", result);
      }

    });

    */

    res.json({msg:"ok"});

  }






}

const coreController = new CoreController();
module.exports = {
  screens:        coreController.screens,
  screenContent : coreController.screenContent,
  fields:         coreController.fields,
  records :       coreController.records,
  record:         coreController.record,
  menus :         coreController.menus,
  fieldTypes:     coreController.fieldTypes,
  templateSave:   coreController.templateSave
};
