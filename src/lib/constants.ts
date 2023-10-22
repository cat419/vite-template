export const IS_DEV = process.env.NODE_ENV === "development"

export const API_URL = IS_DEV ? "http://localhost:3000" : "https://api.example.com"