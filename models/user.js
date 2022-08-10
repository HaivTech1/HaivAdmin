const crypto = require('crypto')
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email cannot be empty'],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail],
    },
    verified: {
      type: Boolean,
      default: false,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'writer', 'admin'],
      default: 'user',
    },
    authLoginToken: {
      type: String,
      select: false,
    },
    authLoginExpires: {
      type: Date,
      select: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true },
)

userSchema.pre(/^find/, function (next) {
  // This points to the current query
  this.find({ active: { $ne: false } })
  next()
})

userSchema.methods.createAuthToken = function () {
  const authToken = crypto.randomBytes(3).toString('hex')

  this.authLoginToken = crypto.createHash('sha256').update(authToken).digest('hex')

  this.authLoginExpires = Date.now() + 10 * 60 * 8600

  return authToken
}

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
