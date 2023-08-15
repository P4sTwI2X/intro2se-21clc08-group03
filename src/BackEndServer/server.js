const WebSocket = require('ws');

// Khởi tạo WebSocket server
// Lớp ClientThread
class ClientThread {
  constructor() {
    this.clients = [];
    this.server = new WebSocket.Server({ port: 8080 });
    this.clientCount = 0; //Số lượng client kết nối
    console.log('Server hearing connection...');

    // Sự kiện khi có kết nối mới từ client
    this.server.on('connection', (socket) => {
      console.log('Client connected');
       
      // Tăng số lượng client kết nối và gán số thứ tự cho client hiện tại
      this.clientCount++;
      const clientNumber = this.clientCount;

      // Tạo một ClientHandler mới cho client kết nối
      const clientHandler = new ClientHandler(socket, clientNumber);

      // Thêm ClientHandler vào danh sách clients
      this.clients.push(clientHandler);
    });
  }
}

// Lớp ClientHandler
class ClientHandler {
  constructor(socket, clientNumber) {
    this.socket = socket;
    this.clientNumber = clientNumber;

   // Sự kiện khi nhận được tin nhắn từ client
   this.socket.on('message', (data) => {
      // Chuyển đổi dữ liệu Buffer thành chuỗi
      const message = data.toString('utf8');
      console.log(`Received message from client ${this.clientNumber}:`, message);
      // Xử lý tin nhắn nhận được từ client
      this.processMessage(data);
    });

    // Sự kiện khi client đóng kết nối
    this.socket.on('close', () => {
      console.log(`Client ${this.clientNumber} disconnected`);

      // Xóa ClientHandler khỏi danh sách clients
      const index = clientThread.clients.indexOf(this);
      if (index > -1) {
        clientThread.clients.splice(index, 1);
      }
    });
  }

  // Phương thức xử lý tin nhắn từ client
  processMessage(data) {
    // Xử lý tin nhắn từ client ở đây
  }
}

// Tạo một ClientThread mới
const clientThread = new ClientThread();

// Hàm xử lý request từ client
function handleRequest(opCode, data, ws) {
  switch (opCode) {
    case 1: // Client request
      clientHandler(data, ws);
      break;
    case 2: // Shop request
      shopController(data, ws);
      break;
    case 3: // Article request
      articleController(data, ws);
      break;
    case 4: // Order request
      orderController(data, ws);
      break;
    case 5: // User request
      userController(data, ws);
      break;
    case 6: // Admin request
      adminController(data, ws);
      break;
    default:
      console.log('Invalid opCode');
  }
}

function clientHandler(data, ws) {
  // Xử lý các request từ client
 
}

function shopController(data, ws) {
  // Xử lý các request liên quan đến shop
}

function articleController(data, ws) {
  // Xử lý các request liên quan đến article
}

function orderController(data, ws) {
  // Xử lý các request liên quan đến order
}

function userController(data, ws) {
  // Xử lý các request liên quan đến user
}

function adminController(data, ws) {
  // Xử lý các request liên quan đến admin
}