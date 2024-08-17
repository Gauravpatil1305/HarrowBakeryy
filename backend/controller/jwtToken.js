const jwt = require("jsonwebtoken");

/**
 * Generates a JWT token.
 *
 * @param {Object} payload - The data to be encoded in the token.
 * @param {string} secretKey - The secret key used to sign the token.
 * @param {Object} options - Additional options like expiresIn, issuer, etc.
 * @returns {string} The generated JWT token.
 */
const generateToken = (payload, secretKey, options = {}) => {
    return jwt.sign(payload, secretKey, options);
}

/**
 * Verifies a JWT token.
 *
 * @param {string} token - The token to be verified.
 * @param {string} secretKey - The secret key used to sign the token.
 * @returns {Object|null} The decoded payload if the token is valid, or null if invalid.
 */
const verifyToken = (token, secretKey) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.error('Error verifying token:', error);
        return null; // Return null if the token is invalid or expired
    }
}

/**
 * Checks if the user's role matches the required role.
 *
 * @param {Object} decodedToken - The decoded JWT token.
 * @param {string} requiredRole - The role that is required to access a resource.
 * @returns {boolean} True if the user's role matches the required role, false otherwise.
 */
const checkRole = (decodedToken, requiredRole) => {
    if (decodedToken && decodedToken.role === requiredRole) {
        return true;
    }
    return false;
}

module.exports = {
    generateToken,
    verifyToken,
    checkRole
};
