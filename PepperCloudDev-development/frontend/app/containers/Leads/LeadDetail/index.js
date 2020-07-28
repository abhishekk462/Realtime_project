/*
*
* AppGenerator
*
*/

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Grid, Row, Col, Panel, Container, small } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import makeSelectLeadDetail from "./selectors";
import messages from "./messages";
import NewBrudcrumModel from "../../../components/Brudcrums/NewBrudcrumModel";
import {
    Input,
    Tabs,
    TabsPanel,
    Button
} from "@salesforce/design-system-react";

import logo from "../../../assets/img/icon_placeholder_user.png";


export class LeadDetail extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "LEAD",
            date: "1990-06-05",
            format: "YYYY-MM-DD",
            inputFormat: "DD/MM/YYYY",
            mode: "date",
            elements: [
                { name: "Home", url: "/", status: "inactive" },
                { name: "Lead", url: "/page/s102", status: "inactive" },
                { name: "Profile", url: "javascript:void(0)", status: "active" }
            ]
        };

    }
    componentWillMount() {
        console.log("props is", this.props);
    }
    render() {
        return (
            <div>
                <Helmet
                    title="Lead Detail"
                    meta={[
                        { name: "description", content: "Description of Lead Detail TBD" }
                    ]}
                />
                <Grid>

                    <NewBrudcrumModel
                        {...this.props}
                        name={this.state.pageTitle}
                        data={this.state.elements}/>


                    {/*Lead information design */}
                    <Row className="show-grid slds-show-gridd " >
                        <section className="slds-grid--pull-padded slds-grid--vertical-align-center slds-profilehead">
                            <legend className="slds-page-header slds-m-bottom_medium slds-m-top_xxx-small slds-bordersec  ">
                                <fieldset className="slds-form-element slds-form-profile">
                                    <Row>
                                        <Col className="slds-lead-logo">

                                            <img src={logo} alt="Lead" className="img-responsive imgResize" />{/*Lead logo added*/}
                                        </Col>
                                        <Col className="slds-lead-title slds-lead">
                                            Robin J Leeds
                                        </Col>
                                    </Row>
                                    <Row>{/*Lead Details row is added*/}
                                        <Col xs={12} md={2}>
                                            <Col className="slds-lead-CompInfo">Company</Col>
                                            <Col className="slds-lead-CompName">
                                                Jet Skee Pvt Ltd
                                            </Col>
                                        </Col>

                                        <Col xs={12} md={2}>
                                            <Col className="slds-lead-desig">Designation</Col>
                                            <Col className="slds-lead-desigInfo">
                                                Genral manger
                                            </Col>
                                        </Col>

                                        <Col xs={12} md={2}>
                                            <Col className="slds-lead-cont">Mobile</Col>
                                            <Col className="slds-lead-contnum">
                                                +91 7564747473
                                            </Col>
                                        </Col>

                                        <Col className="slds-lead-email">
                                            Email
                                        </Col>
                                            <Col className="slds-lead-emailinfo">
                                                robinleed@hotmail.com
                                            </Col>

                                    </Row>{/*Lead Details row is ended*/}
                                </fieldset>
                            </legend>
                        </section>{/*Lead information design end*/}
                        <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">{/*path indicator Section Design*/}
                            <legend className="slds-page-header">

                                <fieldset className="slds-form-element slds-path-indic">
                                    <div className="slds-path">
                                        <div className="slds-grid slds-path__track slds-path-trc">
                                            <div className="slds-grid slds-path__scroller-container">
                                                <button
                                                    className="slds-button slds-button_icon slds-button_icon-border-filled slds-path__trigger"
                                                    title="Expand Sales Coaching Tab Panels" style={{marginLeft:-20}}>
                                                    <svg className="slds-button__icon" aria-hidden="true">
                                                        <use
                                                            xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"/>
                                                    </svg>
                                                    <span
                                                        className="slds-assistive-text">Expand Sales Coach Tab Panels</span>
                                                </button>
                                                <div className="slds-path__scroller" role="application">
                                                    <div className="slds-path__scroller_inner">
                                                        <ul className="slds-path__nav"
                                                            role="listbox"
                                                            aria-orientation="horizontal">
                                                            {/*First stage Connected of Path indicator*/}
                                                            <li className="slds-path__item slds-is-complete slds-is-active  slds-is-active1 "
                                                                role="presentation">
                                                                <a aria-selected="false"
                                                                   className="slds-path__link"
                                                                   href="javascript:void(0);"
                                                                   id="path-1"
                                                                   role="option"
                                                                   tabIndex="-1">
                                                            <span className="slds-path__stage">

                                                                <span className="slds-assistive-text">
                                                                  Stage Complete
                                                                </span>
                                                            </span>
                                                                    <span className="slds-path__title slds-path-titleind slds-contacted">
                                                                        Contacted
                                                                    </span>
                                                                </a>
                                                            </li>{/*First stage Connected End*/}
                                                            <li className="slds-path__item slds-is-complete slds-path__item1 slds-is-active"
                                                                style={{ background: "#FF7F1D" }}
                                                                role="presentation">{/*Second stage New */}
                                                                <a aria-selected="true"
                                                                   className="slds-path__link"
                                                                   href="javascript:void(0);"
                                                                   id="path-2"
                                                                   role="option"
                                                                   tabIndex="-1">
                                                            <span className="slds-path__stage">
                                                                <span className="slds-assistive-text">
                                                                  Stage Complete
                                                                </span>
                                                            </span>
                                                                    <span className="slds-path__title slds-path-titlecom slds-new">
                                                                    New
                                                                </span>
                                                                </a>
                                                            </li>{/*Second stage New End*/}
                                                            <li className="slds-path__item slds-is-incomplete slds-is-incomplete1" role="presentation">{/*Third stage Working*/}
                                                                <a aria-selected="false"
                                                                   className="slds-path__link"
                                                                   href="javascript:void(0);"
                                                                   id="path-3"
                                                                   role="option"
                                                                   tabIndex="0">
                                                                <span className="slds-path__stage">

                                                                    <span className="slds-assistive-text">
                                                                      Current Stage:
                                                                    </span>
                                                                </span>
                                                                    <span className="slds-path__title slds-path-titlecurr slds-work" >
                                                                    Working
                                                                   </span>
                                                                </a>
                                                            </li>{/*Third stage Working End*/}
                                                            <li className="slds-path__item slds-is-incomplete" role="presentation">
                                                                <a aria-selected="false"
                                                                   className="slds-path__link"
                                                                   href="javascript:void(0);"
                                                                   id="path-4"
                                                                   role="option"
                                                                   tabIndex="-1">
                                                                    <span className="slds-path__stage"></span>
                                                                    <span className="slds-path__title slds-path-titlenurtur slds-nurtur">
                                                                   Nurturing
                                                                 </span>
                                                                </a>
                                                            </li>
                                                            <li className="slds-path__item slds-is-incomplete" role="presentation">
                                                                <a aria-selected="false"
                                                                   className="slds-path__link"
                                                                   href="javascript:void(0);"
                                                                   id="path-5"
                                                                   role="option"
                                                                   tabIndex="-1">
                                                                <span className="slds-path__stage">
                                                                    <svg className="slds-icon slds-icon_x-small" aria-hidden="true">

                                                                   </svg>
                                                                </span>
                                                                    <span className="slds-path__title slds-path-titleconv slds-conv">
                                                                    Converted
                                                                  </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div className="slds-path__scroll-controls">
                                                            <button
                                                                className="slds-button slds-button_icon slds-button_icon-border-filled"
                                                                title="Scroll left"
                                                                tabIndex="-1">

                                                                <span className="slds-assistive-text">
                                                                    Scroll left
                                                               </span>
                                                            </button>
                                                            <button
                                                                className="slds-button slds-button_icon slds-button_icon-border-filled"
                                                                title="Scroll right"
                                                                tabIndex="-1">

                                                            <span className="slds-assistive-text">
                                                                Scroll right
                                                            </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slds-grid slds-path__action">
                                                    <span className="slds-path__stage-name">
                                                      Stage: Unqualified
                                                    </span>
                                                <button className="slds-button slds-button_brand slds-path__mark-complete
                                                slds-path-markcomp sld-mstatus" >

                                                    Mark Status as Complete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </legend>
                        </section>{/*path indicator Section Design End*/}
                        <Row className="slds-actvitybox">  {/*Activity Section start*/}
                            <Col xs={12} md={8}>
                                <section className="slds-grid--pull-padded slds-grid--vertical-align-center">
                                    <fieldset className="slds-form-element slds-activity" >
                                        <div className="slds-grid slds-grid--vertical">
                                            <br/>
                                            <Tabs variant="scoped" id="tabs-example-scoped">
                                                <TabsPanel label="ACTIVITY">
                                                    <Tabs id="tabs-example-default">
                                                        <TabsPanel label="Log Call">
                                                            <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center slds-p-top_small">
                                                                <div className="slds-m-left--small slds-col--padded slds-form-element  slds-size--6-of-12 slds-small-size--3-of-6 slds-medium-size--6-of-12 slds-large-size--3-of-6">
                                                                    <div className="slds-form-element">
                                                                        <label className="slds-form-element__label" htmlFor="form-element-01">
                                                                            <abbr className="slds-required" title="required">*</abbr>
                                                                            Subject
                                                                        </label>
                                                                        <div className="slds-form-element__control">
                                                                            <input
                                                                                type="text"
                                                                                id="form-element-02"
                                                                                className="slds-input"
                                                                                placeholder="Subject"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-form-element slds-size--12-of-12 slds-small-size--6-of-6 slds-medium-size--12-of-12 slds-large-size--6-of-6">
                                                                        <label className="slds-form-element__label slds-p-top_small">
                                                                            Details
                                                                        </label>
                                                                        <div className="slds-form-element__control">
                                                                            <input
                                                                                type="text"
                                                                                id="form-element-03"
                                                                                className="slds-input"
                                                                                placeholder="Details"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slds-col--padded slds-m-top_large  slds-size_2-of-6">
                                                                    <button className="slds-m-top_xx-large slds-float_right  slds-button slds-button--brand"
                                                                            style={{
                                                                                background: "#fd7a1e",
                                                                                border: "#fd7a1e"
                                                                            }}>
                                                                        SAVE
                                                                    </button>
                                                                    <button className="slds-float_right slds-m-top_xx-large  slds-button slds-button--neutral">
                                                                        CANCEL
                                                                    </button>
                                                                </div>
                                                            </section>
                                                            <div className="slds-col--padded slds-size_12-of-12 slds-m-top_large">
                                                                <label>Call List</label>
                                                                <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                                                                    <thead>
                                                                    <tr className="slds-text-title_caps">
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Opportunity Name">
                                                                                <label>#</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Account Name">
                                                                                <label>Date</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Close Date">
                                                                                <label>Subject</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Details</label>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                1
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Follow Up{" "}
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Followed up on order finalization
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                2
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Follow Up{" "}
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Followed up on order finalization
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                3
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Follow Up
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Followed up on order finalization
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </TabsPanel>
                                                        <TabsPanel label="New Task">
                                                            <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
                                                                <div className="slds-grid slds-wrap slds-p-top_small slds-p-left_small">
                                                                    <div className=" slds-col--padded slds-size--3-of-6">
                                                                        <label className="slds-form-element__label" htmlFor="form-element-01">
                                                                            <abbr className="slds-required" title="required">*</abbr>
                                                                            Task Type
                                                                        </label>
                                                                        <div className="slds-form-element__control">
                                                                            <div className="slds-select_container">
                                                                                <select className="slds-select" id="select-01">
                                                                                    <option value="">Task type</option>
                                                                                    <option>Option One</option>
                                                                                    <option>Option Two</option>
                                                                                    <option>Option Three</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" slds-col--padded slds-size--3-of-6 ">
                                                                        <label className="slds-form-element__label" htmlFor="form-element-01">
                                                                            <abbr className="slds-required" title="required">*</abbr>
                                                                            Assign to
                                                                        </label>
                                                                        <div className="slds-form-element__control">
                                                                            <div className="slds-select_container">
                                                                                <select className="slds-select" id="select-01">
                                                                                    <option value="">Assign to</option>
                                                                                    <option>Option One</option>
                                                                                    <option>Option Two</option>
                                                                                    <option>Option Three</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_3-of-6">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Subject
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_3-of-6">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Start Date
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_3-of-6">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Details
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_3-of-6">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Remind on
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_3-of-6">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Due Date
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-m-top_small  slds-size_6-of-6">
                                                                        <button className="slds-s-top_small slds-float_right  slds-button slds-button--brand"
                                                                                style={{
                                                                                    background: "#fd7a1e",
                                                                                    border: "#fd7a1e"
                                                                                }}>
                                                                            SAVE
                                                                        </button>
                                                                        <button className="slds-float_right slds-s-top_small  slds-button slds-button--neutral">
                                                                            CANCEL
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <div className="slds-col--padded slds-size_12-of-12 ">
                                                                <label>Task List</label>
                                                                <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                                                                    <thead>
                                                                    <tr className="slds-text-title_caps slds-text-body_regular">
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Opportunity Name">
                                                                                <label>#</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Account Name">
                                                                                <label>Subject</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Close Date">
                                                                                <label>Type</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Date Created</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Due Date</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Status</label>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                1
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Samples
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                To Do
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                26.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Not Created
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                2
                                                                            </div>
                                                                        </th>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Samples
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                To Do
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>

                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                26.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Not Created
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                3
                                                                            </div>
                                                                        </th>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Samples
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                To Do
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>

                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                26.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Not Created
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </TabsPanel>
                                                        <TabsPanel label="New Event">
                                                            <section className="slds-col--padded slds-grid slds-grid--pull-padded slds-grid--vertical-align-center slds-p-left_small slds-p-top_xx-small">
                                                                <div className="slds-grid slds-wrap">
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="select-01">
                                                                                Subject
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <div className="slds-select_container">
                                                                                    <select className="slds-select" id="select-01">
                                                                                        <option value="">Subject</option>
                                                                                        <option>Option One</option>
                                                                                        <option>Option Two</option>
                                                                                        <option>Option Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="select-01">
                                                                                Start Date
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <div className="slds-select_container">
                                                                                    <select className="slds-select" id="select-01">
                                                                                        <option value="">Start Time</option>
                                                                                        <option>Option One</option>
                                                                                        <option>Option Two</option>
                                                                                        <option>Option Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Start Time
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Location
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                End Date
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                End Time
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Details
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Alert Before Event
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_6-of-12">
                                                                        <div className="slds-form-element slds-p-top_small">
                                                                            <label className="slds-form-element__label" htmlFor="text-input-id-1">
                                                                                Assign To
                                                                            </label>
                                                                            <div className="slds-form-element__control">
                                                                                <input
                                                                                    type="text"
                                                                                    id="text-input-id-1"
                                                                                    className="slds-input"
                                                                                    placeholder="Placeholder Text"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-form--inline slds-size--6-of-12">
                                                                        <div className="slds-form-element slds-size--6-of-12 ">
                                                                            <div className="slds-form-element__control slds-size--12-of-12">
                                                                                <p className="slds-m-top--large slds-p-left_small">All Days Event</p>
                                                                            </div>
                                                                        </div>
                                                                        <button className=" slds-m-top--large   slds-m-right_xxx-small slds-col--padded slds-button slds-button--neutral"
                                                                                style={{borderColor:"red"}}>
                                                                            Yes
                                                                        </button>
                                                                        <button className=" slds-m-top--large  slds-m-right_xxx-small  slds-col--padded slds-button slds-button--neutral"
                                                                                style={{borderColor:"green"}}>
                                                                            No
                                                                        </button>
                                                                    </div>

                                                                    <div className="slds-col--padded slds-size_12-of-12">
                                                                        <button className=" slds-col--padded slds-float_right slds-m-top_large  slds-button slds-button--brand"
                                                                                style={{
                                                                                    background: "#fd7a1e",
                                                                                    border: "#fd7a1e"
                                                                                }}>
                                                                            SAVE
                                                                        </button>
                                                                        <button className="slds-col--padded slds-float_right slds-m-top_large slds-button slds-button--neutral">
                                                                            CANCEL
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <div className="slds-col--padded slds-size_12-of-12 ">
                                                                <label>Event List</label>
                                                                <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                                                                    <thead>
                                                                    <tr className="slds-text-title_caps slds-text-body_regular">
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Opportunity Name">
                                                                                <label>#</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Account Name">
                                                                                <label>Subject</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Close Date">
                                                                                <label>Location</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Start Date</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>End Date</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Calender</label>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                1
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Demo Meet
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Park Avenue
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Open Calender
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                2
                                                                            </div>
                                                                        </th>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Demo Meet
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Park Avenue
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>

                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Open Calender
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                2
                                                                            </div>
                                                                        </th>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Demo Meet
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Park Avenue
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>

                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                25.05.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Open Calender
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </TabsPanel>

                                                        <TabsPanel label="Make Note">
                                                            <section className=" slds-m-left--small slds-grid slds-grid--pull-padded slds-grid--vertical-align-center slds-p-top_small">
                                                                <div className="slds-grid slds-wrap">
                                                                    <div className="slds-col--padded slds-m-top_xxx-small slds-size_6-of-12">
                                                                        <Input
                                                                            id="base-id"
                                                                            label="Subject"
                                                                            placeholder="My placeholder"/>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_12-of-12">
                                                                        <div className=" slds-size_6-of-12 slds-p-right_small slds-p-top_small">
                                                                            <Input
                                                                                id="base-id"
                                                                                label="Details"
                                                                                placeholder="My placeholder"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="slds-col--padded slds-size_12-of-12">
                                                                        <button className="slds-m-top_large slds-float_right  slds-button slds-button--brand"
                                                                                style={{
                                                                                    background: "#fd7a1e",
                                                                                    border: "#fd7a1e"
                                                                                }}>
                                                                            SAVE
                                                                        </button>
                                                                        <button className="slds-float_right slds-m-top_large  slds-button slds-button--neutral">
                                                                            CANCEL
                                                                        </button>
                                                                    </div>
                                                                    {/*tables*/}
                                                                    <div className="slds-col--padded slds-size_12-of-12 slds-m-top_large">
                                                                        <label>Note List</label>
                                                                        <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                                                                            <thead>
                                                                            <tr className="slds-text-title_caps slds-text-body_regular">
                                                                                <th scope="col">
                                                                                    <div className="slds-truncate" title="Opportunity Name">
                                                                                        <label>#</label>
                                                                                    </div>
                                                                                </th>
                                                                                <th scope="col">
                                                                                    <div className="slds-truncate" title="Account Name">
                                                                                        <label>Date</label>
                                                                                    </div>
                                                                                </th>
                                                                                <th scope="col">
                                                                                    <div className="slds-truncate" title="Close Date">
                                                                                        <label>Subject</label>
                                                                                    </div>
                                                                                </th>
                                                                                <th scope="col">
                                                                                    <div className="slds-truncate" title="Stage">
                                                                                        <label>Details</label>
                                                                                    </div>
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <th scope="row" data-label="Opportunity Name">
                                                                                    <div className="slds-truncate" title="Cloudhub">
                                                                                        1
                                                                                    </div>
                                                                                </th>
                                                                                <td data-label="Account Name">
                                                                                    <div className="slds-truncate" title="Cloudhub">
                                                                                        25.05.2016
                                                                                    </div>
                                                                                </td>
                                                                                <td data-label="Close Date">
                                                                                    <div className="slds-truncate" title="4/14/2015">
                                                                                        Follow Up
                                                                                    </div>
                                                                                </td>
                                                                                <td data-label="Prospecting">
                                                                                    <div className="slds-truncate" title="Prospecting">
                                                                                        Follow up on order finalization
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row" data-label="Opportunity Name">
                                                                                    <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                        2
                                                                                    </div>
                                                                                </th>
                                                                                <td data-label="Account Name">
                                                                                    <div className="slds-truncate" title="Cloudhub">
                                                                                        26.05.2018
                                                                                    </div>
                                                                                </td>
                                                                                <td data-label="Close Date">
                                                                                    <div className="slds-truncate" title="4/14/2015">
                                                                                        Follow UP
                                                                                    </div>
                                                                                </td>
                                                                                <td data-label="Close Date">
                                                                                    <div className="slds-truncate" title="4/14/2015">
                                                                                        Follow up on order finalization
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row" data-label="Opportunity Name">
                                                                                    <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                        3
                                                                                    </div>
                                                                                </th>
                                                                                <td data-label="Account Name">
                                                                                    <div className="slds-truncate" title="Cloudhub">
                                                                                        26.05.2018
                                                                                    </div>
                                                                                </td>
                                                                                <td data-label="Close Date">
                                                                                    <div className="slds-truncate" title="4/14/2015">
                                                                                        Follow UP
                                                                                    </div>
                                                                                </td>
                                                                                <td data-label="Close Date">
                                                                                    <div className="slds-truncate" title="4/14/2015">
                                                                                        Follow up on order finalization
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </TabsPanel>
                                                        <TabsPanel label="Add Attachment">
                                                            <div className="slds-form-element">
                                                        <span className="slds-form-element__label" id="file-selector-primary-label">
                                                            Attach new
                                                        </span>
                                                                <div className="slds-form-element__control">

                                                                    <div className="slds-col--padded">
                                                                        Add Task
                                                                    </div>
                                                                    <div className="slds-file-selector slds-file-selector_files">
                                                                        <div className="slds-file-selector__dropzone">
                                                                            <input
                                                                                type="file"
                                                                                className="slds-file-selector__input slds-assistive-text"
                                                                                accept="image/png"
                                                                                id="file-upload-input-01"
                                                                                aria-labelledby="file-selector-primary-label file-selector-secondary-label"/>
                                                                            <label className="slds-file-selector__body"
                                                                                   htmlFor="file-upload-input-01"
                                                                                   id="file-selector-secondary-label">
                                                                    <span className="slds-file-selector__button slds-button slds-button_neutral">
                                                                      <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true"/>
                                                                      Upload Files
                                                                    </span>
                                                                                <span className="slds-file-selector__text slds-medium-show">
                                                                     Link from
                                                                    </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </TabsPanel>
                                                        <TabsPanel label="Activity Set(2)">
                                                            {/*tables*/}
                                                            <div className="slds-col--padded slds-size_12-of-12 slds-m-top_large">
                                                                <label>Activity List</label>
                                                                <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                                                                    <thead>
                                                                    <tr className="slds-text-title_caps">
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Opportunity Name">
                                                                                <label>#</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Account Name">
                                                                                <label>Task Type</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Close Date">
                                                                                <label>Details</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Start Date</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Due Date</label>
                                                                            </div>
                                                                        </th>
                                                                        <th scope="col">
                                                                            <div className="slds-truncate" title="Stage">
                                                                                <label>Status</label>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <th scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                1
                                                                            </div>
                                                                        </th>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                Call
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Call contact and inform on the latest
                                                                                product
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                27.07.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                27.07.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                Converted
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row" data-label="Opportunity Name">
                                                                            <div className="slds-truncate" title="Cloudhub + Anypoint Connectors">
                                                                                2
                                                                            </div>
                                                                        </th>
                                                                        <td data-label="Account Name">
                                                                            <div className="slds-truncate" title="Cloudhub">
                                                                                To Do
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                Send Product Brochure
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Close Date">
                                                                            <div className="slds-truncate" title="4/14/2015">
                                                                                27.06.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                27.07.2016
                                                                            </div>
                                                                        </td>
                                                                        <td data-label="Prospecting">
                                                                            <div className="slds-truncate" title="Prospecting">
                                                                                In progress
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </TabsPanel>
                                                        <TabsPanel label="Custom Field">
                                                            <div className=" slds-col--padded slds-form-element  slds-size--12-of-12 slds-small-size--6-of-6 slds-medium-size--12-of-12 slds-large-size--6-of-6">
                                                                <label> Custome field-I</label>

                                                                <div className="slds-form--inline slds-size--12-of-12">
                                                                    <div className="slds-form-element slds-size--6-of-12 ">
                                                                        <div className="slds-form-element__control slds-size--12-of-12">
                                                                            <input
                                                                                type="text"
                                                                                className="slds-input"
                                                                                id="base-id"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <button className="slds-button slds-button--brand"
                                                                            style={{
                                                                                background: "#fd7a1e",
                                                                                border: "#fd7a1e"
                                                                            }}>
                                                                        ADD
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <button className="slds-s-top_small slds-float_right  slds-button slds-button--brand"
                                                                    style={{
                                                                        background: "#fd7a1e",
                                                                        border: "#fd7a1e"
                                                                    }}>
                                                                SAVE
                                                            </button>

                                                            <button className="slds-float_right slds-s-top_small  slds-button slds-button--neutral">
                                                                CANCEL
                                                            </button>
                                                        </TabsPanel>
                                                    </Tabs>
                                                </TabsPanel>

                                                <TabsPanel label="INFORMATION">
                                                    INFORMATION
                                                    <Tabs id="tabs-example-default">
                                                        <TabsPanel label="Company Information">
                                                            <section className=" slds-grid--pull-padded slds-grid--vertical-align-center">
                                                                <div className="slds-col--padded slds-m-left_x-small slds-form slds-form_stacked">
                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            Description
                                                                        </p>
                                                                        <p>
                                                                            <strong>
                                                                                One of the Largest Suppiler of Petro
                                                                                Chemical
                                                                            </strong>
                                                                        </p>
                                                                    </div>

                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            Annual turnover
                                                                        </p>
                                                                        <p>
                                                                            <strong>5 Million</strong>
                                                                        </p>
                                                                    </div>

                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            No of Staff
                                                                        </p>
                                                                        <p>
                                                                            <strong>Between 50-100</strong>
                                                                        </p>
                                                                    </div>

                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            Main Business
                                                                        </p>
                                                                        <p>
                                                                            <strong>Material Supplier</strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            Industry
                                                                        </p>
                                                                        <p>
                                                                            <strong>Chemicals</strong>
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className=" slds-float_right slds-col--padded slds-float_right slds-size--10-of-12">
                                                                    <button type="button" className=" slds-float_right  slds-button slds-button_brand"
                                                                            style={{
                                                                                background: "#fd7a1e",
                                                                                border: "#fd7a1e"
                                                                            }}>
                                                                        SAVE
                                                                    </button>
                                                                    <button type="button" className="slds-float_right slds-button slds-button_neutral ">
                                                                        CANCEL
                                                                    </button>
                                                                </div>
                                                            </section>
                                                        </TabsPanel>

                                                        <TabsPanel label="Address Information">
                                                            <section className=" slds-grid--pull-padded slds-grid--vertical-align-center">
                                                                <div className="slds-col--padded slds-m-left_x-small slds-form slds-form_stacked">
                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            Address
                                                                        </p>
                                                                        <p>
                                                                            <strong>
                                                                                #11-12,Rue Boulevard Central Station
                                                                            </strong>
                                                                        </p>
                                                                    </div>

                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            City
                                                                        </p>
                                                                        <p>
                                                                            <strong>Detroit</strong>
                                                                        </p>
                                                                    </div>

                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            State/Province
                                                                        </p>
                                                                        <p>
                                                                            <strong>Michigan</strong>
                                                                        </p>
                                                                    </div>

                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            48127
                                                                        </p>
                                                                        <p>
                                                                            <strong>Material Supplier</strong>
                                                                        </p>
                                                                    </div>
                                                                    <div className="slds-form-element">
                                                                        <p className="slds-form-element__label" htmlFor="input-id-01">
                                                                            Country
                                                                        </p>
                                                                        <p>
                                                                            <strong>United Sates</strong>
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className=" slds-float_right slds-col--padded slds-float_right slds-size--10-of-12">
                                                                    <button type="button" className=" slds-float_right  slds-button slds-button_brand"
                                                                            style={{
                                                                                background: "#fd7a1e",
                                                                                border: "#fd7a1e"
                                                                            }}>
                                                                        SAVE
                                                                    </button>
                                                                    <button type="button" className=" slds-float_right slds-button slds-button_neutral ">
                                                                        CANCEL
                                                                    </button>
                                                                </div>
                                                            </section>
                                                        </TabsPanel>
                                                        <TabsPanel label="Secondary information">
                                                            <section className="slds-grid--pull-padded slds-grid--vertical-align-center">
                                                                <Row className="slds-m-left--small">
                                                                    <Col className="slds-col--padded">
                                                                        Cutome field-I
                                                                    </Col>
                                                                    <Col className="slds-col--padded">
                                                                        XXXXXXXXXX
                                                                    </Col>

                                                                    <Col className="slds-col--padded slds-m-top_large">
                                                                        Cutome field-II
                                                                    </Col>
                                                                    <Col className="slds-col--padded">
                                                                        XXXXXXXXXX
                                                                    </Col>
                                                                    <Col className="slds-col--padded slds-m-top_large">
                                                                        Cutome field-III
                                                                    </Col>
                                                                    <Col className="slds-col--padded">
                                                                        XXXXXXXXXX
                                                                    </Col>
                                                                    <Col className="slds-col--padded slds-m-top_large">
                                                                        Cutome field-V
                                                                    </Col>
                                                                    <Col className="slds-col--padded">
                                                                        XXXXXXXXXX
                                                                    </Col>
                                                                </Row>

                                                                <div className="slds-float_right">
                                                                    <button className="slds-button slds-button_neutral">
                                                                        CANCEL
                                                                    </button>
                                                                    <button className="slds-button slds-button_success"
                                                                            style={{
                                                                                background: "#fd7a1e",
                                                                                border: "#fd7a1e"
                                                                            }}>
                                                                        SAVE
                                                                    </button>
                                                                </div>
                                                            </section>
                                                        </TabsPanel>
                                                    </Tabs>
                                                </TabsPanel>
                                            </Tabs>
                                        </div>
                                    </fieldset>
                                </section>
                            </Col>
                            {/*path indicator Section Design**/}
                            <Col xs={6} md={4} className="timeline">
                                <legend className="slds-page-header slds-timelinelog">
                                    <div className="slds-form-element__control">
                                        <div className="slds-select_container">
                                            <select className="slds-select slds-activitySelect" id="select-01">
                                                <option value="">Select by time</option>
                                                <option>Option One</option>
                                                <option>Option Two</option>
                                                <option>Option Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <ul className="slds-timeline slds-timelinebox">

                                        <li>
                                            <div className="slds-timeline__item_expandable slds-timeline__item_task">
                                                <span className="slds-assistive-text">task</span>
                                                <div className="slds-media">
                                                    <div className="slds-media__figure">
                                                        <button className="slds-button slds-button_icon" title="Infromed Product Feature" aria-controls="task-item-base" aria-expanded="false">
                                                            <svg
                                                                className="slds-button__icon slds-timeline__details-action-icon"
                                                                aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"/>
                                                            </svg>

                                                            <span className="slds-assistive-text">
                                                        Infromed Product Feature
                                                        </span>
                                                        </button>
                                                        <div className="slds-icon_container slds-icon-standard-task slds-timeline__icon" title="task">
                                                            <svg className="slds-icon slds-icon_small"
                                                                 aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#task"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="slds-media__body">
                                                        <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                                            <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                                          <span className="slds-checkbox">
                                                            <input
                                                                name="options"
                                                                id="checkbox-2"
                                                                value="checkbox-2"
                                                                type="checkbox"/>
                                                         <label>

                                                              <span className="slds-form-element__label slds-assistive-text">
                                                                Send Product Brochure
                                                              </span>
                                                        </label>
                                                          </span>
                                                                <h3 className="slds-truncate" title="Review proposals for EBC deck with larger team and have marketing review this">
                                                                    <a href="javascript:void(0);">
                                                                        <strong>Informed Product Features</strong>
                                                                    </a>
                                                                </h3>
                                                                <div className="slds-no-flex">
                                                              <span className="slds-icon_container slds-icon-utility-rotate" title="Recurring Task">

                                                                <span className="slds-assistive-text">
                                                                  Recurring Task
                                                                </span>
                                                            </span>
                                                                </div>
                                                            </div>
                                                            <div className="slds-timeline__actions slds-timeline__actions_inline">
                                                                <p className="slds-timeline__date">
                                                                    9:00am | 3/20/17
                                                                </p>
                                                                {/*<button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"*/}
                                                                {/*aria-haspopup="true"title="More Options for this item">*/}
                                                                    {/*<svg className="slds-button__icon"*/}
                                                                         {/*aria-hidden="true">*/}
                                                                        {/*<use xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                                                             {/*xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"/>*/}
                                                                    {/*</svg>*/}

                                                                {/*<span className="slds-assistive-text">*/}
                                                                {/*More Options for this item*/}
                                                                {/*</span>*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                        <p className="slds-m-horizontal_xx-small slds-p-left_xx-small slds-charlie">
                                                            <a href="javascript:void(0);">You</a>
                                                            created a task with
                                                            <a href="javascript:void(0);">Charlie Gomez</a>
                                                        </p>
                                                        <article className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_x-small"
                                                                 id="task-item-base"
                                                                 aria-hidden="true">
                                                            <ul className="slds-list_horizontal slds-wrap">
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  Name
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Charlie Gomez">
                                                                  <a href="javascript:void(0);">
                                                                    Charlie Gomez
                                                                  </a>
                                                               </span>
                                                                </li>
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  Related To
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Tesla Cloudhub + Anypoint Connectors">
                                                                  <a href="javascript:void(0);">
                                                                    Tesla Cloudhub + Anypoint Connectors
                                                                  </a>
                                                                </span>
                                                                </li>
                                                            </ul>
                                                            <div>
                                                              <span className="slds-text-title">
                                                                Description
                                                              </span>
                                                                <p className="slds-p-top_x-small">
                                                                    Need to finalize proposals and brand details
                                                                    before the meeting
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="slds-timeline__item_expandable slds-timeline__item_call">
                                                <span className="slds-assistive-text">log_a_call</span>
                                                <div className="slds-media">
                                                    <div className="slds-media__figure">
                                                        <button className="slds-button slds-button_icon"
                                                                title="Toggle details for Mobile conversation on Monday"
                                                                aria-controls="call-item-base"
                                                                aria-expanded="false">
                                                            <svg
                                                                className="slds-button__icon slds-timeline__details-action-icon"
                                                                aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"/>
                                                            </svg>
                                                        <span className="slds-assistive-text">
                                                        Toggle details for Mobile conversation on Monday
                                                        </span>
                                                        </button>
                                                        <div className="slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon" title="call">
                                                            <svg className="slds-icon slds-icon_small"
                                                                 aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="slds-media__body">
                                                        <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                                            <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                                                <h3 className="slds-truncate" title="Mobile conversation on Monday">
                                                                    <a href="javascript:void(0);">
                                                                        <strong className="slds-productbrou">Send Product Brochure</strong>
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                            <div className="slds-timeline__actions slds-timeline__actions_inline">
                                                                <p className="slds-timeline__date">
                                                                    10:00am | 3/23/17
                                                                </p>
                                                                {/*<button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"*/}
                                                                {/*aria-haspopup="true"*/}
                                                                {/*title="More Options for this item">*/}
                                                                    {/*<svg className="slds-button__icon"*/}
                                                                         {/*aria-hidden="true">*/}
                                                                        {/*<use xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                                                             {/*xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"/>*/}
                                                                    {/*</svg>*/}
                                                                {/*<span className="slds-assistive-text">*/}
                                                                {/*More Options for this item*/}
                                                                {/*</span>*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                        <p className="slds-m-horizontal_x-small">
                                                            <a href="javascript:void(0);">You</a>
                                                            logged a call with
                                                            <a href="javascript:void(0);">Adam Chan</a>
                                                        </p>
                                                        <article className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                                                                 id="call-item-base"
                                                                 aria-hidden="true">
                                                            <ul className="slds-list_horizontal slds-wrap">
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  Name
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Adam Chan">
                                                                  <a href="javascript:void(0);">
                                                                   Adam Chan
                                                                  </a>
                                                                </span>
                                                                </li>
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  Related To
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Tesla Cloudhub + Anypoint Connectors">
                                                                  <a href="javascript:void(0);">
                                                                    Tesla Cloudhub + Anypoint Connectors
                                                                  </a>
                                                                </span>
                                                                </li>
                                                            </ul>
                                                            <div>
                                                          <span className="slds-text-title">
                                                            Description
                                                          </span>
                                                                <p className="slds-p-top_x-small">
                                                                    Adam seemed interested in closing this deal
                                                                    quickly! Let’s move.
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="slds-timeline__item_expandable slds-timeline__item_email">
                                                <span className="slds-assistive-text">email</span>
                                                <div className="slds-media">
                                                    <div className="slds-media__figure">
                                                        <button
                                                            className="slds-button slds-button_icon"
                                                            title="Toggle details for Re: Mobile conversation on Monday with the new global team"
                                                            aria-controls="email-item-base"
                                                            aria-expanded="false">
                                                            <svg
                                                                className="slds-button__icon slds-timeline__details-action-icon"
                                                                aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"/>
                                                            </svg>
                                                        <span className="slds-assistive-text">
                                                          Toggle details for Re: Mobile conversation on
                                                          Monday with the new global team
                                                        </span>
                                                        </button>
                                                        <div className="slds-icon_container slds-icon-standard-email slds-timeline__icon" title="email">
                                                            <svg className="slds-icon slds-icon_small"
                                                                 aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#email"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="slds-media__body">
                                                        <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                                            <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                                                <h3 className="slds-truncate" title="Re: Mobile conversation on Monday with the new global team">
                                                                    <a href="javascript:void(0);">
                                                                        <strong className="slds-productprops">Product Proposal</strong>
                                                                    </a>
                                                                </h3>
                                                                <div className="slds-no-flex">
                                                            <span className="slds-icon_container slds-icon-utility-groups" title="Group email">
                                                                <svg
                                                                    className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                                                                    aria-hidden="true">
                                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                         xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#groups"/>
                                                                </svg>
                                                                    <span className="slds-assistive-text">
                                                                Group email
                                                              </span>
                                                            </span>
                                                                    <span className="slds-icon_container slds-icon-utility-attach" title="Has attachments">

                                                                    <svg className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
                                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                         xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#attach"/>
                                                                    </svg>
                                                                        <span className="slds-assistive-text">
                                                                    Has attachments
                                                                  </span>
                                                               </span>
                                                                </div>
                                                            </div>
                                                            <div className="slds-timeline__actions slds-timeline__actions_inline">
                                                                <p className="slds-timeline__date">
                                                                    10:00am | 3/24/17
                                                                </p>
                                                                {/*<button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"*/}
                                                                {/*aria-haspopup="true"*/}
                                                                {/*title="More Options for this item">*/}
                                                                    {/*<svg className="slds-button__icon"*/}
                                                                         {/*aria-hidden="true">*/}
                                                                        {/*<use xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                                                             {/*xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"/>*/}
                                                                    {/*</svg>*/}
                                                                {/*<span className="slds-assistive-text">*/}
                                                                {/*More Options for this item*/}
                                                                {/*</span>*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                        <p className="slds-m-horizontal_x-small">
                                                            <a href="javascript:void(0);">You</a> emailed{" "}
                                                            <a href="javascript:void(0);">Lea Chan</a>
                                                        </p>
                                                        <article className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                                                                 id="email-item-base"
                                                                 aria-hidden="true">
                                                            <ul className="slds-list_horizontal slds-wrap">
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  From Address
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Jackie Dewar">
                                                                    <a href="javascript:void(0);">
                                                                    Jackie Dewar
                                                                    </a>
                                                                </span>
                                                                </li>
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  To Address
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Lea Chan">
                                                                  <a href="javascript:void(0);">Lea Chan</a>
                                                                </span>
                                                                </li>
                                                            </ul>
                                                            <div>
                                                                <span className="slds-text-title">Text Body</span>
                                                                <p className="slds-p-top_x-small">
                                                                    Hi everyone, Thanks for meeting with the team
                                                                    today and going through the proposals we saw.
                                                                    This goes on and wraps if needed.
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="slds-timeline__item_expandable slds-timeline__item_event">
                                                <span className="slds-assistive-text">event</span>
                                                <div className="slds-media">
                                                    <div className="slds-media__figure">
                                                        <button className="slds-button slds-button_icon"
                                                                title="Toggle details for EBC Follow up call"
                                                                aria-controls="event-item-base"
                                                                aria-expanded="false">
                                                            <svg
                                                                className="slds-button__icon slds-timeline__details-action-icon"
                                                                aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"/>
                                                            </svg>
                                                        <span className="slds-assistive-text">
                                                          Toggle details for EBC Follow up call
                                                        </span>
                                                        </button>
                                                        <div className="slds-icon_container slds-icon-standard-event slds-timeline__icon" title="event">

                                                            <svg className="slds-icon slds-icon_small"
                                                                 aria-hidden="true">
                                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                     xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#event"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="slds-media__body">
                                                        <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                                            <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                                                <h3 className="slds-truncate" title="EBC Follow up call">
                                                                    <a href="javascript:void(0);">
                                                                        <strong className="slds-productprops">Document Submitted</strong>
                                                                    </a>
                                                                </h3>
                                                                <div className="slds-no-flex">
                                                            <span className="slds-icon_container slds-icon-utility-world" title="Public sharing">
                                                                <svg
                                                                    className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
                                                                    aria-hidden="true">
                                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                         xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#world"/>
                                                                </svg>
                                                                <span className="slds-assistive-text">
                                                               Public sharing
                                                              </span>
                                                          </span>
                                                                </div>
                                                            </div>
                                                            <div className="slds-timeline__actions slds-timeline__actions_inline">
                                                                <p className="slds-timeline__date">
                                                                    10:30am | 3/24/17
                                                                </p>
                                                                {/*<button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"*/}
                                                                {/*aria-haspopup="true"*/}
                                                                {/*title="More Options for this item">*/}
                                                                    {/*<svg className="slds-button__icon"*/}
                                                                         {/*aria-hidden="true">*/}
                                                                        {/*<use xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                                                                             {/*xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"/>*/}
                                                                    {/*</svg>*/}
                                                                {/*<span className="slds-assistive-text">*/}
                                                                {/*More Options for this item*/}
                                                                {/*</span>*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                        <p className="slds-m-horizontal_x-small">
                                                            <a href="javascript:void(0);">You</a> created an
                                                            event with
                                                            <a href="javascript:void(0);">Aida Lee</a> and 5 others
                                                        </p>
                                                        <article
                                                            className="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                                                            id="event-item-base"
                                                            aria-hidden="true">
                                                            <ul className="slds-list_horizontal slds-wrap">
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  Location
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Westen St. Francis, San Francisco, CA, 94622">
                                                                  <a href="javascript:void(0);">
                                                                    Westen St. Francis, San Francisco, CA, 94622
                                                                  </a>
                                                                </span>
                                                                </li>
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  Attendees
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="Jason Dewar (Organizer) + 5 others">
                                                                  <a href="javascript:void(0);">
                                                                    Jason Dewar (Organizer) + 5 others
                                                                  </a>
                                                               </span>
                                                                </li>
                                                                <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
                                                                <span className="slds-text-title slds-p-bottom_x-small">
                                                                  When
                                                                </span>
                                                                    <span className="slds-text-body_medium slds-truncate" title="March 26, 10:00 AM - 11:00 AM">
                                                                      <a href="javascript:void(0);">
                                                                        March 26, 10:00 AM - 11:00 AM
                                                                      </a>
                                                                </span>
                                                                </li>
                                                            </ul>
                                                            <div>
                                                          <span className="slds-text-title">
                                                            Description
                                                          </span>
                                                                <p className="slds-p-top_x-small">
                                                                    Let's discuss the 2017 product roadmap and
                                                                    address any questions
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </legend>
                            </Col>
                        </Row>
                    </Row>
                </Grid>
            </div>
        );
    }
}
LeadDetail.propTypes = {
    dispatch: PropTypes.func.isRequired
};
const mapStateToProps = createStructuredSelector({
    LeadDetail: makeSelectLeadDetail()
});
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeadDetail);
