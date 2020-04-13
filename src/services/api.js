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

async function createStudent(user) {
  try {
    const { data } = await axios.post(`${url}/calendar/students`, user);
    return data;
  } catch (err) {
    return err;
  }
}

async function getStudent(email) {
  try {
    const { data } = await axios.get(`${url}/calendar/students/${email}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function createProfessor(user) {
  try {
    const { data } = await axios.post(`${url}/calendar/professors`, user);
    return data;
  } catch (err) {
    return err;
  }
}

async function getProfessor(email) {
  try {
    const { data } = await axios.get(`${url}/calendar/professors/${email}`);
    return data;
  } catch (err) {
    return err;
  }
}

export default {
  getSections,
  createSection,
  createStudent,
  getStudent,
  createProfessor,
  getProfessor,
};
