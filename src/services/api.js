import axios from 'axios';

const url = 'http://localhost:3000/api';

async function getSections() {
  try {
    const sections = await axios.get(`${url}/calendar/sections`);

    return sections;
  } catch (err) {
    return err;
  }
}

async function createSection(section) {
  try {
    const { data } = await axios.post(`${url}/calendar/sections`, section);
    return data;
  } catch (err) {
    return err;
  }
}

async function createUser(user) {
  try {
    const { data } = await axios.post(`${url}/calendar/users`, user);
    return data;
  } catch (err) {
    return err;
  }
}

async function getUser(email) {
  try {
    console.log(email);
    const { data } = await axios.get(`${url}/calendar/users/${email}`);
    return data;
  } catch (err) {
    return err;
  }
}

export default {
  getSections,
  createSection,
  createUser,
  getUser,
};
