import axios from "axios";

const URL = "https://65f3003c105614e6549f87df.mockapi.io/";

export const getApiContacts = async () => {
  const { data } = await axios(`${URL}contacts`);
  return data;
};

export const postApiContact = async (data) => {
  return axios({
    method: "post",
    url: `${URL}contacts`,
    data,
  });
};
export const deleteApiContact = async (id) => {
  return axios({
    method: "delete",
    url: `${URL}contacts/${id}`,
  });
};
