import axios from 'axios';

export const fetchDashboardStats = async () => {
  try {
    const response = await axios.get('http://localhost:3003/api/sample');
    console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.error('대시보드 통계 데이터 가져오기 실패:', error);
    return { id:0, name: null }; 
  }
};