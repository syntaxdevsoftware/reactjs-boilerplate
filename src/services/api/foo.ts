// example
import { get } from "./";

const url = (endpoint: string) => `[some base endpoint like users]/${endpoint}`;

export const getFoo = () => get(url("some-endpoint"));
