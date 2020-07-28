/*
 *
 * Calendar actions
 *
 */

import {
  SAVE_EVENT
} from './constants';


/**
 * Tells the app we want to save event
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function saveEvent (data) {
  console.log('Save Event action', data);
  return {type: SAVE_EVENT, data}
}

