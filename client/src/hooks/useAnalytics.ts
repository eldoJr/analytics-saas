import axios from 'axios';
import { AnalyticsData } from '../types/analytics';

export const useAnalytics = () => {
  const fetchData = async (): Promise<AnalyticsData> => {
    const response = await axios.get('http://localhost:3001/api/analytics');
    return response.data;
  };

  return { fetchData };
};