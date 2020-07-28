import React from 'react'

function ErrorMessage (props) {
  return (
    <div className='form__error-wrapper js-form__err-animation'>
      <p className='alert alert-danger'>
        {props.error}
      </p>
    </div>
  )
}

ErrorMessage.propTypes = {
  error: React.PropTypes.string
};

export default ErrorMessage
