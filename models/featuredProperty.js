import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const featuredPropertySchema = new Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
})

module.exports =
  mongoose.models.FeaturedProperty || mongoose.model('FeaturedProperty', featuredPropertySchema)
