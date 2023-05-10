import axios from 'axios';

axios.defaults.baseURL = API_ADDRESS;

export default {
  getTasks: async () => {
    const result = await axios.get(`${axios.defaults.baseURL}/items`);
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post(`${axios.defaults.baseURL}/addTask`, {  name, isComplete: false, })
    console.log('addTask', result)

    return {};
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`${axios.defaults.baseURL}/completeTask/${id}` )
    console.log('setCompleted', result)
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`${axios.defaults.baseURL}/${id}`)
  }
};
