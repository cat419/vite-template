import { initClient } from "@ts-rest/core";
import { gateway } from "./gateway";
import { API_URL } from "../constants";

export const api = initClient(gateway, {
    baseUrl: API_URL,
    baseHeaders: {}
})