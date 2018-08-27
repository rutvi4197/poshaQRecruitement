// const _ = require('lodash');

/**
 * Groups products by category into buckets of given size.
 *
 * @example Test
 * Calling submission with bucketSize = 2 and products = [
 *   {_id: '0', category: 'A'},
 *   {_id: '1', category: 'B'},
 *   {_id: '2', category: 'C'},
 *   {_id: '3', category: 'A'},
 *   {_id: '4', category: 'B'},
 *   {_id: '5', category: 'C'},
 *   {_id: '6', category: 'A'},
 *   {_id: '7', category: 'B'},
 *   {_id: '8', category: 'C'},
 *   {_id: '9', category: 'A'},
 *   {_id: '10', category: 'B'},
 * ]
 * Returns [
 *   {
 *     A: [[0, 3], [6, 9]],
 *     B: [[1, 4], [7, 10]],
 *     C: [[2, 5], [8]]
 *   }
 * ]
 * // Notice that C category's last bucket can not be filled completely.
 * @param client MongoClient
 * @param dbName String
 * @param collectionName String
 * @param bucketSize Number
 * @returns Promise<Object>
 */
// const submission = async (client, dbName, collectionName, bucketSize) => {
  // TODO: Complete MongoDB assignment
  // Use async-await and lodash to complete this task.
};

// module.exports = submission;
