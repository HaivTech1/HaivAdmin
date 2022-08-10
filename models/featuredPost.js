import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const featuredPostSchema = new Schema()

module.exports = mongoose.models.FeaturedPost || mongoose.model('FeaturedPost', featuredPostSchema)
