/**
 * ResourceController
 *
 * @description :: Server-side logic for managing Resources
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index : function(req,res){
    res.json(200,{});
  },

  getByName : function(req,res){
    res.json(200,{"ress":{}});
  }

};

