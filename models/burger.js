// Import the ORM
var orm = require("../config/orm.js");

// code that will call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, id, cb) {
      orm.updateOne("burgers", objColVals, id, function(res) {
        cb(res);
      });
    }
  };

// Export database functions for controller
module.exports = burger;