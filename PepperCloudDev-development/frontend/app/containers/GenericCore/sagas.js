import {browserHistory} from 'react-router';
import { take,call, put, select, cancel, takeLatest,takeEvery } from 'redux-saga/effects';
import {
  CHANGE_FORM,
  SENDING_REQUEST,
  CLEAR_ERROR,
  REQUEST_ERROR,
  SAVE_REQUEST,
  LOAD_PARAMS_REQUEST,
  LOAD_PARAMS_DONE,
  LOAD_PAGE_REQUEST,
  LOAD_PAGE_RESPONSE,
  RECORD_LIST_LOAD_REQUEST,
  FORM_TEMPLATE_CHANGE,ADMIN_CUSTOMIZE_LAYOUT_SAVE,
  ADMIN_CUSTOMIZE_FIELD_TYPES_LOAD,
  ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED
} from './constants';

import {
  paramValuesLoaded,initialFormLoaded, recordDataLoaded,formTemplateChaged,
  adminCustomizationFieldTypeLoaded,saveFormRequestCompleted,changeFormTemplate,
  loadRecordData
} from './actions';

import coreService from 'services/coreService';
import service from './genericCoreService';

/**
 * Root saga manages watcher lifecycle
 */
export function* getLeadList() {


  // Suspend execution until location changes
  yield take("LOCATION_CHANGE");

}


function * loadFormInternal(request){
  console.log('request is ', request);
  let screenId = request.screenId;

  // We tell Redux we're in the middle of a request
  yield put({type: SENDING_REQUEST, sending: true});

  try {

    let response = yield call(coreService.loadForm, screenId);

    // ...we send Redux appropriate actions
    yield put(initialFormLoaded(response));

    console.log(10,response.links);

    let dataLink = response.links.filter((link) => link.linkType==='D');


      if(!!dataLink && dataLink.length > 0) {
        let link = dataLink[0];
        console.log(110, link);

        // this.props.dispatch(loadRecordData(screenData.dataScreenId));
        yield put(loadRecordData(link.linkScreenId));

        //let records = yield call(service.loadRecords, link.linkScreenId);
        //console.log('got it', response);
        // ...we send Redux appropriate actions
        //yield put(recordDataLoaded(records));
        console.log(12);
      }




    console.log(100, "loading template data",response.templates);
    if(!!response.templates && response.templates.length >0 ){

      const template = response.templates[0];
      console.log("100-1", template);
      yield put(changeFormTemplate({templateId: template.id}));

    }




  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});

  } finally {
    yield put({type: SENDING_REQUEST, sending: false});
  }
}

export function* loadInitialForms(){

  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
 // while (true) {

    // And we're listening for `LOAD_PAGE_REQUEST` actions and destructuring its payload

      yield takeEvery(LOAD_PAGE_REQUEST, loadFormInternal);


 // }

}



export function* getParamValues(){

  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
 // while (true) {

    // And we're listening for `LOAD_PARAMS` actions and destructuring its payload
    let request = yield take(LOAD_PARAMS_REQUEST);

    console.log('request is ', request);
    let {key} = request.newParamState;

    // We tell Redux we're in the middle of a request
    yield put({type: SENDING_REQUEST, sending: true});

    try {

      let response = yield call(coreService.paramValues, key);
      //console.log('rrr is', response);
      // ...we send Redux appropriate actions
      yield put(paramValuesLoaded(response));
     // yield put({type: LOAD_PARAMS_DONE, newFormParams: response});

    } catch (error) {
      yield put({type: REQUEST_ERROR, error: error.message});

    } finally {
      yield put({type: SENDING_REQUEST, sending: false});
    }
 // }

}

function* saveFormInternal(request){
  console.log('save actions has been listen',request);
  // We tell Redux we're in the middle of a request
  yield put({type: SENDING_REQUEST, sending: true});

  try {

    let response = yield call(service.saveForm, request.data);
    //console.log('got response',response);
    // ...we send Redux appropriate actions
    yield put(saveFormRequestCompleted(response));


  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});

  } finally {
    yield put({type: SENDING_REQUEST, sending: false});
   // browserHistory.push('/');
  }
}

export function* saveEntryForms(){

  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
 // while (true) {

    // And we're listening for `SAVE_REQUEST` actions and destructuring its payload
    let request = yield takeEvery(SAVE_REQUEST,saveFormInternal);


 // }

}


function* getScreenRecordsInternal(screenId){

  console.log('loading records for', screenId);
// We tell Redux we're in the middle of a request
  yield put({type: SENDING_REQUEST, sending: true});

  try {

    let response = yield call(service.loadRecords, screenId);
    //console.log('got it', response);
    // ...we send Redux appropriate actions
    yield put(recordDataLoaded(response));
    // yield put({type: LOAD_PARAMS_DONE, newFormParams: response});

  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});

  } finally {
    yield put({type: SENDING_REQUEST, sending: false});
  }
}


export function* getScreenRecords(){


    // And we're listening for `LOAD_PARAMS` actions and destructuring its payload
    let request = yield take(RECORD_LIST_LOAD_REQUEST);

    console.log('request is ', request);
    let {screenId} = request;

    // We tell Redux we're in the middle of a request
    yield put({type: SENDING_REQUEST, sending: true});

    try {

      let response = yield call(service.loadRecords, screenId);
      //console.log('got it', response);
      // ...we send Redux appropriate actions
      yield put(recordDataLoaded(response));
      // yield put({type: LOAD_PARAMS_DONE, newFormParams: response});

    } catch (error) {
      yield put({type: REQUEST_ERROR, error: error.message});

    } finally {
      yield put({type: SENDING_REQUEST, sending: false});
    }


}



export function* handleFormTemplateChangeInternal(request){

  console.log('template changed is', request);
  const {templateId} = request.formTemplate;

  try {

    let response = yield call(service.loadTemplateContent, templateId);
    console.log('got it', response);
    // ...we send Redux appropriate actions
    yield put(formTemplateChaged(response));


  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});

  } finally {
    yield put({type: SENDING_REQUEST, sending: false});
  }


}

export function* handleFormTemplateChange() {
  yield takeEvery(FORM_TEMPLATE_CHANGE,handleFormTemplateChangeInternal);
}


function* handleFormTemplateSaveActionInternal(request){
  console.log('template save request',request);
  const {template} = request;
  try{
    let response = yield call(service.saveTemplateDetails, template);
    console.log('response received by server', response);

  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});

  } finally {
    yield put({type: SENDING_REQUEST, sending: false});
  }
}

export function* handleFormTemplateSaveAction(){
  yield takeEvery(ADMIN_CUSTOMIZE_LAYOUT_SAVE,handleFormTemplateSaveActionInternal);
}

export function* getFieldTypes(){

  yield take(ADMIN_CUSTOMIZE_FIELD_TYPES_LOAD);


  try {

    let response = yield call(service.loadFieldTypes);
    //console.log('got it', response);
    // ...we send Redux appropriate actions
    yield put(adminCustomizationFieldTypeLoaded(response));
    // yield put({type: LOAD_PARAMS_DONE, newFormParams: response});

  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});

  }

}


// Bootstrap sagas
export default [
  getLeadList,getParamValues,loadInitialForms,saveEntryForms,getScreenRecords,
  handleFormTemplateChange,handleFormTemplateSaveAction,getFieldTypes
];
