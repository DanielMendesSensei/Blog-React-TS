import axios, { AxiosInstance } from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com";

// Not needed until optimistic UI updates example
export const delay = (time: number): Promise<unknown> =>
  new Promise<void>((res) => setTimeout(() => res(), time * 1000));

const useBlogFetch: AxiosInstance = axios.create({
  baseURL: `${BASEURL}`,
  headers: {
    "Content-Type": "application/json",
    // "Authorization" : `Bearer ${token}`,
  },
});

export default useBlogFetch;
