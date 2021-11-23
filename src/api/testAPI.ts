import { $http } from '@/plugins/ajax';

export const getTestAPI = async () => {
  const { data } = await $http.get('/api/config/list');
  return data;
};
