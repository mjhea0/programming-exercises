var byteString = require('./byte-string.js');

describe('Byte String', function() {
  it('should show B format', function() {
    expect(byteString(1022)).toBe('1022.00 B');
  });

  it('should show KB format', function() {
    expect(byteString(10221)).toBe('9.98 KB');
  });

  it('should show MB format', function() {
    expect(byteString(1022932324)).toBe('975.54 MB');
  });

  it('should show GB format', function() {
    expect(byteString(1022932123237)).toBe('952.68 GB');
  });

  it('should show TB format', function() {
    expect(byteString(1022932453333234)).toBe('930.35 TB');
  });

  it('should show PB format', function() {
    expect(byteString(1022932453333234444)).toBe('908.55 PB');
  });

  it('should show EB format', function() {
    expect(byteString(1022932453333234444324)).toBe('887.25 EB');
  });

  it('should show ZB format', function() {
    expect(byteString(1022932453333234444324454)).toBe('866.46 ZB');
  });

  it('should show YB format', function() {
    expect(byteString(10243245333323444432445431)).toBe('8.47 YB');
  });

  it('should show YB format when number larger than 1024YB', function() {
    var result = byteString(232932453333234444324454333424324);
    expect(result).toBe('192677209.43 YB');
  });

});
