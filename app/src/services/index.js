import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/nameless`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchNames = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

export const fetchComment = async (id) => {
  const res = await axios.get(`${URL}/${id}`, config);
  return res.data;
};

export const newComment = async (id,fields) => {
  const res = await axios.post(`${URL}/${id}`, { fields }, config)
  return (res.data.fields)
}

export const editComment = async (id,fields) => {
  const res = await axios.put(`${URL}/${id}`, { fields }, config)
  return (res.data.fields)
}

export const deleteName = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data;
};
