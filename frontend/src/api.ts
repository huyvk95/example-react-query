import axios from "axios";
import { TodoType } from "./types";

axios.defaults.baseURL = "http://localhost:3001/";

export const getTodos = () => axios.get<TodoType[]>("api/todo/");

export const putTodos = (params: { id: string; title: string }) =>
  axios.put<TodoType>("api/todo/", params);

export const postTodos = (params: { title: string }) =>
  axios.post<TodoType>("api/todo/", params);

export const deleteTodos = (params: { id: string }) =>
  axios.delete("api/todo/", {
    data: params,
  });
