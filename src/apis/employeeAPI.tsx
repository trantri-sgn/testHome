import axiosClient from "./axiosClients";

const employeeAPI = {
  getAll() {
    const url = "/fake";
    return axiosClient.get(url);
  },
  postAll(data: any) {
    const url = "/fake";
    return axiosClient.post(url,data);
  },
};

export default employeeAPI;
