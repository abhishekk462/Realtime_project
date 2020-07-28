
/*
 * Actions describe changes of state in the Sidebar Container
 */

// We import constants to name our actions' type
import {
  TOGGLE_SIDEBAR,
  LOAD_MENU_REQUEST,
  LOAD_MENU_RESPONSE
} from './constants'


/**
 * Sets the form state
 * @param  {object} newLayoutState          The new layout of the page
 */
export function toggleSidebar (newLayoutState) {
  return {type: TOGGLE_SIDEBAR, newLayoutState}
}


export function loadMenus (newMenuState) {
  return {type: LOAD_MENU_REQUEST, newMenuState}
}


export function menusLoaded (menus) {
  return {type: LOAD_MENU_RESPONSE, menus}
}
