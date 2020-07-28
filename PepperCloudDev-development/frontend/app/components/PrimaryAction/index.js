import React from 'react';
import { OverlayTrigger, Tooltip, Col, Panel,Glyphicon, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem,SplitButton } from 'react-bootstrap';



function PrimaryAction(props) {
  let content = (<div>No content</div>);


  console.log('button props', props);

  let saveIcon=(<span><em className="fa fa-save" />&nbsp; Save </span>);

  const tbdTooltip = (
    <Tooltip id="tooltip"><strong>Hola!</strong> In Active <u>Development</u> Yet..</Tooltip>
  );

  const createNewSectionTooltip = (
    <Tooltip id="tooltip"><strong>Create</strong> new Section</Tooltip>
  );

  if(props.customize){

    content = (
      <div className={props.className}>


        <SplitButton bsStyle="primary" title={ saveIcon } key={ 1} id={"save-action" } onClick={_handleSaveCustomizationAction}>

          <MenuItem eventKey="2" onClick={_handleSaveAsNewTemplateAction}>
            <Glyphicon glyph="star"/> Save as New Template
          </MenuItem>

        </SplitButton>

        &nbsp;&nbsp;



        <button type="button" className=" mr-sm btn btn-default " onClick={_handleCancelAction}>
          <sapn><em className="fa fa-ban"/>&nbsp;Cancel</sapn>
        </button>
        <OverlayTrigger placement="top" overlay={createNewSectionTooltip}>
        <Button bsStyle="info" onClick={()=> {props.action('NEW_SECTION',{})}}>Add New Section</Button>
        </OverlayTrigger>
        &nbsp;&nbsp;

        <OverlayTrigger placement="right" overlay={tbdTooltip}>
          <Button bsStyle="info" onClick={()=> {props.action('NEW_FIELD',{})}}>Add New Field</Button>
        </OverlayTrigger>

      </div>
    );
  }else {
    content = (

      <div className={props.className}>


        <SplitButton bsStyle="primary" title={ saveIcon } key={ 1} id={"save-action" } onClick={_handleSaveAction}>

          <MenuItem eventKey="2" onClick={_handleSaveAndNewAction}>
            <Glyphicon glyph="star"/> Save and New
          </MenuItem>
          <MenuItem eventKey="3" onClick={_handleSaveAndExport}>
            Save and Export
          </MenuItem>

          <MenuItem eventKey="4" onClick={_handleSaveAndPrint}>
            Save and Print
          </MenuItem>
        </SplitButton>

        &nbsp;&nbsp;


        <button type="button" className=" mr-sm btn btn-default " onClick={_handleCancelAction}>
          <sapn><em className="fa fa-ban"/>&nbsp;Cancel</sapn>
        </button>
        <button type="button" className=" mr-sm btn btn-default " onClick={_handleResetAction}><span><em
          className="fa fa-window-restore"/>&nbsp;Reset </span></button>
        <button type="button" className=" mr-sm btn btn-default " onClick={_handleGotoAction}><span><em
          className="fa fa-list"/>&nbsp;Go to List </span></button>


      </div>
    );
  }

  return content;

  /// private methods

  function _handleAction(event){
    props.action(event.target,{});
  }

  function _handleSaveCustomizationAction(event){
    props.action('SC',{});
  }

  function _handleSaveAsNewTemplateAction() {
    props.action('SCN',{});
  }

  function _handleSaveAction(event){
    props.action('S',{});
  }

  function _handleSaveAndNewAction(event){
    props.action('S',{});
  }

  function _handleSaveAndExport(event){
    props.action('S',{});
  }


  function _handleSaveAndPrint(event){
    props.action('S',{});
  }


  function _handleCancelAction(event){
    props.action('C',{});
  }


  function _handleResetAction(event){
    props.action('R',{});
  }


  function _handleGotoAction(event){
    props.action('G',{});
  }



}

PrimaryAction.propTypes = {
  data : React.PropTypes.object,

};

export default PrimaryAction;
