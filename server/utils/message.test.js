let expect = require('expect');

let {generateMessage} = require('./message');
let {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Admin';
    let latitude = 1;
    let longitude = 1;
    let url = 'https://www.google.com/maps?q=1,1';
    let location = generateLocationMessage(from, latitude, longitude);

    expect(typeof location.createdAt).toBe('number');
    expect(location).toMatchObject({from, url});
  });
});
