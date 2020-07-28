/*
 * Actions describe changes of state in the LeadEntry Container
 */

// We import constants to name our actions' type
import {
  LOAD_PAGE_REQUEST,
  LOAD_PAGE_RESPONSE,
  LOAD_PARAMS_REQUEST,
  LOAD_PARAMS_DONE,
  CHANGE_FORM,
  SENDING_REQUEST,
  CLEAR_ERROR,
  REQUEST_ERROR,
  SAVE_REQUEST,
  SAVE_RESPONSE,
  RECORD_LIST_LOAD_REQUEST,
  RECORD_LIST_LOAD_RESPONSE,
  FORM_TEMPLATE_CHANGE,
  FORM_TEMPLATE_CHANGE_RESPONSE,
  ADMIN_CUSTOMIZE_TOGGLE_ACTION,
  ADMIN_CUSTOMIZE_LAYOUT_CHANGE, ADMIN_CUSTOMIZE_LAYOUT_SAVE,
  ADMIN_CUSTOMIZE_NEW_TEMPLATE_ADD,ADMIN_CUSTOMIZE_NEW_TEMPLATE_NAME_CHANGE,
  ADMIN_CUSTOMIZE_FIELD_TYPES_LOAD,ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED,
  ADMIN_CUSTOMIZE_NEW_FIELD_ADD,
  ADMIN_CUSTOMIZE_NEW_SECTION_ADD
} from './constants';


export function loadForm(screenId){
  return {type: LOAD_PAGE_REQUEST, screenId}
}

export function initialFormLoaded(pageData){
  return {type: LOAD_PAGE_RESPONSE, pageData}
}

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState  The new change in the form
 */
export function changeForm (newFormState) {
  return {type:CHANGE_FORM, newFormState}
}

export function changeFormTemplate (formTemplate) {
  return {type: FORM_TEMPLATE_CHANGE, formTemplate}
}

export function formTemplateChaged (fieldsList) {
  return {type: FORM_TEMPLATE_CHANGE_RESPONSE, fieldsList}
}


export function loadParamValues(newParamState){
  return {type: LOAD_PARAMS_REQUEST, newParamState};
}


export function loadRecordData(screenId){
  return {type: RECORD_LIST_LOAD_REQUEST, screenId};
}

export function recordDataLoaded(newFormState){
  return {type: RECORD_LIST_LOAD_RESPONSE, newFormState};
}


export function paramValuesLoaded(newFormParams){
  return {type: LOAD_PARAMS_DONE, newFormParams};
}


/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest (sending) {
  return {type: SENDING_REQUEST, sending}
}


/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for saving the lead entry data
 */
export function saveForm (data) {
  return {type: SAVE_REQUEST, data};
}


export function saveFormRequestCompleted (serverResponse) {
  return {type: SAVE_RESPONSE, serverResponse}
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError (error) {
  return {type: REQUEST_ERROR, error}
}

/**
 * Sets the `error` state as empty
 */
export function clearError () {
  return {type: CLEAR_ERROR}
}


export function toggleAdminCustomizeState(customize){
  //toggle it
  customize = !customize;
  return {type: ADMIN_CUSTOMIZE_TOGGLE_ACTION,customize}
}

export function adminCustomizationLayoutChange(layout){
  return {type: ADMIN_CUSTOMIZE_LAYOUT_CHANGE, layout}
}

export function adminCustomizationTemplateSave(template){
  return {type:ADMIN_CUSTOMIZE_LAYOUT_SAVE,template }
}

export function showHideNewTemplateModal(newTemplateEnabled){
  return {type: ADMIN_CUSTOMIZE_NEW_TEMPLATE_ADD,newTemplateEnabled}
}

export function adminCustomizationNameChange(name){
  return {type:ADMIN_CUSTOMIZE_NEW_TEMPLATE_NAME_CHANGE,name}
}

export function adminCustomizationFieldTypeLoad(){
  return {type:ADMIN_CUSTOMIZE_FIELD_TYPES_LOAD};
}

export function adminCustomizationFieldTypeLoaded(fieldTypes){
  return {type:ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED,fieldTypes};
}

export function adminCustomizationNewFieldAdd(fields){
  return {type: ADMIN_CUSTOMIZE_NEW_FIELD_ADD, fields};
}

export function adminCustomizationNewSectionAdd(section){
  return {type: ADMIN_CUSTOMIZE_NEW_SECTION_ADD, section};
}

