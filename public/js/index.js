let socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  // 仮想emailをサーバー側に送ってみたよ
  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hey, This is sola.'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newEmail', (email) => {
  console.log(`New email`, email);
});
