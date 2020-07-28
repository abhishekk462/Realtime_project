/**
 *
 * Brudcrums
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Brudcrums extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);

        this.state = {elements: []};
    }

    render() {
           this.props.data.forEach((item,index) => {
            if (item.fieldDetail.labelFlag == 'Y') {
              labels.push(item);
            }
          });
        return ( 
                    <FormattedMessage {...messages.header} /> 
                );
    }
}

Brudcrums.propTypes = {

};

export default Brudcrums;
