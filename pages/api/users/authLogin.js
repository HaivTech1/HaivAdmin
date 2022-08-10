import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/user'
import { generateEmailTemplate, mailTransport } from '../../../utils/email'

dbConnect()

const handler = async (req, res) => {
  const { method } = req

  if (method !== 'POST') {
    return res.status(400).json({ success: false, message: 'Only POST requests are allowed.' })
  }

  // Get user based on POSTed email
  let user = await User.findOne({ email: req.body.email })

  if (!user)
    return res
      .status(404)
      .json({ message: `User with this email: ${req.body.email}, does not exist` })

  // Generate the random auth token
  const authToken = user.createAuthToken()

  try {
    mailTransport().sendMail({
      from: 'desk@haivtech.com',
      to: user.email,
      subject: 'Complete your login',
      html: generateEmailTemplate(authToken),
    })

    return res.status(200).json({
      success: true,
      message: 'Check your email to complete login.',
    })
  } catch (error) {
    // Remove any tokens on the user in the database...
    // ...and save it in MongoDB
    user.authLoginToken = undefined
    user.authLoginExpires = undefined

    await user.save({ validateBeforeSave: false })

    return res.status(500).json({
      success: false,
      message: 'Error sending email. Please try again.',
    })
  }
}

export default handler
