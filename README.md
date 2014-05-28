# Shortee.js

Shortee is a javascript implementation of a shortee message format parser.

See the shortee message specification at:

  https://github.com/JeremyNevill/shortee/blob/master/Shortee_specification.md

This implementation is used in [firework-ng](https://github.com/JeremyNevill/firework-ng), part of the [Firework Micrologging Framework](https://github.com/JeremyNevill/firework)


The parser is generated from the shortee.pegjs grammar file using the PEG.js parser generator.
Thanks to David Majda for creating PEG.js which is located at http://pegjs.majda.cz

Shortee messages are like status updates or tweets with meaning e.g.

@JeremyNevill wrote 100linesofcode 26/nov/2013

Using a peg parser we can extract the following data structure:

```
{
   "actor": "JeremyNevill",
   "action": "wrote",
   "amount": 100,
   "units": "linesofcode",
   "date": "26/nov/2013"
}
```


## Getting Started
* Clone this repository.
* Run the unit tests to parse some sample shortee messages.


## Unit Testing
To run the unit tests install node, npm, grunt and then...

```
grunt nodeunit
```


## Documentation
For documentation on the shortee message format view the specification at:
https://github.com/JeremyNevill/shortee/blob/master/Shortee_specification.md


## Examples

```
var shortee = require('../lib/shortee.js');

var actor = shortee.parser.parse('@freddie ate 1cheese 01/jan/2013').actor;
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
Nov 2013 - Project start

## License
Copyright (c) 2013-2014 [Jeremy Nevill](http://nevill.net)
Licensed under the MIT license.
