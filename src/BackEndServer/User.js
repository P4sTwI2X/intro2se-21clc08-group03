const axios = require('axios');

const serverURL = 'http://localhost:9999'; // Thay đổi URL của server tại đây

async function signUp(user) {
  try {
    const signUpURL = `${serverURL}/users/signUp`;

    const response = await axios.post(signUpURL, user);
    console.log('Data sent:', response.data);
  } catch (error) {
    console.error('Error occurred during sign up:', error.response.data);
  }
}

async function signIn(user) {
  try {
    const signInURL = `${serverURL}/users/signIn`;

    const response = await axios.post(signInURL, user);
    console.log('Sign in successful');
    console.log('User data:', response.data);
  } catch (error) {
    console.error('Error occurred during sign in:', error.response.data);
  }
}

// Sử dụng hàm signUp để gửi yêu cầu đăng ký
const user = {
  userName: 'username',
  password: 'password',
  email: 'example@example.com',
  home: '123 ABC Street',
  phone: '1234567890',
  gender: 'female',
  dob: new Date('1990-01-01'),
  bankAccount: '123456789',
  type: 'regular',
};

const user2 = {
  userName: 'huy',
  password: 'huy',
}


signIn(user2);
