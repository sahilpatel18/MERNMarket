const jwt = require("jsonwebtoken");

//middleware for when a non logged in user tries to visit a private route
module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWTSECRET);
    req.user = verified;
    next()
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}

