var Client = require('./lib/client')

function createClient (options) {
  if (typeof options  === 'string')
    throw new ReferenceError('arguments is not permitted')

  return new Client(options)
}

module.exports = {
  createClient: createClient
}
