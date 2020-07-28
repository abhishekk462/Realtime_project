/**
*
* ToolbarItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ToolbarItem(props) {
  return (
    <li onClick={props.onClick}><em className={props.data.icon}/>{props.data.name}</li>
  );
}

ToolbarItem.propTypes = {

};

export default ToolbarItem;
