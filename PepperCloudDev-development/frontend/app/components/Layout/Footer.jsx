import React from 'react';

import auth from 'containers/Login/authService';

class Footer extends React.Component {


    render() {

      if(!auth.loggedIn()){
        return (
          <div className="hidden">Not Logged In</div>
        );
      }else
        return (
            <footer>
                <span>&copy; 2017 - Pepper cloud pte ltd Singapore</span>
            </footer>
        );
    }

}

export default Footer;
