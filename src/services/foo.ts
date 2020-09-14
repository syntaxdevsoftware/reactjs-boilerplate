// example
import { get } from "./api";

const url = (endpoint: string) => `foo/${endpoint}`;

export const getFoo = () => get(url("some-endpoint"));
