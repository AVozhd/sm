var request = require("request");

exports.index = function(req, res) {
  if (
    req.body.captcha === undefined ||
    req.body.captcha === "" ||
    req.body.captcha === null
  ) {
    return res.json({ success: false, message: "Please select captcha" });
  }

  var secretKey = "6LfavnoUAAAAAN82ww24_5OD2NkPRXm9zUYpSzmJ";
  var verifyUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    req.body.captcha +
    "&remoteip=" +
    req.connection.remoteAddress;

  request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);
    if (body.success !== undefined && !body.success) {
      return res.json({
        success: false,
        message: "Failed captcha verification"
      });
    } else {
      res.render("landing", { title: "Self Marketing" });
      // return res.json({ success: true, message: "Captcha passed" });
    }
  });

  res.render("landing", { title: "Self Marketing" });
  // async.parallel({}, function(err, results) {
  //     res.render('landing', { title: 'Self Marketing', error: err });
  // });
};
