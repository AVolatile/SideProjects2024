import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getUserById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export default { getUserById };
