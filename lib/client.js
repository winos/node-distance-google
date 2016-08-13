'use strict'

var request = require('request')
var qs = require('querystring')
var q = require('q')

function ClientDistanceMatrix (options) {
  this.options = options || {}
  this.apiKey = this.options.apiKey || ''
  this.endpoint = this.options.endpoint ||
                  'https://maps.googleapis.com/maps/api/distancematrix/json'
}

ClientDistanceMatrix.prototype._request = function (method, params) {
  var uri = this.endpoint
  var deferred = q.defer()
  var responseObj = {}
  params.key = this.apiKey

  if (params)
    uri += '?' + qs.encode(params)

  request({
    uri: uri,
    methhod: method,
    json: true
  }, function(err, res, body)  {
    if (err) deferred.reject(err)

    if (res.statusCode !== 200) deferred.reject(new Error('An error ocurred'))
    responseObj.destination = body.destination_addresses[0]
    responseObj.origin = body.origin_addresses[0]
    responseObj.distance = body.rows[0].elements[0].distance.text
    responseObj.duration = body.rows[0].elements[0].duration.text

    deferred.resolve(responseObj)
  })

  return deferred.promise
}

ClientDistanceMatrix.prototype.getDistance = function (destination) {
  return  this._request('get', destination)
}

module.exports = ClientDistanceMatrix
