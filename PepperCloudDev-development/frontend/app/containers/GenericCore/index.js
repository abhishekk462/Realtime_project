import React from 'react';
import {connect} from 'react-redux';
import NewBrudcrumModel from "../../components/Brudcrums/NewBrudcrumModel";
import ContentWrapper from '../../components/Layout/ContentWrapper';
import { Label,Modal,Grid, Row, Col, Panel, Button, ListGroup,ListGroupItem, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem,SplitButton } from 'react-bootstrap';
import Select from 'react-select';
const { fromJS } = require('immutable')

import { createStructuredSelector } from 'reselect';

import Section from 'components/Section';

import PrimaryAction from 'components/PrimaryAction';

import { FormattedMessage } from 'react-intl';
import { loadFbLoginApi } from 'utils/social';
import coreService from 'services/coreService';
import { push } from 'react-router-redux';

import Notifications, { success } from 'react-notification-system-redux';
import { reducer as notifReducer, actions as notifActions, Notifs } from 'redux-notifications';
const { notifSend } = notifActions; 


import {
  loadParamValues,loadForm,changeForm,saveForm,loadRecordData,changeFormTemplate,toggleAdminCustomizeState,
  adminCustomizationTemplateSave,showHideNewTemplateModal,adminCustomizationNameChange,
  adminCustomizationFieldTypeLoad,adminCustomizationNewFieldAdd,adminCustomizationNewSectionAdd
} from './actions';

import {
  makeSelectFormState
} from './selectors';

