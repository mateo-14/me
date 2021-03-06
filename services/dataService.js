import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/mateo-14/personal-web-data/main',
});

export function getProjects() {
  return axiosClient.get('portfolio/projects/data.json').then((res) => res.data);
}

export function getMarkdown(markdown) {
  return axiosClient.get(`markdowns/${markdown}.md`).then((res) => res.data);
}
