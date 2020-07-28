import { fromJS } from 'immutable';

import {
  LOAD_PAGE_REQUEST,
  LOAD_PAGE_RESPONSE,
  CHANGE_FORM,
  SENDING_REQUEST,
  CLEAR_ERROR,
  REQUEST_ERROR,
  SAVE_REQUEST,
  SAVE_RESPONSE,
  LOAD_PARAMS_DONE,
  RECORD_LIST_LOAD_RESPONSE,
  FORM_TEMPLATE_CHANGE,FORM_TEMPLATE_CHANGE_RESPONSE,ADMIN_CUSTOMIZE_TOGGLE_ACTION,
  ADMIN_CUSTOMIZE_LAYOUT_CHANGE,ADMIN_CUSTOMIZE_NEW_TEMPLATE_ADD,ADMIN_CUSTOMIZE_NEW_TEMPLATE_NAME_CHANGE,
  ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED,ADMIN_CUSTOMIZE_NEW_FIELD_ADD,
  ADMIN_CUSTOMIZE_NEW_SECTION_ADD
} from './constants';

// The initial state of the App
const initialState = fromJS({
  pageData : {layout:{'id':1}},
  customize:false,
  facebookProfiles:[],
  layout:{},
  socialMatchFound:false,
  socialData:{},
  formTemplateName:'',
  formState:{},
  newTemplateEnabled:false,
  newTemplateName:'000',
  newSectionAddRequest:false,
  serverResponse:{}
});

function leadEntryReducer(state = initialState, action) {

  //console.log(state);


  switch (action.type) {

    case LOAD_PAGE_RESPONSE:
      // console.log({...state, formState: action.newFormState});
      console.log('page data received is',action.pageData);
      return state.set('pageData', fromJS(action.pageData));

    case CHANGE_FORM:
      console.log('new form state',action.newFormState);
      for (let obj in action.newFormState){
        return state.setIn(['formState',obj],action.newFormState[obj]);
      }
    //{...state, formState: Object.assign({},state.formState,action.newFormState )};

    case SAVE_REQUEST:
      return state.set('saved',action.newFromState);//{...state, saved: action.newFromState};

    case SAVE_RESPONSE:
        console.log('response is,,..', action);
      return state.set('serverResponse',action.serverResponse);//{...state, serverResponse: action.serverResponse};

    case SENDING_REQUEST:
      return state.set('sending', true);//{...state, currentlySending: action.sending};

    case REQUEST_ERROR:
      return state.set('error',action.error);//{...state, error: action.error};

    case CLEAR_ERROR:
      return state.set('error','');//{...state, error: ''};

    case LOAD_PARAMS_DONE:

        //console.log('data received', {...state, formParams: action.newFormParams});
      return state.set('formParams',action.newFormParams);//{...state, formParams: action.newFormParams};

    case RECORD_LIST_LOAD_RESPONSE:

      //console.log('data received', {...state, recordData: action.newFormState});
      return state.set('recordData',action.newFormState);//{...state, recordData: action.newFormState};

    case FORM_TEMPLATE_CHANGE:

      return state.set('formTemplateName',action.formTemplate.templateId);

    case FORM_TEMPLATE_CHANGE_RESPONSE:

      console.log('data received', state, action);
      return state
        .set('loading', false)
        .set('error', false)
        .setIn(['pageData', 'fieldsList'], action.fieldsList);

    case ADMIN_CUSTOMIZE_TOGGLE_ACTION:
      return state.set('customize',action.customize);


    case ADMIN_CUSTOMIZE_LAYOUT_CHANGE:
      console.log('looo',action.layout);

      return state.setIn(['layout',action.layout.id],action.layout);

    case ADMIN_CUSTOMIZE_NEW_TEMPLATE_ADD:
      return state.set('newTemplateEnabled',action.newTemplateEnabled);

    case ADMIN_CUSTOMIZE_NEW_TEMPLATE_NAME_CHANGE:
      return state.set('newTemplateName',action.name);


    case ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED:
      return state.set('fieldTypes',action.fieldTypes);

    case ADMIN_CUSTOMIZE_NEW_FIELD_ADD:
      return state.setIn(['pageData', 'fieldsList'], action.fields);

    case ADMIN_CUSTOMIZE_NEW_SECTION_ADD:
        console.log("new section add request", action);
      return state.set('newSectionAddRequest',action.section);

    default:
      //console.log('nothing here',action);
      return state;

  }

return state;
}


export default leadEntryReducer;
