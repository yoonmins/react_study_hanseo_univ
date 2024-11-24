import axios from 'axios';

export const JWTServiesState = async () => {
  try {
    const response = await axios.get('http://localhost:3003/protected');
    console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.error('대시보드 통계 데이터 가져오기 실패:', error);
    return { user: [] }; 
  }
};

import axios from 'axios';

const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');

    try {
        const response = await axios.get('http://localhost:3003/protected', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Protected data:', response.data);
    } catch (error) {
        console.error('Error fetching protected data:', error);
    }
};

fetchProtectedData();