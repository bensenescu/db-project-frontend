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

async function createTodo(todo, user) {
  try {
    const item = todo;
    item.studentId = user.studentId;
    const { data } = await axios.post(`${url}/calendar/todo`, item);
    return data;
  } catch (err) {
    return err;
  }
}

async function getTodos() {
  try {
    const { data } = await axios.get(`${url}/calendar/todo`);

    return data;
  } catch (err) {
    return err;
  }
}

async function deleteTodo(todo) {
  try {
    const { data } = await axios.delete(`${url}/calendar/todo/${todo.itemId}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function updateTodo(todo, user) {
  try {
    const item = todo;
    item.studentId = user.studentId;
    const { data } = await axios.put(`${url}/calendar/todo`, item);
    return data;
  } catch (err) {
    return err;
  }
}

async function getStudentTodos(student) {
  try {
    const { data } = await axios.get(`${url}/calendar/students/todoItems/${student.studentId}`);

    return data;
  } catch (err) {
    return err;
  }
}


async function enrollInSection(section, user) {
  try {
    const param = { section, user };
    const { data } = await axios.post(`${url}/calendar/students/enroll`, param);
    return data;
  } catch (err) {
    return err;
  }
}

async function addTeacherToSection(section, user) {
  try {
    const param = { section, user };
    const { data } = await axios.post(`${url}/calendar/professors/teaching`, param);
    return data;
  } catch (err) {
    return err;
  }
}

async function getProfessorSections(user) {
  try {
    const { data } = await axios.get(`${url}/calendar/professors/section/${user.professorId}`);
    return data.map((item) => ({
      sectionId: item.sectionId,
      courseId: item.courseId,
      blackboardUrl: item.blackboardUrl,
      meetingTimes: item.meetingTimes,
    }));
  } catch (err) {
    return err;
  }
}

async function addItemToSection(sectionId, item) {
  console.log('addItemToSection');
  try {
    const { data } = await axios.post(`${url}/calendar/sections/item`, { sectionId, item });
    return data;
  } catch (err) {
    return err;
  }
}

async function createCalendarItem(item) {
  try {
    const { data } = await axios.post(`${url}/calendar/calendarItems`, item);
    return data;
  } catch (err) {
    return err;
  }
}

async function getProfessorCalendarItems(user) {
  try {
    const { data } = await axios.get(`${url}/calendar/professors/calendarItems/${user.professorId}`);
    // eslint-disable-next-line arrow-body-style
    return data.map((item) => {
      return {
        itemId: item.itemId,
        sectionId: item.sectionId,
        itemName: item.itemName,
        description: item.description,
        itemType: item.itemType,
        dueDate: item.dueDate,
        fileUrl: item.fileUrl,
      };
    });
  } catch (err) {
    return err;
  }
}

async function updateCalendarItem(item) {
  try {
    const param = item;
    delete param.dueDate;
    const { data } = await axios.put(`${url}/calendar/calendarItems`, param);
    return data;
  } catch (err) {
    return err;
  }
}

async function deleteCalendarItem(item) {
  try {
    const { data } = await axios.delete(`${url}/calendar/calendarItems/${item.itemId}`);
    return data;
  } catch (err) {
    return err;
  }
}

async function getStudentSections(studentId) {
  try {
    const { data } = await axios.get(`${url}/calendar/students/sections/${studentId}`);
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
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
  getStudentTodos,
  enrollInSection,
  addTeacherToSection,
  getProfessorSections,
  addItemToSection,
  createCalendarItem,
  getProfessorCalendarItems,
  updateCalendarItem,
  deleteCalendarItem,
  getStudentSections,
};
