import {type AppConfig } from "@types";
import axios from "axios";

export const loadAppConfig = async () => {
    const {data} = await axios.get<AppConfig>('/config.json');
    return data;
};