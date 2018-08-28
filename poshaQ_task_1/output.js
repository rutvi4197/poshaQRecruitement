const MongoClient = require("mongodb").MongoClient;
let _lodash = require("lodash");

const submission = async (client, dbName, collectionName, bucketSize) => {
  const connectionString = "mongodb://" + client;

  (async () => {
    //connection with MongoDB
    const connection = await MongoClient.connect(
      connectionString,
      { useNewUrlParser: true }
    );
    //Connection with Database
    const db = connection.db(dbName);

    try {
      //Get data from collection
      db.collection(collectionName, function(err, collection) {
        collection.find().toArray(function(err, data) {
          let categoryData = {};
          data.map(arrayData => {
            categoryData[arrayData.category] = [...(categoryData[arrayData.category] || []),arrayData._id];
          });

          Object.keys(categoryData).map(resultData => {
            let result = {
              category: resultData,
              id: categoryData[resultData]
            };
            console.log(result.category);
            console.log(_lodash.chunk(result.id, bucketSize));
          });
        });
      });
    } finally {
      //close database connection after finish work
      connection.close();
    }
  })().catch(err => {
    console.error("Error"+err);
  });
};

exports.connection = submission;
