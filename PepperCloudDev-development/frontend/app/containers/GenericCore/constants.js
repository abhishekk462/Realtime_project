/*
 * LeadEntryConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'componentName' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'app/container/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FORM = 'app/Container/GenericCore/CHANGE_FORM';
export const SENDING_REQUEST = 'app/Container/GenericCore/SENDING_REQUEST';

export const SAVE_REQUEST = 'app/Container/GenericCore/SAVE_REQUEST';
export const SAVE_RESPONSE = 'app/Container/GenericCore/SAVE_RESPONSE';

export const REQUEST_ERROR = 'app/Container/GenericCore/REQUEST_ERROR';
export const CLEAR_ERROR = 'app/Container/GenericCore/CLEAR_ERROR';

export const LOAD_PARAMS_REQUEST = 'app/Container/GenericCore/LOAD_PARAMS_REQUEST';
export const LOAD_PARAMS_DONE = 'app/Container/GenericCore/LOAD_PARAMS_DONE';

export const LOAD_PAGE_REQUEST = "app/Container/GenericCore/LOAD_PAGE_REQUEST";
export const LOAD_PAGE_RESPONSE = "app/Container/GenericCore/LOAD_PAGE_RESPONSE";


export const RECORD_LIST_LOAD_REQUEST = "app/Container/GenericCore/RECORD_LIST_LOAD_REQUEST";
export const RECORD_LIST_LOAD_RESPONSE = "app/Container/GenericCore/RECORD_LIST_LOAD_RESPONSE";


export const FORM_TEMPLATE_CHANGE = "app/Container/GenericCore/FORM_TEMPLATE_CHANGE";
export const FORM_TEMPLATE_CHANGE_RESPONSE = "app/Container/GenericCore/FORM_TEMPLATE_CHANGE_RESPONSE";

export const ADMIN_CUSTOMIZE_TOGGLE_ACTION = "app/Container/GenericCore/ADMIN_CUSTOMIZE_TOGGLE_ACTION";

export const ADMIN_CUSTOMIZE_LAYOUT_CHANGE = "app/Container/GenericCore/ADMIN_CUSTOMIZE_LAYOUT_CHANGE";

export const ADMIN_CUSTOMIZE_LAYOUT_SAVE = "app/Container/GenericCore/ADMIN_CUSTOMIZE_LAYOUT_SAVE";


export const ADMIN_CUSTOMIZE_NEW_TEMPLATE_ADD = "app/Container/GenericCore/ADMIN_CUSTOMIZE_NEW_TEMPLATE_ADD";
export const ADMIN_CUSTOMIZE_NEW_TEMPLATE_NAME_CHANGE = "app/Container/GenericCore/ADMIN_CUSTOMIZE_NEW_TEMPLATE_NAME_CHANGE";


export const ADMIN_CUSTOMIZE_FIELD_TYPES_LOAD = "app/Container/GenericCore/ADMIN_CUSTOMIZE_FIELD_TYPES_LOAD";
export const ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED = "app/Container/GenericCore/ADMIN_CUSTOMIZE_FIELD_TYPES_LOADED";


export const ADMIN_CUSTOMIZE_NEW_FIELD_ADD = "app/Container/GenericCore/ADMIN_CUSTOMIZE_NEW_FIELD_ADD";
export const ADMIN_CUSTOMIZE_NEW_SECTION_ADD = "app/Container/GenericCore/ADMIN_CUSTOMIZE_NEW_SECTION_ADD";
