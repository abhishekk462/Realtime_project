import React from 'react';
import { Grid, Collapse,Row, Col, Panel, Button, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem,SplitButton } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ReactGridLayout from 'react-grid-layout';
import FormElement from '../FormElement';
import TableGrid from './TableGrid';
import PrimaryAction from 'components/PrimaryAction';
import NewField from './NewField';

import {adminCustomizationLayoutChange} from 'containers/GenericCore/actions';

class Section extends React.PureComponent{

  constructor(props) {
    super(props);

    this.state = {newElements:[]};
  }


  componentWillMount(){
    this.groupAndSortContents(this.props.data.children);

  }

  saveNewField(field){
    console.log('new field is', field);
  }


  handleNewFieldModelClose() {
    this.setState({ showModal: false });
  }

  handleNewFieldModelOpen() {
    this.setState({ showModal: true });
    console.log('showing model', this.state);

  }

  handleNewFieldSave(values){
    // Do something with the form values
    console.log('vales are',values);
    this.props.handleAddElement('FIELD',values.toJS(),this.props.data);
    this.handleNewFieldModelClose();
  }


  render() {


    let content = (<div>No content</div>);

    // if we have data then render them
    if (this.props.data) {

      let sectionData = this.props.data;

      console.log('section data is', sectionData);
      this.groupAndSortContents(this.props.data.children);

      let formGroupContents = this.prepareFormContents(this.props.data.children, this.props.formChange);


      let sectionType = sectionData.sectionDetail.type;


      content = this.frameSectionBody(sectionData.sectionDetail);


      return content;
    }

  }

  frameSectionBody(sectionDetail){ 
    switch (sectionDetail.type){

      case 'P':

        let panelHeader = (
          <div onClick={ ()=> this.setState({ open: !this.state.open })}>
          <FormattedMessage id={sectionDetail.labelKey}/>
          </div>
        );


        let formGroupContents = this.prepareFormContents(this.props.data.children,this.props.formChange);

        let additionalBtn = (<div></div>);


      //   let  layout = [
      //     { i:'section-form-label-0',x: 0, y: 0, w: 1, h: 1},
      //     {i:'section-form-label-1', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-2',x: 0, y: 1, w: 1, h: 1},
      //     {i:'section-form-label-3', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-4',x: 0, y: 1, w: 1, h: 1},
      //     {i:'section-form-label-5', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-6',x: 0, y: 0, w: 1, h: 1},
      //     {i:'section-form-label-7', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-8',x: 0, y: 0, w: 1, h: 1},
      //     {i:'section-form-label-9', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-10',x: 0, y: 0, w: 1, h: 1},
      //     {i:'section-form-label-11', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-12',x: 0, y: 0, w: 1, h: 1},
      //     {i:'section-form-label-13', x: 1, y: 1, w: 1, h: 1},
      //     { i:'section-form-label-14',x: 0, y: 0, w: 1, h: 1},
      //     {i:'section-form-label-15', x: 1, y: 1, w: 1, h: 1},
      //
      // ];

        let layout = [];

        let panelContent = formGroupContents;



        if(this.props.customize){

        //  console.log('childrens',this.props.data.children);
          layout = [];

          let labels = [];
          this.props.data.children.forEach((item,index) => {
            if (item.fieldDetail.labelFlag == 'Y') {
              labels.push(item);
            }
          });

          labels.forEach((item,index) => {

            layout.push({i: 'section-form-label-' + item.id, x:(index % 2) , y: Math.floor(index / 2), h: 1, w: 1})

          });

          panelContent = (
            <ReactGridLayout className="layout"
                             onLayoutChange={this.onLayoutChange.bind(this)}

                             layout={layout} cols={2} rowHeight={40} width={900}>
              {formGroupContents}
            </ReactGridLayout>
          );

          additionalBtn = (
            <Row key={"addbtn-"+sectionDetail.labelKey}>
              <Col lg={12}>
                <div className="pull-right mr-lg">
                  <Button bsSize="small" onClick={this.handleNewFieldModelOpen.bind(this)}><em className="fa fa-plus"/></Button>
                </div>

                <NewField
                  show={this.state.showModal}
                  saveNewField={this.saveNewField.bind(this)}
                  sectionId={this.props.data.id}
                  close={this.handleNewFieldModelClose.bind(this)}
                  onSubmit={this.handleNewFieldSave.bind(this)}
                />

              </Col>
            </Row>

          );
        }

        let collapsable = ( <div/>);
        if(this.state.open){
          collapsable = (<div className="hidden-el">
            {panelContent}
          </div>);
        }else{
          collapsable=(<div className={"shown-el"}>
            {panelContent}
          </div>)
        }

            return (
              <Panel header={panelHeader} >
                <Row>

                  {collapsable}

                  {additionalBtn}
                </Row>
              </Panel>
            );
        break;

      case 'C':

        let sectionContents =    this.prepareActionTypeSection(this.props.data.children);

            return(
              <div className="">

                {sectionContents}
                </div>
            );
        break;
      case 'G' :
          
            return( 
              <TableGrid data={this.props.data} recData={this.props.recData} {...this.props}/> 
            );
         break;

      default:
            return (<div></div>);
    }
  }


//Shorting the content of the section
  groupAndSortContents(childrens){

    childrens.forEach((fieldLabel) => {

      let currentElement = fieldLabel;
      //console.log('current', currentElement );

      if (!!currentElement.preElementId) {
        let preElement = childrens.find((el) => el.id == currentElement.preElementId);
        // console.log('pre-element-field', preElement);
        if(!!preElement)
        currentElement.order = preElement.order + 1;
      }

      if (!!currentElement.postElementId) {
        let nextElement = childrens.find((el) => el.id == currentElement.postElementId);
        // console.log('post-element-field', nextElement);
        if (nextElement) {
          nextElement.order = currentElement.order + 1;
        }
      }

    });

    childrens.sort((left, right) => {
      return left.order - right.order;
    });


  }



