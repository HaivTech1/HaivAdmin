const nodemailer = require('nodemailer')

exports.generateOTP = () => {
  let otp = ''
  for (let i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9)
    otp = otp + randVal
  }
  return otp
}

exports.mailTransport = () =>
  nodemailer.createTransport({
    host: process.env.MAILTRAP_SERVER_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  })

exports.generateEmailTemplate = code => {
  return `
  <!DOCTYPE html>
  <html
    lang="en"
  >
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <title></title>
  
      <!-- CSS Reset : BEGIN -->
      <style>
        /* haivtech color Theme   */
        :root {
          --primary: #f9a01b;
          --secondary: #9F0E7F;
          --text: #000000;
        }
        html,
        body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          font-family: "Roboto", sans-serif !important;
          font-size: 14px;
          margin-bottom: 10px;
          line-height: 24px;
          color: var(--text);
          font-weight: 400;
        }
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
        }
        table,
        td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
        }
        table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
        }
        table table table {
          table-layout: auto;
        }
        a {
          text-decoration: none;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
      </style>
    </head>
  
    <body
      width="100%"
      style="
        margin: 0;
        padding: 0 !important;
        mso-line-height-rule: exactly;
        background-color: #f5f6fa;
      "
    >
      <center style="width: 100%; background-color: #f5f6fa">
        <table
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          bgcolor="#f5f6fa"
        >
          <tr>
            <td style="padding: 40px 0">
              <table style="width: 100%; max-width: 620px; margin: 0 auto">
                <tbody>
                  <tr>
                    <td style="text-align: center; padding-bottom: 25px">
                      <a href="#"
                        ><img
                          style="height: 40px"
                          src="/favicon.ico"
                          alt="HaivTech"
                      /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                style="
                  width: 100%;
                  max-width: 620px;
                  margin: 0 auto;
                  background-color: #ffffff;
                "
              >
                <tbody>
                  <tr>
                    <td style="padding: 30px 30px 15px 30px">
                      <h2
                        style="
                          font-size: 18px;
                          color: var(--primary);
                          font-weight: 600;
                          margin: 0;
                        "
                      >
                        Complete your Login!
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 30px 20px">
                      <p style="margin-bottom: 10px;">
                        Welcome! <br />
                        You are receiving this email because you tried to login into your account.
                      </p>
                      <p style="margin-bottom: 10px">
                        Here is a verification code for your account which will expire in 3 minutes
                      </p>
                      <p style="margin-bottom: 5px;text-align: center; font-size: 30px; margin-top: 35px; color: var(--primary);">
                       <strong>${code}</strong>
                      </p>
                     
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 30px 40px">
                      <p>
                        Unique solutions for you!
                      </p>
                      <p
                        style="
                          margin: 0;
                          font-size: 13px;
                          line-height: 22px;
                          color: var(--secondary);
                        "
                      >
                        This is an automatically generated email please do not
                        reply to this email. If you face any issues, please
                        contact us at desk@haivtech.com
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%; max-width: 620px; margin: 0 auto">
                <tbody>
                  <tr>
                    <td style="text-align: center; padding: 25px 20px 0">
                      <ul style="margin: 10px -4px 0; padding: 0">
                          <li
                            style="
                              display: inline-block;
                              list-style: none;
                              padding: 4px;
                            "
                          >
                            <a
                              style="
                                display: inline-block;
                                height: 30px;
                                width: 30px;
                                border-radius: 50%;
                                background-color: #ffffff;
                              "
                              href="#"
                              ><img
                                style="width: 30px"
                                src="images/github.svg"
                                alt="github"
                            /></a>
                          </li>
                          <li
                            style="
                              display: inline-block;
                              list-style: none;
                              padding: 4px;
                            "
                          >
                            <a
                              style="
                                display: inline-block;
                                height: 30px;
                                width: 30px;
                                border-radius: 50%;
                                background-color: #ffffff;
                              "
                              href="#"
                              ><img
                                style="width: 30px"
                                src="images/google.svg"
                                alt="google"
                            /></a>
                          </li>
                          <li
                            style="
                              display: inline-block;
                              list-style: none;
                              padding: 4px;
                            "
                          ></li>
                        </ul>
    
                        <p style="padding-top: 15px; font-size: 12px">
                          This email was sent to you as a registered user of
                          <a
                            style="color: var(--secondary); text-decoration: none"
                            href=""
                            >HaivTech</a
                          >
                        </p>
    
                        <p style="padding-top: 15px; font-size: 12px">
                          <a
                            style="color: var(--primary); text-decoration: none"
                            href=""
                            >desk@haivtech.com</a
                          >
                        </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>
  
    `
}

