/**
 * UpdateRecordsRequest model
 */
class UpdateRecordsRequest {
  /**
     * constructor
     * @param {String} appID
     * @param {Array<recordsItem>} recordsItem
     */
  constructor(appID, recordsItem) {
    this.appID = appID;
    this.recordsItem = recordsItem;
  }
  /**
     * Get JSON struct of this model
     * @return {integer}
     */
  toJSON() {
    return {
      app: this.appID,
      records: this.recordsItem || []
    };
  }
  /**
     * Convert this model to JSON string
     * @return {String}
     */
  toJSONString() {
    return JSON.stringify(this.toJSON());
  }
}
module.exports = UpdateRecordsRequest;