import type { ApiResponse } from '@/types';
import axios from '@/utils/axios';

// Example API functions
export const exampleApi = {
  getData: async (): Promise<ApiResponse> => {
    const response = await axios.get('/example');
    return response.data;
  },

  postData: async (data: unknown): Promise<ApiResponse> => {
    const response = await axios.post('/example', data);
    return response.data;
  },
};
