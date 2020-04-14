import axios from 'axios';

const url = 'http://localhost:3000/api';

async function getSections() {
  try {
    const { data } = await axios.get(`${url}/calendar/sections`);

    return data;
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

async function getStudents() {
  try {
    const { data } = await axios.get(`${url}/calendar/students`);
    return data;
  } catch (err) {
    return err;
  }
}

async function updateStudent(student) {
  try {
    console.log(student);
    const { data } = await axios.put(`${url}/calendar/students`, student);
    return data;
  } catch (err) {
    return err;
  }
}

async function deleteStudent(student) {
  try {
    const { data } = await axios.delete(`${url}/calendar/students/${student.email}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function updateSection(section) {
  try {
    const { data } = await axios.put(`${url}/calendar/sections`, section);
    return data;
  } catch (err) {
    return err;
  }
}

async function deleteSection(section) {
  try {
    const { data } = await axios.delete(`${url}/calendar/sections/${section.sectionId}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function getStudentCalendarItems(studentId) {
  try {
    const { data } = await axios.get(`${url}/calendar/students/calendarItems/${studentId}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function createLabel(label) {
  try {
    const { data } = await axios.post(`${url}/calendar/labels`, label);
    return data;
  } catch (err) {
    return err;
  }
}

async function getLabels() {
  try {
    const { data } = await axios.get(`${url}/calendar/labels`);
    return data;
  } catch (err) {
    return err;
  }
}

async function deleteLabel(label) {
  try {
    const { data } = await axios.delete(`${url}/calendar/labels/${label.labelId}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function updateLabel(label) {
  try {
    const { data } = await axios.put(`${url}/calendar/labels`, label);
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
  getStudents,
  deleteStudent,
  updateStudent,
  updateSection,
  deleteSection,
  getStudentCalendarItems,
  createLabel,
  getLabels,
  updateLabel,
  deleteLabel,
};