exports.plainEmailTemplate = (heading, message) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <title></title>
  
  
      <!-- CSS Reset : BEGIN -->
      <style>
        /* haivtech color Theme   */
        :root {
          --primary: #f9a01b;
          --secondary: #9F0E7F;
          --text: #2d3954;
        }
        html,
        body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          font-family: "Roboto", sans-serif !important;
          font-size: 14px;
          margin-bottom: 10px;
          line-height: 24px;
          color: var(--text);
          font-weight: 400;
        }
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
        }
        table,
        td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
        }
        table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
        }
        table table table {
          table-layout: auto;
        }
        a {
          text-decoration: none;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
      </style>
    </head>
  
    <body
      width="100%"
      style="
        margin: 0;
        padding: 0 !important;
        mso-line-height-rule: exactly;
        background-color: #f5f6fa;
      "
    >
      <center style="width: 100%; background-color: #f5f6fa">
        <table
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          bgcolor="#f5f6fa"
        >
          <tr>
            <td style="padding: 40px 0">
              <table style="width: 100%; max-width: 620px; margin: 0 auto">
                <tbody>
                  <tr>
                    <td style="text-align: center; padding-bottom: 25px">
                      <a href="#"
                        ><img
                          style="height: 40px"
                          src="images/icon-256x256.png"
                          alt="logo"
                      /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                style="
                  width: 100%;
                  max-width: 620px;
                  margin: 0 auto;
                  background-color: #ffffff;
                "
              >
                <tbody>
                  <tr>
                    <td style="padding: 30px 30px 20px">
                      <p style="margin-bottom: 10px">
                        ${heading}
                      </p>
                      <p style="margin-bottom: 10px">
                        ${message}
                      </p>
                      <p style="margin-bottom: 15px">
                        Hope you'll enjoy the experience, we're here if you have
                        any questions, drop us a line at
                        <a
                          style="color: var(--secondary); text-decoration: none"
                          href="mailto:"
                          >desk@haivtech.com</a
                        >
                        anytime.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%; max-width: 620px; margin: 0 auto">
                <tbody>
                  <tr>
                    <td style="text-align: center; padding: 25px 20px 0">
                      <ul style="margin: 10px -4px 0; padding: 0">
                        <li
                          style="
                            display: inline-block;
                            list-style: none;
                            padding: 4px;
                          "
                        >
                          <a
                            style="
                              display: inline-block;
                              height: 30px;
                              width: 30px;
                              border-radius: 50%;
                              background-color: #ffffff;
                            "
                            href="#"
                            ><img
                              style="width: 30px"
                              src="images/fbicon.png"
                              alt="brand"
                          /></a>
                        </li>
                        <li
                          style="
                            display: inline-block;
                            list-style: none;
                            padding: 4px;
                          "
                        >
                          <a
                            style="
                              display: inline-block;
                              height: 30px;
                              width: 30px;
                              border-radius: 50%;
                              background-color: #ffffff;
                            "
                            href="#"
                            ><img
                              style="width: 30px"
                              src="images/twittericon.png"
                              alt="brand"
                          /></a>
                        </li>
                        <li
                          style="
                            display: inline-block;
                            list-style: none;
                            padding: 4px;
                          "
                        ></li>
                      </ul>
  
                      <p style="padding-top: 15px; font-size: 12px">
                        This email was sent to you as a registered user of
                        <a
                          style="color: var(--secondary); text-decoration: none"
                          href=""
                          >haivtech</a
                        >
                      </p>
  
                      <p style="padding-top: 15px; font-size: 12px">
                        <a
                          style="color: var(--primary); text-decoration: none"
                          href=""
                          >haivtech.com</a
                        >
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>
    `
}

exports.generatePasswordResetTemplate = url => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <title></title>
     
      <!-- CSS Reset : BEGIN -->
      <style>
        /* haivtech color Theme   */
        :root {
          --primary: #f9a01b;
          --secondary: #9F0E7F;
          --text: #2d3954;
          
        }
        html,
        body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          font-family: "Roboto", sans-serif !important;
          font-size: 14px;
          margin-bottom: 10px;
          line-height: 24px;
          color: var(--text);
          font-weight: 400;
        }
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
        }
        table,
        td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
        }
        table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
        }
        table table table {
          table-layout: auto;
        }
        a {
          text-decoration: none;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
      </style>
    </head>
  
    <body
      width="100%"
      style="
        margin: 0;
        padding: 0 !important;
        mso-line-height-rule: exactly;
        background-color: #f5f6fa;
      "
    >
      <center style="width: 100%; background-color: #f5f6fa">
        <table
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          bgcolor="#f5f6fa"
        >
          <tr>
            <td style="padding: 40px 0">
              <table style="width: 100%; max-width: 620px; margin: 0 auto">
                <tbody>
                  <tr>
                    <td style="text-align: center; padding-bottom: 25px">
                      <a href="#"
                        ><img
                          style="height: 40px"
                          src="images/icon-256x256.png"
                          alt="logo"
                      /></a>
                      <!-- <p
                        style="font-size: 14px; color: var(--primary); padding-top: 12px"
                      >
                        haivtech
                      </p> -->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                style="
                  width: 100%;
                  max-width: 620px;
                  margin: 0 auto;
                  background-color: #ffffff;
                "
              >
                <tbody>
                  <tr>
                    <td style="text-align: center; padding: 50px 30px">
                      <h2
                        style="
                          font-size: 18px;
                          color: var(--primary);
                          font-weight: 400;
                          margin-bottom: 8px;
                        "
                      >
                        Password reset link
                      </h2>
                      <a href="${url}">
                       Reset Password
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%; max-width: 620px; margin: 0 auto">
                <tbody>
                  <tr>
                    <td style="text-align: center; padding: 25px 20px 0">
                      <ul style="margin: 10px -4px 0; padding: 0">
                        <li
                          style="
                            display: inline-block;
                            list-style: none;
                            padding: 4px;
                          "
                        >
                          <a
                            style="
                              display: inline-block;
                              height: 30px;
                              width: 30px;
                              border-radius: 50%;
                              background-color: #ffffff;
                            "
                            href="#"
                            ><img
                              style="width: 30px"
                              src="images/fbicon.png"
                              alt="brand"
                          /></a>
                        </li>
                        <li
                          style="
                            display: inline-block;
                            list-style: none;
                            padding: 4px;
                          "
                        >
                          <a
                            style="
                              display: inline-block;
                              height: 30px;
                              width: 30px;
                              border-radius: 50%;
                              background-color: #ffffff;
                            "
                            href="#"
                            ><img
                              style="width: 30px"
                              src="images/twittericon.png"
                              alt="brand"
                          /></a>
                        </li>
                        <li
                          style="
                            display: inline-block;
                            list-style: none;
                            padding: 4px;
                          "
                        ></li>
                      </ul>
                      <p style="padding-top: 15px; font-size: 12px">
                        This email was sent to you as a registered user of
                        <a
                          style="color: var(--secondary); text-decoration: none"
                          href=""
                          >haivtech</a
                        >
                      </p>
  
                      <p style="padding-top: 15px; font-size: 12px">
                        <a
                          style="color: var(--primary); text-decoration: none"
                          href=""
                          >haivtech.com</a
                        >
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>
    `
}