import {
  CHANGE_FORM
} from './constants';
import NewSectionModel from "../../components/Section/NewSectionModel";



 class GenericCore extends React.Component {


    constructor(props) {
      console.log("in constructor", props);
        super(props);
        this._notificationSystem= null;
      this._handleFormChange = this._handleFormChange.bind(this);
      this._handlePageAction = this._handlePageAction.bind(this);
      this.socialModel = this.socialModel.bind(this); 
      // this.state = {
      //   customize:false,
      //   facebookProfiles:[],
      //   socialMatchFound:false,
      //   socialData:{},
      //   formTemplateName:''
      // };


    }

   componentWillMount(){
     console.log('loading...');
     //  this.props.dispatch(loadParamValues({key:'LEAD_STATUS'}));
     let screenId = this.props.params["pageId"];
     console.log("page is ", screenId);
     if(!!screenId){
       this.props.dispatch(loadForm(screenId));
       //this.props.dispatch(loadRecordData(screenId));
     }else {
       this.props.dispatch(loadForm('s101'));
     }

   //  this.props.dispatch(changeFormTemplate({templateId: '000'}));


   }

    componentDidMount() {
        console.log("refs are", this);
        this._notificationSystem = this.refs.notificationSystem;

      if(!window.FB){
        loadFbLoginApi();
      }

      //load params
      const customize = this.props.data.get("customize");
      console.log('#####',customize);
      //if(customize){
        this.props.dispatch(adminCustomizationFieldTypeLoad());
      //}

    }

    _addNotification(event) {
        event.preventDefault();
        console.log("and this is",event, this);
        this._notificationSystem.addNotification({
            message: 'Saved Successfully',
            level: 'success'
        });
    }

   _handleFormChange(data){
    // console.log('data is', data);
   // this.props.dispatch(changeForm(data));
     //CHANGE_FORM
    // console.log('props',changeForm);
     this.props.dispatch(changeForm(data));

   }

   navigate(url,data){
     this.props.dispatch(push({ pathname: url, state: data }));
    // this.props.dispatch(push( url, data));
   }

   _handlePageAction(type, data){




     console.log('action', type,data,this.props.data.formState);

     switch (type){

       case "S":
               console.log('dispatching',this.props.data.toJS().formState);
               let saveEntrant = {screenId:'s101', formData: this.props.data.toJS().formState}
               this.props.dispatch(saveForm(saveEntrant));

               this.props.dispatch(notifSend({
                 message: 'User Action Successful',
                 kind: 'success',
                 dismissAfter: 4000
               }));
                break;
       case "SC":
               console.log('trying to save customization',this.props.data.toJS());
               let layouts = this.props.data.get('layout').toJS();
               console.log('layouts',layouts);
               let currentTemplateId = this.props.data.get('formTemplateName');
               let currentTemplate = this.props.data.get('pageData').toJS().templates.filter(template => template.id == currentTemplateId);

               let sections = Object.values(layouts).map((layout)=> {
                 return layout.section;
               });

               let template = Object.assign( currentTemplate[0],{fieldsList:sections});

               console.log('template for save is ' , template);

                this.props.dispatch(adminCustomizationTemplateSave(template));
               break;
       case "SCN":

               this._openNewTemplateModal.bind(this);
               this._openNewTemplateModal();
               break;
       case "G":
                // When goto button is clicked
               console.log(type,data);
               let links = this.props.data.get("pageData").get("links").toJS();

               let listLinks = links.filter((link) => link.linkType==="L");
               if(listLinks.length>0){
               let listLink =   listLinks[0];
                  this.navigate(listLink.linkUrl)
               }

               break;
       case "NEW_SECTION":
              console.log("New section request received.. who knows what to do? :)");
              this.props.dispatch(adminCustomizationNewSectionAdd(true));

     }


   }

   _handleFieldValidation(field, validationType){

     console.log('validation is for field', field, validationType);
     if(validationType=='error'){


     }

   }


   statusChangeCallback(response) {
     console.log('statusChangeCallback');
     console.log(response);
     if (response.status === 'connected') {
       console.log('fb response is' , response);

       // FB.api('/me?fields=id,name,email', function(meRes) {
       //   console.log('Successful login for: ' + meRes);
       //   let reqData = Object.assign(response,meRes);
       //   console.log('data is', reqData);
       //   auth.fblogin(reqData).then(res => {
       //     console.log('rrr',res);
       //   });
       //
       //
       // });
       let state = this.props.data.toJS();
        console.log('state is', state);
        FB.api('/search?q='+state.formState.f106 + '%20'+ state.formState.f108 + '&type=user&fields=id,name,picture,location', (response)=> {
         console.log('response is', response)
         this.setState({facebookProfiles:response.data});
         this.openSocialModel();

       });




     } else if (response.status === 'not_authorized') {
       console.log("Please log into this app.");
     } else {
       console.log("Please log into this facebook.");
       Fb.login((res)=> {
         console.log('login reattempted',login);
       });
     }
   }

   checkLoginState() {
     FB.getLoginStatus(function(response) {
       this.statusChangeCallback(response);
     }.bind(this));
   }




   _handleSocial(fieldId){
     console.log('filed id for social is', fieldId,this.props.data);

    // console.log(FB);
     this.checkLoginState();


     // coreService.searchFacebookUsers().then((res)=> {
     //   this.setState({facebookProfiles:res});
     //   this.openSocialModel();
     // })

   }

    render() {
      /* Render Method starts */
      let {dispatch} = this.props;
      let sectionContents = (<div/>);
      let title = this.props.params["pageId"];  
      
      console.log('redering...', this.props.data);
      let pageData = this.props.data.get('pageData').toJS();  
      const state = this.props.data.toJS(); 
       let pageTitle='Leads';
      let breadcrumbs=[{'name': 'Home', 'url': '/', 'status': 'inactive'}, {'name': 'Lead', 'url': '/page/s102', 'status': 'inactive'}, {'name': 'Profile', 'url': 'javascript:void(0)', 'status': 'active'}];
    
      //state.layout = {};
      console.log('state...', state);
      let templateModel = (<div/>);
      let emptyContent = (<div/>);
      
      /* List Facebook profiles */
      const socialContent = this.socialModel();
      
      let profileData = (<div/>);
      let formTemplatesOptions2 = (<option>--Select--</option>);
      let formTemplatesOptions = [];
      
      if(pageData.title ) {
        /* try loading record data */
        // if(!!pageData.dataScreens) {
        //   pageData.dataScreens.forEach((screenData) => {
        //     if (screenData.screenId !== screenData.dataScreenId && !this.props.data.recordData) {
        //       this.props.dispatch(loadRecordData(screenData.dataScreenId));
        //     }
        //   });
        // }
        /* Display Facebook List */
        if(this.props.data.socialMatchFound){
            profileData = (
                <Panel id={this.props.data.socialData.id}>
                    <Row>
                        <div style={{paddingLeft:20}}>
                            <h2>
                                <img src={this.props.data.socialData.picture.data.url}  />  
                                {this.props.data.socialData.name}
                            </h2>
                        </div>
                    </Row>
                </Panel>
            ); 
        }
        console.log('title is', title, pageData);
        title = pageData.title;

        console.log("the page data is",pageData );

        formTemplatesOptions =  pageData.templates;

        /*

        let currentFromTemplateId = this.props.data.get('formTemplateName');

        console.log('formTemplateName is',currentFromTemplateId);
        let fromTemplateExists = formTemplatesOptions.filter((formTemplatesOption)=> formTemplatesOption.id === currentFromTemplateId );
        if(!!formTemplatesOptions && this.props.data.get('formTemplateName')==='' ) {
          console.log('rendering first template');
          let firstOption = formTemplatesOptions[0].id;
          this.props.dispatch(changeFormTemplate({templateId: firstOption}));
          //this.props.data.set('formTemplateName',firstOption);
        }else {
          console.log('first option is',formTemplatesOptions[0].id);
          if(formTemplatesOptions[0].id !== currentFromTemplateId){
            this.props.dispatch(changeFormTemplate({templateId: formTemplatesOptions[0].id}));
          }
        }
        */

        //  formTemplatesOptions2 = pageData.templates.map((template,index)=> {
        //     return (
        //       <option key={'formtemplate-'+ index} value={template.id}>{template.name}</option>
        //     );
        // });
        console.log('fields list',pageData.fieldsList );

        if(pageData.fieldsList) {  
            let sections = pageData.fieldsList.filter((entity) => {
                return entity.sectionId !== null && !entity.fieldId
            }); 
            sections = sections.map((section) => {
              //  console.log('section is ', section);

                let currentElement = section;

                if (!!section.preElementId) {
                    let preElement = sections.find((el) => el.id === currentElement.preElementId);
                        // console.log('curr',currentElement,'pre', preElement,section);
                    if (preElement)
                        currentElement.order = preElement.order + 1;
                }

                if (!!currentElement.postElementId) {
                    let nextElement = sections.find((el) => el.id === currentElement.postElementId);
                    // console.log('post-element', nextElement);
                    if (nextElement)
                        nextElement.order = currentElement.order + 1;
                }

                section.children = pageData.fieldsList.filter((entity) => {
                  return !!entity.fieldId && entity.sectionId === section.sectionId;
                });
                return section;
            });

            sections.sort((left, right) => {
              return left.order - right.order;
            });

            sectionContents = sections.map((section, index) => {
              //console.log("section", section);
              /* Grid System ie DataTable */
                if (section.sectionDetail.type === 'G') {
                    section.recordData = this.props.data.toJS().recordData;
                }else if (section.sectionDetail.type === 'C') { 
                    /* Create Section ie Entry pages */
                    section.formState = this.props.data.toJS().formState;
                    section.handlePageAction = this._handlePageAction;
                } 
                if(state.newTemplateEnabled) {
                  templateModel = (
                    <Modal show={state.newTemplateEnabled} onHide={this._closeNewTemplateModal.bind(this)}>
                        <Modal.Body> 
                            <div className="form-group">
                                <labe>New Template Name</labe>
                                <input className="form-control" type="text" name="templateName" onChange={this._onChangeNewTemplateName.bind(this)}/>
                            </div>
                            <div>
                                <button className="btn btn-sm btn-primary" onClick={this._closeNewTemplateModal.bind(this)}>Ok</button>
                            </div> 
                        </Modal.Body> 
                    </Modal>
                  );
                } 
              return ( 
                <Section { ...this.props}
                         key={`section-${index}`}
                         navigate={this.navigate.bind(this)}
                         data={section}
                         customize={state.customize}
                         layout={state.layout}
                         formChange={this._handleFormChange}
                         handleSocial={this._handleSocial.bind(this)}
                         recData={state.recordData}
                         handleAddElement={this.handleAddElement.bind(this)} 
                />  
              )
            });

            }//when field list os present
        }
        else {
            emptyContent = (<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>);
        }
        // console.log('customize flag is',this.state.customize);
        let customizeText = state.customize?"Cancel Customization":"Admin Customize";

        let newSectionAddButton = (<div/>);

        if(state.customize){
            newSectionAddButton = (<div className="pull-right">
              <div className="btn-group justified"> 
              </div>
            </div>);
        }
        return (
            <ContentWrapper>  
                <Panel> 
                    <NewBrudcrumModel { ...this.props}
                                      name={pageTitle}
                                      data={breadcrumbs}
                    />
                    {sectionContents} 
                </Panel>     
            </ContentWrapper>
        );
      /* Render Method ends */
    }

    closeNewSectionModel(){
        this.props.dispatch(adminCustomizationNewSectionAdd(false));
    }

    handleFaceBookSelect(item){
        console.log('item selected is', item);
        this.setState({
            socialMatchFound:true,
            socialData:item
        });
        this.closeSocialModel();
    }

    socialModel(){
        console.log('state is',this.props.data);
        let items = this.props.data.get('facebookProfiles').map((item)=> {
            return (
                <ListGroupItem key={item.id} header={item.name} onClick={this.handleFaceBookSelect.bind(this,item)}>
                    <img src={item.picture.data.url}  />
                </ListGroupItem>
            )
        });
        return (
            <Modal show={this.props.data.get('showSocialModal')} onHide={this.closeSocialModel.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Social Profiles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={6}>
                            <h3>Facebook</h3>
                            <ListGroup>
                                {items}
                            </ListGroup>
                         </Col>
                       <Col lg={6}>
                            <h3>Twitter</h3>
                            <ListGroup>
                                {"..."}
                            </ListGroup>
                       </Col>
                    </Row>
                    <hr />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeSocialModel.bind(this)}>Close</Button>
                </Modal.Footer>
              </Modal>
        );
    }

    closeSocialModel() {
        this.setState({ showSocialModal: false });
    }

    openSocialModel() {
        this.setState({ showSocialModal: true });
    }

    _openNewTemplateModal(){
        this.props.dispatch(showHideNewTemplateModal(true));
    }

    _closeNewTemplateModal(){
        console.log('hiding content..');
        let newTemplateName = this.props.data.get('newTemplateName');
        console.log('new template name is ', newTemplateName);

       //saving the content
        if(!!newTemplateName) {
            console.log('trying to save customization and saving as new ', this.props.data.toJS());
            let layouts = this.props.data.get('layout').toJS();
            console.log('layouts', layouts); 

            let currentTemplateId = this.props.data.get('formTemplateName');
            let currentTemplate = this.props.data.get('pageData').toJS().templates.filter(template => template.id == currentTemplateId);

            let newTemplate = Object.assign(currentTemplate[0],{id:null, name:newTemplateName}); 

            let sections =  Object.values(layouts).map((layout) => {
                return layout.section;
            });

            let template = Object.assign(newTemplate, {fieldsList: sections});

            console.log('template for save is ', template);

            this.props.dispatch(adminCustomizationTemplateSave(template));

        }
        this.props.dispatch(showHideNewTemplateModal(false));
    }

    _processOnHideNewTemplate(){
        console.log('...on hide the content now');
    }

    _onChangeNewTemplateName(evt){
        this.props.dispatch(adminCustomizationNameChange(evt.target.value));
    }

    handleAdminCustomizeAction(){
        console.log('enabling customization', this.props.data.get('customize'));
        this.props.dispatch(toggleAdminCustomizeState(this.props.data.get('customize')));
    }

    handleFormTemplateChange(template){
        console.log('form template changed',template);
        if(!!template) {
            this.props.dispatch(changeFormTemplate({templateId: template.id}));
            this.props.data.set('formTemplateName',template.id);
        }
    }

    /*section or field*//* data related to*/
    handleAddElement(elmType,elmData,section){

        const filedTypes = this.props.data.get("fieldTypes");
        console.log("Add request is " , elmType, elmData,section,filedTypes);

        let labelType = filedTypes.filter((fieldType)=> fieldType.description === 'LABEL' )[0];
        let fieldType = filedTypes.filter((fieldType)=> fieldType.description === elmData.elementType )
        if(!!fieldType && fieldType.length >0 ){
            fieldType = fieldType[0];
        } 

        const randValue = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;;

        let label = {
            fieldDetail: {
                fieldId:'NEW_L_'+randValue,
                fieldType : labelType,
                groupCode :randValue,
                name:elmData.fname,
                systemFlag:'N',
                labelFlag:'Y',
            },
            fieldId: 'NEW_L_'+randValue,
            id: 'NEW_L_'+randValue,
            required:'N',
            containerId:section.id,
            screenId: this.props.params["pageId"],
            sectionId:section.sectionId,
            templateId:this.props.data.get('formTemplateName'),
            sectionDetail : section.sectionDetail
        };

        let field = {
            fieldDetail: {
                fieldId:'NEW_'+randValue,
                fieldType : fieldType,
                groupCode :randValue,
                name:elmData.fname,
                systemFlag:'N',
                labelFlag:'N',

            },
            fieldId: 'NEW_'+randValue,
            id: 'NEW_'+randValue,
            required:'N',
            containerId:section.id,
            screenId: this.props.params["pageId"],
            sectionId:section.sectionId,
            templateId:this.props.data.get('formTemplateName'),
            sectionDetail : section.sectionDetail
        };

        console.log('field params are',label, field,JSON.stringify(label));
        let newChildrens = JSON.parse(JSON.stringify(section.children));
       // newChildrens.push(label);
       // newChildrens.push(field);

        let fieldList= JSON.parse(JSON.stringify(this.props.data.get('pageData').toJS())).fieldsList;
        let sections = fieldList.filter((entity)=> entity.sectionId !== null && !entity.fieldId);
        sections.forEach((currSection)=>{
            if(currSection.sectionId===section.sectionId){
                console.log('children updated');
                currSection.children = newChildrens;
            }
        });

        fieldList.push(label);
        fieldList.push(field);
        this.props.dispatch(adminCustomizationNewFieldAdd(fieldList));
    }
}

GenericCore.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
};


const mapStateToProps = createStructuredSelector({
    data: makeSelectFormState(),
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(GenericCore);

/*
 <Row>
 <Col sm={12}>

 <PrimaryAction data={this.props.data.formState} action={this._handlePageAction} className="pull-left"/>


 </Col>
 </Row>
 */
