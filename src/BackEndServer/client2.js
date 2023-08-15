const WebSocket = require('ws');

// Sử dụng WebSocket trong mã của bạn
const socket = new WebSocket('ws://localhost:8080');

// Xử lý sự kiện khi kết nối được thiết lập
socket.onopen = function() {
  console.log('Kết nối WebSocket đã được thiết lập.');

  // Gửi opCode tới server
  const opCode = 'YOUR_OPCODE 2';
  socket.send(opCode);

  const message ='Hello server 2';
  socket.send(message);
};

// Xử lý sự kiện khi nhận được dữ liệu từ server
socket.onmessage = function(event) {
  const data = event.data;
  console.log('Nhận dữ liệu từ server:', data);
};

// Xử lý sự kiện khi kết nối bị đóng
socket.onclose = function(event) {
  console.log('Kết nối WebSocket đã bị đóng.');
};

// Xử lý sự kiện khi xảy ra lỗi
socket.onerror = function(error) {
  console.error('Lỗi kết nối WebSocket:', error);
};