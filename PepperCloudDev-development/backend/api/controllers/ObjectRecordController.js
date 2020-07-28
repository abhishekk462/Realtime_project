class ObjectRecordController {

  constructor() {
  }

  index(req,res){

  }

  save(req,res){

    let {formData} = req.body;
    let {screenId} = req.body;


    console.log("data is" ,screenId,formData);

    Object.keys(formData).map((element) => {

      ObjectRecord.create({f_id:element , text_val:formData[element] })
        .exec((err,res)=>{

          if(err){
            console.log("Error saving", element);
          }


        });


    });



    res.json({"msg": "ok"});
  }



}

const recordController = new ObjectRecordController();
module.exports = {
  index:        recordController.index,
  save:        recordController.save,

};
