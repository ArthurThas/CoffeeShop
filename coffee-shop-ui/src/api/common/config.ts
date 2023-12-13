import {type AppConfig } from "@types";
import axios from "axios";

export const loadAppConfig = async () => {
    const {data} = await axios.get<AppConfig>('/appConfig.json');
    return data;
};