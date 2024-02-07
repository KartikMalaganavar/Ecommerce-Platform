import axios from "axios"

const LOCALHOST = "http://localhost:5454"
const RENDER_DEPLOYED = "https://ecommerce-platform-kartik-malaganavar.onrender.com"

export const API_BASE_URL = RENDER_DEPLOYED; 

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        "Authorization" : `Bearer ${jwt}`,
        'Content-Type' : "application/json"
    }
})

