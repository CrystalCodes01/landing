const Schema = mongoose.Schema;

const registrationSchema = new Schema(
  {
    name: { type: String },
    emailAddress: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: Number},
    creationDate: { type: Date, default: Date.now },
    geo: { type: [ Number ], index: '2d' }, ///LATITUDE LONGITUDE GO HERE

    // the id of the user who owns the reg
    owner: { type: Schema.Types.ObjectId }
  },

  {
    timestamps: true
  }
);

registrationSchema.methods.findNear = function(cb) {
  return this.model('userSP').find({geo: { $nearSphere: this.geo, $maxDistance: 0.01} }, cb);
};

const userSpModel = mongoose.model('userSP', registrationSchema);


module.exports = userSpModel;
