import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export const getTodos = () => axios.get("api/todo/");

export const putTodos = (params: { id: string; title: string }) =>
  axios.put("api/todo/", params);

export const postTodos = (params: { title: string }) =>
  axios.post("api/todo/", params);

export const deleteTodos = (params: { id: string }) =>
  axios.delete("api/todo/", {
    data: params,
  });
