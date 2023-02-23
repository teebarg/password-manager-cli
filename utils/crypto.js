const crypto = require("crypto");
const speakeasy = require("speakeasy");

const secret = speakeasy.generateSecret({ length: 20, name: "Password Manager" });

exports.encrypt = async (password) => {
    // Encrypt the password using AES-256-CBC algorithm and a randomly generated IV
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", secret.base32, iv);
    let encryptedPassword = cipher.update(password, "utf8", "base64");
    encryptedPassword += cipher.final("base64");
    return encryptedPassword;
};


exports.decrypt = async (iv, password) => {
    // Decrypt the password using the stored IV and AES-256-CBC algorithm
    const newIv = Buffer.from(iv, "base64");
    const decipher = crypto.createDecipheriv("aes-256-cbc", secret.base32, newIv);
    let decryptedPassword = decipher.update(password, "base64", "utf8");
    decryptedPassword += decipher.final("utf8");
    return decryptedPassword;
};
