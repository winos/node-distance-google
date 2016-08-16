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

    it('should be params an json objects', (done) => {
      expect(() => googleApiDistance.createClient('stringParamsFail'))
        .to.throw(ReferenceError, /is not permitted/)
      done()
    })
  })

  describe('Get Data Distance', function () {

    it('should return error with wrong or null params', (done) => {
      var client  = googleApiDistance.createClient()
      ,   params = {}

      expect(() => client.getDistance(params)).to.throw(Error, /params is null/)
      done()
    })

    it('should return distance data', () => {
      var client  = googleApiDistance.createClient()

      var params = {
        origins:'37.430622, -122.138174',
        destinations:'37.432599, -122.136221',
        mode: 'walk'
      }

      return client.getDistance(params).then((data) => {
        //console.log(data.distance);
        expect(data).to.have.property('distance').and.be.a('string').and.be.equals('1.2 km')
        expect(data).to.have.property('origin').and.be.a('string')
        expect(data).to.have.property('destination').and.be.a('string')
        expect(data).to.have.property('duration').and.be.a('string')
      })
    })
  })
})
