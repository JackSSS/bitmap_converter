var expect = require('chai').expect;
var converter = require(__dirname + '/../lib/converter');
var bitmap = require(__dirname + '/../lib/converter');

describe('the mood map', function() {
  it('should visually show you your mood', function() {
    expect(converter()).to.eql.not(bitmap); //still working on something viable for this
  });
});