  //prepare form contents
  prepareFormContents(childElements,formChange){
    let formData = {};
   // console.log('***child elements', childElements);
    return childElements.filter((entity) => entity.fieldDetail.labelFlag == 'Y')
      .map((label, labelIndex) => {
        let fieldsForLabel = childElements.filter((entity) => entity.fieldDetail.labelFlag === 'N' && entity.fieldDetail.groupCode == label.fieldDetail.groupCode);

        const fieldColumns = fieldsForLabel.map((field, index) => (

          <Col key={`section-field-col-${field.id}`} lg={8/fieldsForLabel.length}>
            <FormElement data={field.fieldDetail}
                         formChange={formChange}
                         formData={formData}
                         customize={this.props.customize}
                         handleSocial={this.props.handleSocial}
                         originalLabel={label}/>
          </Col>

        ));

        let labelDisplay = '';
        if(!!label.fieldDetail.labelKey){
          labelDisplay = (<FormattedMessage id={label.fieldDetail.labelKey}/>);
        }else{
          labelDisplay = label.fieldDetail.name;
        }

        return (
          <Col sm={ 6 } key={`section-form-label-${label.id}`}>
            <FormGroup validationState={label.validationState}>

              <label className="col-lg-4 control-label"> {labelDisplay} </label>


              {fieldColumns}


              <FormControl.Feedback />

            </FormGroup>
          </Col>
        );

      });
  }

  prepareActionTypeSection(childElements){
   // console.log('child element is ', childElements);


    return childElements.map((childElement)=> {

        const actType = childElement.fieldDetail.fieldType.description;
      //  console.log(actType,childElement);

        if("BTN_GRP_ENTRY" == actType){
          return (
            <div key={`section-action-${childElement.id}`}>
              <Row>
                <Col sm={12}>
              <PrimaryAction
                data={this.props.data.formState}
                action={this.props.data.handlePageAction}
                customize={this.props.customize}
                className="pull-left mb-lg"/>
                </Col>
              </Row>
            </div>
          );
        }

        return (<dev  key={`section-action-${childElement.id}`} />);
    });
  }


  onLayoutChange(layout){

   // this.props.layout[this.props.data.id] = {section:this.props.data,layout:layout};
   let childrens = JSON.parse(JSON.stringify(this.props.data.children));
    console.log('prop layout is',this.props,childrens);


    layout.sort((a,b)=> {
      return (10 * (a.y - b.y)) + (a.x-b.x);
    });

    let size = layout.length;
    for(let n=0; n<size ; n++){
      let item = layout[n];
      let id = item.i.substr(19);
      let fieldLabel = childrens.filter((currItem)=> currItem.id === id)[0];
      let field = childrens.filter((currItem)=> (currItem.fieldDetail.groupCode === fieldLabel.fieldDetail.groupCode)&& currItem.fieldDetail.labelFlag === 'N')[0];

      if(n===0){
        fieldLabel.order = 1;
        field.order = 2;
        fieldLabel.preElementId = null;
        field.postElementId = layout[n+1].i.substr(19);
      }else if(n === size-1){
        field.order = (n+1)*2;
        fieldLabel.order = (n+1)*2-1;
        field.preElementId = layout[n-1].i.substr(19);
        field.postElementId = null;
      }else {
        let prevLabelId = layout[n-1].i.substr(19);
        let prevFieldLabel = childrens.filter((currItem)=> currItem.id === prevLabelId)[0];
        let prevField = childrens.filter((currItem)=> (currItem.fieldDetail.groupCode === prevFieldLabel.fieldDetail.groupCode)&& currItem.fieldDetail.labelFlag === 'N')[0];
        fieldLabel.order = (n+1)*2-1;
        field.order = (n+1)*2;
        fieldLabel.preElementId = prevField.id;
        field.postElementId = layout[n+1].i.substr(19);

      }

    }

    layout.forEach(item => {
      let id = item.i.substr(19);
      let fieldLabel = childrens.filter((currItem)=> currItem.id === id)[0];
      let field = childrens.filter((currItem)=> (currItem.fieldDetail.groupCode === fieldLabel.fieldDetail.groupCode)&& currItem.fieldDetail.labelFlag === 'N')[0];

      console.log('item', id, fieldLabel,field, item);
    });

   let modifiedSection = Object.assign(JSON.parse(JSON.stringify(this.props.data)),{children : childrens});

    this.props.dispatch(adminCustomizationLayoutChange({id:this.props.data.id,section:modifiedSection,layout:layout  }));
    console.log(layout);



  }

}

Section.propTypes = {
  data : React.PropTypes.object,
  formChange : React.PropTypes.func,
  dispatch: React.PropTypes.func
};

export default Section;
