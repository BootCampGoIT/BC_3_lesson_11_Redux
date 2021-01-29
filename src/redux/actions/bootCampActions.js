import { v4 as uuidv4 } from "uuid";
import {
  ADDNEWCAMP,
  DELETECAMP,
  SETALERT,
  SETFILTER,
} from "../constants/bootCampConstants";

export const addNewCamp = (data) => ({
  type: ADDNEWCAMP,
  payload: { ...data, id: uuidv4() },
});

export const deleteCamp = (id) => ({
  type: DELETECAMP,
  payload: id,
});

export const setFilter = (value) => ({
  type: SETFILTER,
  payload: value,
});
export const setAlert = () => ({
  type: SETALERT,
});
