const BaaS = require('./baas')
const baasRequest = require('./baasRequest').baasRequest
const HError = require('./HError')

const API = BaaS._config.API

const invokeFunction = (functionName, params) => {
  if (!functionName) {
    throw new HError(605)
  }

  let data = {
    function_name: functionName,
  }

  if (params) {
    data.data = params
  }

  return baasRequest({
    url: API.CLOUD_FUNCTION,
    method: 'POST',
    data: data,
  })
}

module.exports = invokeFunction