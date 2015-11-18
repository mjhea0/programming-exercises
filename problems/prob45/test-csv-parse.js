var expect = require('chai').expect;
var csvParse = require('./csv_parse.js');


describe('CSV Parse', function() {
  it('should parse a string of integers correctly', function() {
    var input = '3,7,9,1,25';
    var output = [ 3, 7, 9, 1, 25 ];
    expect(csvParse(input)).to.deep.equal(output);
  });
  it('should parse a string of strings correctly', function() {
    var input = '"3","7","9","1","25"';
    var output = ["3", "7", "9", "1", "25"];
    expect(csvParse(input)).to.deep.equal(output);
  });
  it('should parse a string of integers and strings correctly', function() {
    var input = '1, "one", 2, "two", 3, "three"';
    var output = [1, "one", 2, "two", 3, "three"];
    expect(csvParse(input)).to.deep.equal(output);
  });
});
