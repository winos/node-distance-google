'use strict'

var expect = require('chai').expect
,   googleApiDistance = require('../')
,   Client = require('../lib/client')

describe('Client', function () {

  describe('Instance', function () {

    it('should exist main function', (done) => {
      expect(googleApiDistance.createClient).to.be.ok
      done()
    })

    it('Should be a function-CreateClient', (done) => {
      expect(googleApiDistance.createClient).to.be.a('function')
      done()
    })

    it('should be a instance of client', (done) => {
      var client = googleApiDistance.createClient()
      expect(client).to.be.an.instanceof(Client)
      done()
    })

    it('params should be an json objects', (done) => {
      expect(() => googleApiDistance.createClient('stringParamsFail'))
        .to.throw(ReferenceError, /is not permitted/)
      done()
    })
  })
})
