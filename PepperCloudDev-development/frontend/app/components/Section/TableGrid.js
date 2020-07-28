import React from 'react';
import { Grid, Row, Collapse, Col, Panel, Well, Form, ControlLabel, Button, ButtonToolbar, FormControl, FormGroup, InputGroup, DropdownButton, MenuItem, SplitButton } from 'react-bootstrap';

//import {AgGridReact} from 'ag-grid-react';
//import 'ag-grid-enterprise';
import ReactTable from 'react-table';
import 'script-loader!../../../app/assets/js/jquery-3.3.1.js';
import 'script-loader!../../../app/assets/js/jquery.dataTables.min.js';
import 'script-loader!../../../app/assets/js/dataTables.colReorder'; 
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';
import $ from 'jquery';
$.DataTable = require('datatables.net');


// create your cellRenderer as a React component
class NameCellRenderer extends React.Component {
    render() {
        // put in render logic
        return <span>{"W" + this.props.value}</span>;
    }
}




class TableGrid extends React.PureComponent {

    constructor(props) {
        super(props);

        this.gridOptions = {

            enableColResize: true,
            headerHeight: 40,
            rowSelection: 'multiple',
            onSelectionChanged: this.onSelectionChanged


        };

        this.state = {};
    }

    componentWillMount() {
        console.log('table', this.props);
    }

    render() {

        let columnDefs = this.columnDefinitions();
        let records = this.getRowData();
        let icons = this.getGridIcons();
        let advFilters = this.advFilterContent();

        console.log('columns are', columnDefs, records);
         {/*<ReactTable*/}
         {/*columns={columnDefs}*/}
         {/*data={records}*/}
         {/*minRows={10}*/}
         {/*getTdProps={this.onCellClicked.bind(this)}*/}
         {/*getTrProps={this.rowProperites.bind(this)}*/}
         {/*filterable className="-striped -highlight"*/}
         {/*/>*/}
        return (
                <div style={{width: '100%'}}>  
                    <div style={{height: 400}} className="ag-blue">
                        <table id="table" className="display" cellSpacing="0" width="100%"> 
                            <thead>
                                {this.getColumns()}
                            </thead> 
                        </table>   
                    </div>   
                </div>
                                        ); 
                            }

                            getRowData() {

                                let records = this.props.data.recordData;

                                console.log('records are', records);
                                if (!!records) {
                                    let _count = 1;
                                    return records.map((record) => {
                                        let rec = {id: record.trnId};
                                        record.records.forEach((recFld) => {
                                            rec[recFld.fieldId] = recFld.textValue;
                                            rec['ttf'] = '<font color="red" >' + recFld.textValue + '</font>';
                                        });
                                        rec['slno'] = _count++;

                                        rec['f157'] = record.createdAt;
                                        return rec;
                                    })
                                }

                                return [];
                            }

                            getRowDatatable() {

                                let records = this.props.data.recordData;
                                console.log('records are', records);
                                if (!!records) { 
                                    return records.map((record) => {
                                        let rec = [];
                                        record.records.forEach((recFld) => {
                                            rec.push(recFld.textValue);
                                        });
                                        return rec;
                                    });
                                } else {
                                    return [];
                                }
                            }

                            tooltipRenderer(params) {
                                return '<span title="' + params.value + '">' + params.value + '</span>';
                            }
                            
                            

                            componentDidMount() {   
                                var self = this; 
                               var table= $('#table').DataTable({
                                    colReorder: true,
                                     serverSide: true, 
                                     bLengthChange : true,
                                      searching: true,
                                    ajax: {
                                        url: "http://192.168.1.206:3000/api/core/records/listTransactions/s101",
                                        type: "POST",
                                        data: {}
                                    },
                                    columns: [
                                        {
                                            "data": "id",
                                        },
                                        {
                                            "data": "fieldId",
                                        },
                                        {
                                            "data": "textValue",
                                        },
                                          {
                                            "data": "textValue",
                                        }, {
                                            "data": "textValue",
                                        }, {
                                            "data": "textValue",
                                        }, {
                                            "data": "textValue",
                                        }, {
                                            "data": "textValue",
                                        }
                                    ]
                                }); 
                                $('#table tbody').on( 'click', 'tr td:nth-child(1)', function () { 
                                    console.log("Table row click event listener "+ JSON.stringify(table.row( $(this).parents('tr') ).data()));
                                    self.navigateLeadDetail({user:JSON.stringify(table.row( $(this).parents('tr') ).data())});
                                } );
                            }
                            
