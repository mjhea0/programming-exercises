var expect = chai.expect;

describe('countIt()', function() {
  it('countIt(\'Hello World\') should return [1,3]', function() {
    expect(countIt('Hello World')).to.deep.equal({'d': 1,'e': 1,'h': 1,'l': 3,'o': 2,'r': 1,'w': 1});
  });
  it('countIt(\'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.\') should return [1,3]', function() {
    expect(countIt('The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.')).to.deep.equal({'a': 5,'b': 1,'c': 2,'d': 3,'e': 8,'f': 1,'g': 2,'h': 4,'i': 3,'j': 1,'k': 1,'l': 3,'m': 1,'n': 4,'o': 4,'p': 2,'q': 1,'r': 3,'s': 2,'t': 5,'u': 2,'v': 1,'w': 1,'x': 1,'y': 3,'z': 1});
  });
});