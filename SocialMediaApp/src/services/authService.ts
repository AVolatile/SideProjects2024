import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (user: { username: string, password: string }) => {
    await axios.post(`${API_URL}/register`, user);
};

const login = async (user: { username: string, password: string }) => {
    await axios.post(`${API_URL}/login`, user);
};

export default { register, login };
