import axios from 'axios';

const API = axios.create({
  // Replace this with your actual backend URL
  baseURL: 'http://127.0.0.1:8000/', 
  timeout: 10000, // Optional: timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  }
});

export default API;