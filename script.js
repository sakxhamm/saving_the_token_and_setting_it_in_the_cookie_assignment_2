const encrypt = require("./encrypt");

const secretKey = "mySecretKey"; // Change this to a secure secret key

const payload = {
    userId: 123,
    username: "testuser",
};

const token = encrypt(payload, secretKey);
console.log("Encrypted JWT:", token);
