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

export default {
  getSections,
};
