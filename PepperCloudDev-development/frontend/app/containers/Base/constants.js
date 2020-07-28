
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'project/container/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'eprx/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'eprx/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'eprx/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';



//sidebars


export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOAD_MENU_REQUEST = 'LOAD_MENU_REQUEST';
export const LOAD_MENU_RESPONSE = 'LOAD_MENU_RESPONSE';


export const SIDEBAR_PAGE_REQUEST = 'SIDEBAR_PAGE_REQUEST';
export const SIDEBAR_PAGE_ERROR = 'SIDEBAR_PAGE_ERROR';
