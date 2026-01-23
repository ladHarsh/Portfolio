import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "" : "https://portfolio-besy.onrender.com");


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Projects API
export const projectsApi = {
  getAll: async (params = {}) => {
    const response = await api.get("/api/projects", { params });
    return response.data;
  },

  getBySlug: async (slug) => {
    const response = await api.get(`/api/projects/${slug}`);
    return response.data;
  },

  getFeatured: async () => {
    const response = await api.get("/api/projects", { params: { featured: true } });
    return response.data;
  },

  getByCategory: async (category) => {
    const response = await api.get("/api/projects", { params: { category } });
    return response.data;
  },
};

// Contact API
export const contactApi = {
  submit: async (data) => {
    const response = await api.post("/api/contact", data);
    return response.data;
  },
};


export default api;
