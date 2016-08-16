# Node Distance Google API

[![Build Status](https://travis-ci.org/winos/node-distance-google.svg?branch=master)](https://travis-ci.org/winos/node-distance-google)


# installation
```bash
npm install node-distance-google --save
```

# Usage
```js
var googleApiDistance = require('google-distance')

var client  = googleApiDistance.createClient()

var params = {
  origins:'37.430622, -122.138174',
  destinations:'37.432599, -122.136221',
  mode: 'walk'
}

client.getDistance(params)
  .then((data) => {
    // do stuff
  }).catch(err => console.log(err))

```

# Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
