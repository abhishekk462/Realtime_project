/*
 *
 * Company
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectCompany from './selectors';
import messages from './messages';
import NewBrudcrumModel from "../../components/Brudcrums/NewBrudcrumModel";
import {Input,Tabs,TabsPanel,Button,textarea} from '@salesforce/design-system-react';
import {Grid, Row} from "react-bootstrap";


export class Company extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {pageTitle: 'CREATE NEW COMPANY', elements: [{'name': 'Home', 'url': '/', 'status': 'inactive'}, {'name': 'Company', 'url': '/page/s102', 'status': 'inactive'}, {'name': 'Profile', 'url': 'javascript:void(0)', 'status': 'active'}]};

    }

    render() {
    return (
      <div>
        <Helmet
          title="Company"
          meta={[
            { name: 'description', content: 'Description of Company' },
          ]}
        />
          <Grid>
              <NewBrudcrumModel { ...this.props}
                                name={this.state.pageTitle}
                                data={this.state.elements}
              />


              <Row className="show-grid">
                  <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
                      <legend className="slds-page-header">Primary information
                          {/*new code start*/}
                          <fieldset className="slds-form-element">

                          <form className="slds-form--inline">
                              <div className="slds-form-element">
                                  <label className="slds-form-element__label" htmlFor="name">Company Name</label>
                                  <div className="slds-form-element__control slds-m-left_large">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>

                              <div className="slds-form-element slds-m-left_xx-large">
                                  <label className="slds-form-element__label" htmlFor="email">Company Logo</label>
                                  <div className="slds-form-element__control">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>
                          </form>
                          <form className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large">
                                  <label className="slds-form-element__label" htmlFor="name">Registration Number</label>
                                  <div className="slds-form-element__control ">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>


                          </form>

                          <div className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large ">
                                  <label className="slds-form-element__label" htmlFor="name">Currency</label>
                                  <div className="slds-form-element__control slds-m-left_xx-large  slds-p-left_x-small">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>

                              <div className="slds-form--inline">
                                  <div className="slds-form-element slds-m-top_large ">
                                      <label className="slds-form-element__label" htmlFor="name">Language</label>
                                      <div className="slds-form-element__control slds-m-left_x-large  slds-p-left_large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                              <div className="slds-form--inline">
                                  <div className="slds-form-element slds-m-top_large">
                                      <label className="slds-form-element__label" htmlFor="name">Time Zone</label>
                                      <div className="slds-form-element__control slds-m-left_xx-large  slds-p-left_x-small">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>
                                  </div>
                                  <div className="slds-form-element slds-m-top_large">
                                      <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">Company Description</label>
                                      <div className="slds-form-element__control">
                                          <textarea className=" form-control form-rounded" rows="1"></textarea>
                                      </div>
                                  </div>

                          </div>
                          <div className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large">
                                  <label className="slds-form-element__label" htmlFor="name">Office Phone</label>
                                  <div className="slds-form-element__control slds-m-left_small slds-p-left_x-large">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>


                          </div>
                          <div className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large">
                                  <label className="slds-form-element__label" htmlFor="name">Fax</label>
                                  <div className="slds-form-element__control slds-m-left_xx-large slds-p-left_xx-large">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>


                          </div>
                          <div className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large">
                                  <label className="slds-form-element__label" htmlFor="name">Website</label>
                                  <div className="slds-form-element__control slds-m-left_x-large slds-p-left_x-large">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>


                          </div>
                          <div className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large">
                                  <label className="slds-form-element__label" htmlFor="name">Email</label>
                                  <div className="slds-form-element__control slds-m-left_x-large slds-p-left_xx-large">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div>


                          </div>



                          </fieldset>



                              {/*old code*/}



                      </legend>
                  </section>
                  {/*billing address*/}
                  <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
                      <legend className="slds-page-header">Billing Address



                          <fieldset className="slds-form-element">


                              <div className="slds-form--inline">
                                  <div className="slds-form-element ">
                                      <label className="slds-form-element__label" htmlFor="name">Address</label>
                                      <div className="slds-form-element__control slds-m-left_x-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>


                                      <div className="slds-form-element">
                                          <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">Postal Code</label>
                                          <div className="slds-form-element__control slds-m-left_large">
                                              <input id="name" className="slds-input" type="text"/>
                                          </div>
                                      </div></div></div>

                              <div className="slds-form--inline">
                                  <div className="slds-form-element slds-m-top_large">
                                      <label className="slds-form-element__label" htmlFor="name">City</label>
                                      <div className="slds-form-element__control slds-m-left_xx-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>


                                      <div className="slds-form-element">
                                          <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">Country</label>
                                          <div className="slds-form-element__control slds-m-left_xx-large">
                                              <input id="name" className="slds-input" type="text"/>
                                          </div>
                                      </div></div></div>
                              <div className="slds-form--inline">
                              <div className="slds-form-element slds-m-top_large">
                                  <label className="slds-form-element__label" htmlFor="name">State/Province</label>
                                  <div className="slds-form-element__control">
                                      <input id="name" className="slds-input" type="text"/>
                                  </div>
                              </div></div>





                          </fieldset>





                      </legend>
                  </section>
                  {/*billing address end*/}
                  <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
                      <legend className="slds-page-header">Shipping Address


                          <fieldset className="slds-form-element ">


                              <div className="slds-form--inline">
                                  <div className="slds-form-element ">
                                      <label className="slds-form-element__label" htmlFor="name">Address</label>
                                      <div className="slds-form-element__control slds-m-left_x-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>


                                      <div className="slds-form-element">
                                          <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">Postal Code</label>
                                          <div className="slds-form-element__control slds-m-left_large">
                                              <input id="name" className="slds-input" type="text"/>
                                          </div>
                                      </div></div></div>

                              <div className="slds-form--inline">
                                  <div className="slds-form-element slds-m-top_large">
                                      <label className="slds-form-element__label" htmlFor="name">City</label>
                                      <div className="slds-form-element__control slds-m-left_xx-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>


                                      <div className="slds-form-element">
                                          <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">Country</label>
                                          <div className="slds-form-element__control slds-m-left_xx-large">
                                              <input id="name" className="slds-input" type="text"/>
                                          </div>
                                      </div></div></div>
                              <div className="slds-form--inline">
                                  <div className="slds-form-element slds-m-top_large">
                                      <label className="slds-form-element__label" htmlFor="name">State/Province</label>
                                      <div className="slds-form-element__control">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>
                                  </div></div>




                          </fieldset>





                      </legend>
                  </section>
                  <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
                      <legend className="slds-page-header">Other Information



                          <fieldset className="slds-form-element">

                              <div className="slds-form--inline">
                                  <div className="slds-form-element">
                                      <label className="slds-form-element__label" htmlFor="name">Fiscal Year</label>
                                      <div className="slds-form-element__control slds-m-left_x-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>
                                  </div>
                                  <div className="slds-form-element slds-m-left_large ">
                                      <label className="slds-form-element__label" htmlFor="name">Business Day</label>
                                      <div className="slds-form-element__control slds-m-left_x-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>
                                  </div>
                                  <div className="slds-form-element slds-m-left_xx-large">
                                      <label className="slds-form-element__label" htmlFor="name">To</label>
                                      <div className="slds-form-element__control slds-m-left_x-large">
                                          <input id="name" className="slds-input" type="text"/>
                                      </div>
                                  </div>
                              </div>

                              <div className="slds-form slds-form_compound">

                                  <div className="slds-form-element__group">

                                      <div className="slds-form-element__row slds-m-top_large">
                                          <div className="slds-form--inline">


                                              <label className="slds-form-element__label"
                                                     htmlFor="input-01">Start</label>

                                             <table className="slds-table slds-table_cell-buffer">

                                                  <td data-label="Confidence">
                                                      <div className="slds-border--left slds-border--right slds-truncate slds-table_bordered" title="1">1</div>
                                                  </td>
                                                  <td data-label="Amount">
                                                      <div className="slds-truncate slds-table_bordered" title="April">April</div>
                                                  </td>
                                             </table>
                                          </div>
                                          <div className="slds-form--inline">

                                              <label className="slds-form-element__label slds-m-left_large"
                                                     htmlFor="input-01">End</label>
                                              <table className="slds-table slds-table_cell-buffer ">
                                                  <td data-label="Confidence">
                                                      <div className="slds-truncate slds-table_bordered" title="31">31</div>
                                                  </td>
                                                  <td data-label="Amount">
                                                      <div className="slds-truncate slds-table_bordered " title="March">March</div>
                                                  </td>

                                              </table>
                                          </div>
                                          <div className= "slds-m-left_x-large slds-p-left_x-large"></div>

                                          <div className="slds-form--inline">

                                              <div className="slds-form-element slds-m-top_large">
                                                  <label className="slds-form-element__label slds-m-left_xx-large slds-p-left_xx-large" htmlFor="name">Business Hours</label>
                                                  <div className="slds-form-element__control slds-m-left_large">
                                                      <input id="name" className="slds-input" type="text"/>
                                                  </div>
                                              </div>
                                              <div className="slds-form-element slds-m-top_large">
                                                  <label className="slds-form-element__label slds-m-left_xx-large " htmlFor="name">To</label>
                                                  <div className="slds-form-element__control slds-m-left_x-large">
                                                      <input id="name" className="slds-input" type="text"/>
                                                  </div>
                                              </div>
                                          </div></div>
                                  </div>
                              </div>
                          </fieldset>
                      </legend>
                  </section>
                  <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
                      <legend className="slds-page-header slds-m-bottom_none">Social
                          <fieldset className="slds-form-element">
                              <div className="slds-form slds-form_compound">
                                  <div className="slds-form-element__group">
                                      <div className="slds-form-element__row">
                                          <div className="slds-form--inline">

                                              <div className="slds-form-element">
                                                  <label className="slds-form-element__label " htmlFor="name">ADD</label>
                                                  <div className="slds-form-element__control slds-m-left_xx-large">
                                                      <input id="name" className="slds-input" type="text"/>
                                                  </div>
                                              </div>
                                              <div className="slds-form-element">
                                                  <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">ADD</label>
                                                  <div className="slds-form-element__control slds-m-left_xx-large">
                                                      <input id="name" className="slds-input" type="text"/>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="slds-form-element__row">
                                          <div className="slds-form--inline">

                                              <div className="slds-form-element ">
                                                  <label className="slds-form-element__label " htmlFor="name">ADD</label>
                                                  <div className="slds-form-element__control slds-m-left_xx-large">
                                                      <input id="name" className="slds-input" type="text"/>
                                                  </div>
                                              </div>
                                              <div className="slds-form-element">
                                                  <label className="slds-form-element__label slds-m-left_xx-large" htmlFor="name">ADD</label>
                                                  <div className="slds-form-element__control slds-m-left_xx-large">
                                                      <input id="name" className="slds-input" type="text"/>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </fieldset>
                      </legend>

                  </section>
                  <div className="slds-form-element slds-float_right slds-m-right_large slds-size_2-of-12">
                      <div className="slds-button-group" role="group">
                          <button className="slds-button slds-btn slds-button_brand">Edit</button>
                          <button className="slds-button slds-button_neutral">Cancel</button>
                          <button className="slds-button slds-button_brand">Reset</button>
                      </div>
                  </div>







              </Row>

          </Grid>

      </div>
    );
  }
}

Company.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Company: makeSelectCompany(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
