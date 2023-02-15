import axiosInstance from "./utils/axiosInstance";

// export const fetchUsers = () => {
//   return fetch("http://localhost:3001/users").then((response) =>
//     response.json()
//   );
// };

export const fetchAddTodo = async (obj) => {
  await axiosInstance.post("todos", obj);
};

export const fetchUpdateTodo = async (obj) => {
  await axiosInstance.put(`todos/${obj.id}`, obj);
};

export const fetchUpdatePatchTodo = async (obj) => {
  await axiosInstance.patch(`todos/${obj.id}`, obj);
};

export const fetchUsers = async () =>
  await axiosInstance.get("/users").then((response) => response.data);

export const fetchUser = () =>
  axiosInstance.get("/users/1").then((response) => response.data);

export const fetchTodos = () =>
  axiosInstance.get("/todos").then((response) => response.data);

export const fetchDeleteTodo = (id) => {
  return axiosInstance.delete(`/todos/${id}`);
};

export const fetchUsersByPageNumber = (number) =>
  axiosInstance.get(`/users?_page=${number}`).then((response) => response.data);

export const fetchUsersBySearch = (string) =>
  axiosInstance.get(`/users?q=${string}`).then((response) => response.data);

export const fetchUsersByParams = (page, limit) =>
  axiosInstance
    .get(`/users?_page=${page}&_limit=${limit}`)
    .then((response) => response.data);

// https://my-json-server.typicode.com/KhrystynaTest/develop/todos'
//http://localhost:3001/users?name=Ervin%20Howell // by name Ervin Howell
// http://localhost:3001/users?name_like=Gl // on current name field will be search

// http://localhost:3001/users?_sort=name // sorting
// http://localhost:3001/users?_sort=name&_order=asc

// http://localhost:3001/users/1/todos
