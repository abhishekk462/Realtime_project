class TransactionRecordController {

    constructor() {
    }

    index(req, res) {

        let {screenId} = req.params;

        if (!!screenId) {

            TransactionRecord.find({screenId: screenId})
                    .populate("records")
                    .exec((err, transactions) => {

                        if (err) {
                            console.log("error fetching records for", screenId);
                        }


                        res.json(transactions);


                    });

        }


    }
    listTransactions(req, res) {

        var dtDraw = req.body.draw;
        var start = req.body.start;
        var length = req.body.length;
        var search = req.body.search.value;
        var orderFieldIndex = req.body.order[0].column;
        var orderBy;
        var orderField = req.body.columns[orderFieldIndex].data;
        if (req.body.order[0].dir === 'desc') {
            orderBy = 'DES';
        } else {
            orderBy = 'ASC';
        }
        let {screenId} = req.params;
        try {
            var query = {screenId: screenId};
            TransactionRecord.count(query, function (err, count) {
                if (err) {
                    return res.json({error: "Invalid API"});
                }
                if (count > 0) {
                    TransactionRecord.find(query)
                            .populate("records",{ limit: length,skip:start})
                            .exec((err, transactions) => { 
                                if (err) {
                                    console.log(err+" error fetching records for", screenId);
                                } 
                                var results=[];
                                if (!!transactions) { 
                                    transactions.map((record) => { 
                                        record.records.forEach((recFld) => {
                                            results.push(recFld);
                                        }); 
                                    });
                                    return res.json({draw: dtDraw,
                                    recordsTotal: count,
                                    recordsFiltered: count,
                                    data: results});
                                } else {
                                    return res.json({draw: dtDraw,
                                    recordsTotal: count,
                                    recordsFiltered: count,
                                    data: []});
                                }
                                
                            });
                } else {
                    return res.json({draw: dtDraw,
                        recordsTotal: count,
                        recordsFiltered: count,
                        data: []});
                }
            }); 

        } catch (e) {
            return res.json({draw: dtDraw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: []});
        }


    }

    save(req, res) {

        let {formData} = req.body;
        let {screenId} = req.body;


        console.log("data is", screenId, formData);

        TransactionRecord.create({screenId: screenId})
                .exec((err, trnRecord) => {


                    if (err) {
                        console.log("Error saving", screenId);
                    }


                    Object.keys(formData).map((element) => {

                        ObjectRecord.create({f_id: element, text_val: formData[element], trn_id: trnRecord.trnId})
                                .exec((err, res) => {

                                    if (err) {
                                        console.log("Error saving", element);
                                    }


                                });


                    });

                });





        res.json({"msg": "ok"});
    }

}

const recordController = new TransactionRecordController();
module.exports = {
    index: recordController.index,
    save: recordController.save,
    listTransactions: recordController.listTransactions,

};
