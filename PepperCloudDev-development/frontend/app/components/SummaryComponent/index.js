/**
*
* SummaryComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SummaryComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        This is summary page
      </div>
    );
  }
}

SummaryComponent.propTypes = {

};

export default SummaryComponent;
