const CustomAPIError = require('./custom-error')
const BadRequest = require('./bad-request')
const Unauthenticated = require('./unauthenticated')

//collective export
module.exports = {
    CustomAPIError,
    BadRequest,
    Unauthenticated
}