
import {
  CREATE_ELEMENT,
  EDIT_ELEMENT,
  DELETE_ELEMENT,
  SAVE_DATA,
  SAVE
} from './constants';


export function createElement(elementOptions) {
  return {
    type: CREATE_ELEMENT,elementOptions
  };
}


export function editElement() {
  return {
    type: EDIT_ELEMENT,
  };
}

export function deleteElement() {
  return {
    type: DELETE_ELEMENT,
  };
}

export function saveData() {
  return {
    type: SAVE_DATA,
  };
}

export function save() {
  return {
    type: SAVE,
  };
}