                            navigateLeadDetail(data){
                                this.props.navigate('/leadDetail',data);
                                 
                            }
                            columnDefinitions() {
                                if (this.props.data) {
                                    let elems = this.props.data.children;
                                    // console.log('childrens are', elems);
                                    this.groupAndSortHeaders(elems); 
                                    let columns = elems.filter((elm) => elm.fieldId != 'f000011' && elm.fieldId != 'f000012').map((elem) => {
                                        //const label = <FormattedMessage id={elem.fieldLabelOnScreen}/>;
                                        const label = this.props.intl.formatMessage({id: elem.fieldLabelOnScreen});
                                        let tooltipRenderer = this.tooltipRenderer;
                                        return {Header: label, accessor: elem.fieldId 
                                            , filterMethod: (filter, row) => row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value)
                                        }
                                    }); 
                                    return [{Header: '#', accessor: 'slno', width: 30, checkboxSelection: true, suppressSorting: true, pinned: true}, ...columns];
                                } else
                                    return [];
                            }

                            getColumns() {
                                if (this.props.data) {
                                    let elems = this.props.data.children;
                                    let columns = elems.filter((elm) => elm.fieldId != 'f000011' && elm.fieldId != 'f000012').map((elem,index) => {
                                        return <th key={index}>{this.props.intl.formatMessage({id: elem.fieldLabelOnScreen})}</th>;
                                    });
                                    return <tr>{columns}</tr>;

                                } else
                                    return [];
                            }

                            //Shorting the content of the section
                            groupAndSortHeaders(childrens) {

                                childrens.forEach((fieldLabel) => {

                                    let currentElement = fieldLabel;
                                    //console.log('current', currentElement );

                                    if (!!currentElement.preElementId) {
                                        let preElement = childrens.find((el) => el.id == currentElement.preElementId);
                                        // console.log('pre-element-field', preElement);
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

                            onGridReady(params) {
                                this.api = params.api;
                                this.columnApi = params.columnApi;
                                //this.api.showNoRowsOverlay();
                            }

                            onRowSelected(row) {

                            }

                            onCellClicked(state, rowInfo, column, instance) {

                                return{
                                    onDoubleClick: e => {
                                        console.log('A Td Element was clicked!');
                                        console.log('it produced this event:', e);
                                        console.log('It was in this column:', column);
                                        console.log('It was in this row:', rowInfo);
                                        console.log('It was in this table instance:', instance); 
                                        this.props.navigate('/leadDetail', rowInfo);
                                    }
                                }

                            }

                            rowProperites(state, rowInfo, column) {

                                let rowStyle = {};

                                if (rowInfo) {
                                    rowStyle = {
                                        background: rowInfo["selected"] ? 'green' : 'red'
                                    };
                                }

                                return{
                                    onClick: e => {
                                        rowInfo["selected"] = !rowInfo["selected"];
                                        console.log('It was in this row:', rowInfo, state);

                                    }
                                }
                            }

                            getGridIcons() {
                                return  {
                                    columnRemoveFromGroup: '<i class="fa fa-remove"/>',
                                    filter: '<i class="fa fa-filter"/>',
                                    sortAscending: '<i class="fa fa-long-arrow-down"/>',
                                    sortDescending: '<i class="fa fa-long-arrow-up"/>',
                                    groupExpanded: '<i class="fa fa-minus-square-o"/>',
                                    groupContracted: '<i class="fa fa-plus-square-o"/>',
                                    columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                                    columnGroupClosed: '<i class="fa fa-plus-square-o"/>'
                                }
                            }

                            exportHandler() {
                                //console.log("rows are",this.api.getSelectedRows().length);
                                let params = {};
                                if (this.api.getSelectedRows().length == 0) {
                                    params.allColumns = true;
                                } else {
                                    params.onlySelected = true;
                                }

                                this.api.exportDataAsCsv(params);
                            }

                            printHandler() {
                                console.log('printing');

                                window.print();
                            }

                            advFilterContent() {
                                return (
                                        <Row>
                                            <Col lg={12}>
                                            <div className="pull-right">
                                                <div className="btn-link" onClick={ () => this.setState({advFilterOpen: !this.state.advFilterOpen })}>
                                                    Filter By
                                                </div>
                                                <Collapse in={this.state.advFilterOpen}>
                                                    <div>
                                                        <Well>
                                                            <div >
                                                                <FormGroup controlId="formInlineCreated">
                                                                    <ControlLabel>Created</ControlLabel>
                                                                    {' '}
                                                                    <FormControl componentClass="select" placeholder="select">
                                                                        <option value="CTD">Created today</option>
                                                                        <option value="CL7">Created in last 7 days</option>
                                                                        <option value="CTM">Created this month</option>
                                                                        <option value="CLM">Created last month</option>
                                                                        <option value="CLQ">Created last quater</option>
                                                                        <option value="CLY">Created last year</option>
                                                                        <option value="CFT">Date Range</option>
                                                                    </FormControl>
                                                                </FormGroup>
                                        
                                                                <FormGroup className="ml-lg" controlId="formInlineOwner">
                                                                    <ControlLabel>Owner</ControlLabel>
                                                                    {' '}
                                                                    <FormControl componentClass="select" placeholder="select">
                                                                        <option value="NCT">User1</option>
                                                                        <option value="UNQ">User2</option>
                                                                        <option value="STR">User3</option>
                                                                        <option value="WRK">User4</option>
                                                                        <option value="QLF">User5</option>
                                        
                                                                    </FormControl>
                                                                </FormGroup>
                                        
                                                                <FormGroup className="ml-lg" controlId="formInlineStatus">
                                                                    <ControlLabel>Status</ControlLabel>
                                                                    {' '}
                                                                    <FormControl componentClass="select" placeholder="select">
                                                                        <option value="NCT">Not Contacted</option>
                                                                        <option value="UNQ">Unqualified</option>
                                                                        <option value="STR">Start</option>
                                                                        <option value="WRK">Working</option>
                                                                        <option value="QLF">Qualified</option>
                                        
                                                                    </FormControl>
                                                                </FormGroup>
                                                            </div>
                                                            {' '}
                                                            <Button type="button">
                                                                Filter
                                                            </Button>
                                                           
                                        
                                                        </Well>
                                                    </div>
                                                </Collapse>
                                        
                                            </div>
                                            </Col>
                                        </Row>
                                            );
                                }

                            }

                            TableGrid.propTypes = {
                                data: React.PropTypes.object,
                            };

                            export default injectIntl(TableGrid);
