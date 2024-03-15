import axios from "axios";

export const getApiContacts = async () => {
  const { data } = await axios(
    `https://65f3003c105614e6549f87df.mockapi.io/contacts`
  );
  return data;
};

export const postApiContact = async (data) => {
  axios({
    method: "post",
    url: `https://65f3003c105614e6549f87df.mockapi.io/contacts`,
    data,
  });
};
export const deleteApiContact = async (id) => {
  axios({
    method: "delete",
    url: `https://65f3003c105614e6549f87df.mockapi.io/contacts/${id}`,
  });
};
