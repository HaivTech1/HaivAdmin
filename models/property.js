import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
    },
    bedroom: {
      type: Number,
      required: false,
    },
    bathroom: {
      type: Number,
      required: false,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    longitude: {
      type: String,
      required: false,
      trim: true,
    },
    latitude: { type: String, required: false, trim: true },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    specifications: [String],
    image: {
      type: Object,
      url: {
        type: URL,
      },
      public_id: {
        type: String,
      },
    },
    interiors: [
      {
        type: Object,
        url: {
          type: URL,
        },
        public_id: {
          type: String,
        },
      },
    ],
    meta: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.models.Property || mongoose.model('Property', propertySchema)
