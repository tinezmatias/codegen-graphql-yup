// CONSTANTS
import { TYPE_LIST, TYPE_NONULL, TYPE_NAMED, TYPE_STRINGS, TYPE_BOOLEAN, TYPE_NUMBERS, TYPE_INPUT } from "../types/graphqlTypes"

export const isArray = (kind: string) => kind === TYPE_LIST;
export const isRequired = (kind: string) => kind === TYPE_NONULL;
export const isType = (kind: string) => kind === TYPE_NAMED;

export const isRef = (kind: string) => kind.includes(TYPE_INPUT);
export const isBoolean = (kind: string) => kind === TYPE_BOOLEAN;
export const isString = (kind: string) => TYPE_STRINGS.includes(kind);
export const isNumber = (kind: string) => TYPE_NUMBERS.includes(kind);



