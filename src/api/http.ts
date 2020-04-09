import axios from "axios";
import { DEFAULT_API_BASE_URL, DEFAULT_HTTP_TIMEOUT } from "../constants";

export const http = axios.create({
  baseURL: DEFAULT_API_BASE_URL,
  timeout: DEFAULT_HTTP_TIMEOUT,
});
