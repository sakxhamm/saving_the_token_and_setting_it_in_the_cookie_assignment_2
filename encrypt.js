const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
    return jwt.sign(payload, secret, { expiresIn: "1h" }); // JWT token with 1-hour expiry
};

module.exports = encrypt;