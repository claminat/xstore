//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
  <div className="page-header">
    <h1>
      Form Elements
      <small>
        <i className="ace-icon fa fa-angle-double-right" />
        Common form elements and layouts
      </small>
    </h1>
  </div>{/* /.page-header */}
  <div className="row">
    <div className="col-xs-12">
      {/* PAGE CONTENT BEGINS */}
      <form className="form-horizontal" role="form">
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Text Field </label>
          <div className="col-sm-9">
            <input type="text" id="form-field-1" placeholder="Username" className="col-xs-10 col-sm-5" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1-1"> Full Length </label>
          <div className="col-sm-9">
            <input type="text" id="form-field-1-1" placeholder="Text Field" className="form-control" />
          </div>
        </div>
        <div className="space-4" />
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-2"> Password Field </label>
          <div className="col-sm-9">
            <input type="password" id="form-field-2" placeholder="Password" className="col-xs-10 col-sm-5" />
            <span className="help-inline col-xs-12 col-sm-7">
              <span className="middle">Inline help text</span>
            </span>
          </div>
        </div>
        <div className="space-4" />
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-input-readonly"> Readonly field </label>
          <div className="col-sm-9">
            <input readOnly type="text" className="col-xs-10 col-sm-5" id="form-input-readonly" defaultValue="This text field is readonly!" />
            <span className="help-inline col-xs-12 col-sm-7">
              <label className="middle">
                <input className="ace" type="checkbox" id="id-disable-check" />
                <span className="lbl"> Disable it!</span>
              </label>
            </span>
          </div>
        </div>
        <div className="space-4" />
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-4">Relative Sizing</label>
          <div className="col-sm-9">
            <input className="input-sm" type="text" id="form-field-4" placeholder=".input-sm" />
            <div className="space-2" />
            <div className="help-block" id="input-size-slider" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-5">Grid Sizing</label>
          <div className="col-sm-9">
            <div className="clearfix">
              <input className="col-xs-1" type="text" id="form-field-5" placeholder=".col-xs-1" />
            </div>
            <div className="space-2" />
            <div className="help-block" id="input-span-slider" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right">Input with Icon</label>
          <div className="col-sm-9">
            <span className="input-icon">
              <input type="text" id="form-field-icon-1" />
              <i className="ace-icon fa fa-leaf blue" />
            </span>
            <span className="input-icon input-icon-right">
              <input type="text" id="form-field-icon-2" />
              <i className="ace-icon fa fa-leaf green" />
            </span>
          </div>
        </div>
        <div className="space-4" />
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-6">Tooltip and help button</label>
          <div className="col-sm-9">
            <input data-rel="tooltip" type="text" id="form-field-6" placeholder="Tooltip on hover" title="Hello Tooltip!" data-placement="bottom" />
            <span className="help-button" data-rel="popover" data-trigger="hover" data-placement="left" data-content="More details." title="Popover on hover">?</span>
          </div>
        </div>
        <div className="space-4" />
        <div className="form-group">
          <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-tags">Tag input</label>
          <div className="col-sm-9">
            <div className="inline">
              <input type="text" name="tags" id="form-field-tags" defaultValue="Tag Input Control" placeholder="Enter tags ..." />
            </div>
          </div>
        </div>
        <div className="clearfix form-actions">
          <div className="col-md-offset-3 col-md-9">
            <button className="btn btn-info" type="button">
              <i className="ace-icon fa fa-check bigger-110" />
              Submit
            </button>
            &nbsp; &nbsp; &nbsp;
            <button className="btn" type="reset">
              <i className="ace-icon fa fa-undo bigger-110" />
              Reset
            </button>
          </div>
        </div>
        <div className="hr hr-24" />
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">Text Area</h4>
                <div className="widget-toolbar">
                  <a href="#" data-action="collapse">
                    <i className="ace-icon fa fa-chevron-up" />
                  </a>
                  <a href="#" data-action="close">
                    <i className="ace-icon fa fa-times" />
                  </a>
                </div>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div>
                    <label htmlFor="form-field-8">Default</label>
                    <textarea className="form-control" id="form-field-8" placeholder="Default Text" defaultValue={""} />
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-9">With Character Limit</label>
                    <textarea className="form-control limited" id="form-field-9" maxLength={50} defaultValue={""} />
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-11">Autosize</label>
                    <textarea id="form-field-11" className="autosize-transition form-control" defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>{/* /.span */}
          <div className="col-xs-12 col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">Masked Input</h4>
                <span className="widget-toolbar">
                  <a href="#" data-action="settings">
                    <i className="ace-icon fa fa-cog" />
                  </a>
                  <a href="#" data-action="reload">
                    <i className="ace-icon fa fa-refresh" />
                  </a>
                  <a href="#" data-action="collapse">
                    <i className="ace-icon fa fa-chevron-up" />
                  </a>
                  <a href="#" data-action="close">
                    <i className="ace-icon fa fa-times" />
                  </a>
                </span>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div>
                    <label htmlFor="form-field-mask-1">
                      Date
                      <small className="text-success">99/99/9999</small>
                    </label>
                    <div className="input-group">
                      <input className="form-control input-mask-date" type="text" id="form-field-mask-1" />
                      <span className="input-group-btn">
                        <button className="btn btn-sm btn-default" type="button">
                          <i className="ace-icon fa fa-calendar bigger-110" />
                          Go!
                        </button>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-mask-2">
                      Phone
                      <small className="text-warning">(999) 999-9999</small>
                    </label>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ace-icon fa fa-phone" />
                      </span>
                      <input className="form-control input-mask-phone" type="text" id="form-field-mask-2" />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-mask-3">
                      Product Key
                      <small className="text-error">a*-999-a999</small>
                    </label>
                    <div className="input-group">
                      <input className="form-control input-mask-product" type="text" id="form-field-mask-3" />
                      <span className="input-group-addon">
                        <i className="ace-icon fa fa-key" />
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-mask-4">
                      Eye Script
                      <small className="text-info">~9.99 ~9.99 999</small>
                    </label>
                    <div>
                      <input className="input-medium input-mask-eyescript" type="text" id="form-field-mask-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* /.span */}
          <div className="col-xs-12 col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">Select Box</h4>
                <span className="widget-toolbar">
                  <a href="#" data-action="settings">
                    <i className="ace-icon fa fa-cog" />
                  </a>
                  <a href="#" data-action="reload">
                    <i className="ace-icon fa fa-refresh" />
                  </a>
                  <a href="#" data-action="collapse">
                    <i className="ace-icon fa fa-chevron-up" />
                  </a>
                  <a href="#" data-action="close">
                    <i className="ace-icon fa fa-times" />
                  </a>
                </span>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div>
                    <label htmlFor="form-field-select-1">Default</label>
                    <select className="form-control" id="form-field-select-1">
                      <option value />
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-select-2">Multiple</label>
                    <select className="form-control" id="form-field-select-2" multiple="multiple">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="form-field-select-3">Chosen</label>
                    <br />
                    <select className="chosen-select form-control" id="form-field-select-3" data-placeholder="Choose a State...">
                      <option value></option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <hr />
                  <div>
                    <div className="row">
                      <div className="col-sm-6">
                        <span className="bigger-110">Multiple</span>
                      </div>{/* /.span */}
                      <div className="col-sm-6">
                        <span className="pull-right inline">
                          <span className="grey">style:</span>
                          <span className="btn-toolbar inline middle no-margin">
                            <span id="chosen-multiple-style" data-toggle="buttons" className="btn-group no-margin">
                              <label className="btn btn-xs btn-yellow active">
                                1
                                <input type="radio" defaultValue={1} />
                              </label>
                              <label className="btn btn-xs btn-yellow">
                                2
                                <input type="radio" defaultValue={2} />
                              </label>
                            </span>
                          </span>
                        </span>
                      </div>{/* /.span */}
                    </div>
                    <div className="space-2" />
                    <select multiple className="chosen-select form-control" id="form-field-select-4" data-placeholder="Choose a State...">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* /.span */}
        </div>{/* /.row */}
        <div className="space-24" />
        <h3 className="header smaller lighter blue">
          Checkboxes &amp; Radio
          <small>All Checkboxes, Radios and Switch Buttons Are Pure CSS</small>
        </h3>
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <div className="control-group">
              <label className="control-label bolder blue">Checkbox</label>
              <div className="checkbox">
                <label>
                  <input name="form-field-checkbox" type="checkbox" className="ace" />
                  <span className="lbl"> choice 1</span>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input name="form-field-checkbox" type="checkbox" className="ace" />
                  <span className="lbl"> choice 2</span>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input name="form-field-checkbox" className="ace ace-checkbox-2" type="checkbox" />
                  <span className="lbl"> choice 3</span>
                </label>
              </div>
              <div className="checkbox">
                <label className="block">
                  <input name="form-field-checkbox" disabled type="checkbox" className="ace" />
                  <span className="lbl"> disabled</span>
                </label>
              </div>
              <div className="checkbox">
                <label className="block">
                  <input name="form-field-checkbox" type="checkbox" className="ace input-lg" />
                  <span className="lbl bigger-120"> large checkbox</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="control-group">
              <label className="control-label bolder blue">Radio</label>
              <div className="radio">
                <label>
                  <input name="form-field-radio" type="radio" className="ace" />
                  <span className="lbl"> radio option 1</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input name="form-field-radio" type="radio" className="ace" />
                  <span className="lbl"> radio option 2</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input name="form-field-radio" type="radio" className="ace" />
                  <span className="lbl"> radio option 3</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input disabled name="form-field-radio" type="radio" className="ace" />
                  <span className="lbl"> disabled</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input name="form-field-radio" type="radio" className="ace input-lg" />
                  <span className="lbl bigger-120"> large radio</span>
                </label>
              </div>
            </div>
          </div>
        </div>{/* /.row */}
        <hr />
        <div className="form-group">
          <label className="control-label col-xs-12 col-sm-3">On/Off Switches</label>
          <div className="controls col-xs-12 col-sm-9">
            <div className="row">
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-2" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-3" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch" type="checkbox" />
                  <span className="lbl" data-lbl="CUS       TOM" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-4" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-5" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-6" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-7" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch btn-rotate" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-4 btn-rotate" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-4 btn-empty" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
              <div className="col-xs-3">
                <label>
                  <input name="switch-field-1" className="ace ace-switch ace-switch-4 btn-flat" type="checkbox" />
                  <span className="lbl" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">Custom File Input</h4>
                <div className="widget-toolbar">
                  <a href="#" data-action="collapse">
                    <i className="ace-icon fa fa-chevron-up" />
                  </a>
                  <a href="#" data-action="close">
                    <i className="ace-icon fa fa-times" />
                  </a>
                </div>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input type="file" id="id-input-file-2" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input multiple type="file" id="id-input-file-3" />
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" name="file-format" id="id-file-format" className="ace" />
                    <span className="lbl"> Allow only images</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">jQuery UI Sliders</h4>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div className="row">
                    <div className="col-xs-3 col-md-2">
                      <div id="slider-range" />
                    </div>
                    <div className="col-xs-9 col-md-10">
                      <div id="slider-eq">
                        <span className="ui-slider-green ui-slider-small">77</span>
                        <span className="ui-slider-red">55</span>
                        <span className="ui-slider-purple" data-rel="tooltip" title="Disabled!">33</span>
                        <span className="ui-slider-simple ui-slider-orange">40</span>
                        <span className="ui-slider-simple ui-slider-dark">88</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">Spinners</h4>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <input type="text" id="spinner1" />
                  <div className="space-6" />
                  <input type="text" className="input-sm" id="spinner2" />
                  <div className="space-6" />
                  <input type="text" id="spinner3" />
                  <div className="space-6" />
                  <input type="text" className="input-lg" id="spinner4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">Date Picker</h4>
                <span className="widget-toolbar">
                  <a href="#" data-action="settings">
                    <i className="ace-icon fa fa-cog" />
                  </a>
                  <a href="#" data-action="reload">
                    <i className="ace-icon fa fa-refresh" />
                  </a>
                  <a href="#" data-action="collapse">
                    <i className="ace-icon fa fa-chevron-up" />
                  </a>
                  <a href="#" data-action="close">
                    <i className="ace-icon fa fa-times" />
                  </a>
                </span>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <label htmlFor="id-date-picker-1">Date Picker</label>
                  <div className="row">
                    <div className="col-xs-8 col-sm-11">
                      <div className="input-group">
                        <input className="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy" />
                        <span className="input-group-addon">
                          <i className="fa fa-calendar bigger-110" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space space-8" />
                  <label>Range Picker</label>
                  <div className="row">
                    <div className="col-xs-8 col-sm-11">
                      <div className="input-daterange input-group">
                        <input type="text" className="input-sm form-control" name="start" />
                        <span className="input-group-addon">
                          <i className="fa fa-exchange" />
                        </span>
                        <input type="text" className="input-sm form-control" name="end" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <label htmlFor="id-date-range-picker-1">Date Range Picker</label>
                  <div className="row">
                    <div className="col-xs-8 col-sm-11">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-calendar bigger-110" />
                        </span>
                        <input className="form-control" type="text" name="date-range-picker" id="id-date-range-picker-1" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <label htmlFor="timepicker1">Time Picker</label>
                  <div className="input-group bootstrap-timepicker">
                    <input id="timepicker1" type="text" className="form-control" />
                    <span className="input-group-addon">
                      <i className="fa fa-clock-o bigger-110" />
                    </span>
                  </div>
                  <hr />
                  <label htmlFor="date-timepicker1">Date/Time Picker</label>
                  <div className="input-group">
                    <input id="date-timepicker1" type="text" className="form-control" />
                    <span className="input-group-addon">
                      <i className="fa fa-clock-o bigger-110" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">
                  <i className="ace-icon fa fa-tint" />
                  Color Picker
                </h4>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div className="clearfix">
                    <label htmlFor="colorpicker1">Color Picker</label>
                  </div>
                  <div className="control-group">
                    <div className="bootstrap-colorpicker">
                      <input id="colorpicker1" type="text" className="input-small" />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="simple-colorpicker-1">Custom Color Picker</label>
                    <select id="simple-colorpicker-1" className="hide">
                      <option value="#ac725e">#ac725e</option>
                      <option value="#d06b64">#d06b64</option>
                      <option value="#f83a22">#f83a22</option>
                      <option value="#fa573c">#fa573c</option>
                      <option value="#ff7537">#ff7537</option>
                      <option value="#ffad46" selected>#ffad46</option>
                      <option value="#42d692">#42d692</option>
                      <option value="#16a765">#16a765</option>
                      <option value="#7bd148">#7bd148</option>
                      <option value="#b3dc6c">#b3dc6c</option>
                      <option value="#fbe983">#fbe983</option>
                      <option value="#fad165">#fad165</option>
                      <option value="#92e1c0">#92e1c0</option>
                      <option value="#9fe1e7">#9fe1e7</option>
                      <option value="#9fc6e7">#9fc6e7</option>
                      <option value="#4986e7">#4986e7</option>
                      <option value="#9a9cff">#9a9cff</option>
                      <option value="#b99aff">#b99aff</option>
                      <option value="#c2c2c2">#c2c2c2</option>
                      <option value="#cabdbf">#cabdbf</option>
                      <option value="#cca6ac">#cca6ac</option>
                      <option value="#f691b2">#f691b2</option>
                      <option value="#cd74e6">#cd74e6</option>
                      <option value="#a47ae2">#a47ae2</option>
                      <option value="#555">#555</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="widget-box">
              <div className="widget-header">
                <h4 className="widget-title">
                  <i className="ace-icon fa fa-tachometer" />
                  Knob Input
                </h4>
              </div>
              <div className="widget-body">
                <div className="widget-main">
                  <div className="control-group">
                    <div className="row">
                      <div className="col-xs-6 center">
                        <div className="knob-container inline">
                          <input type="text" className="input-small knob" defaultValue={15} data-min={0} data-max={100} data-step={10} data-width={80} data-height={80} data-thickness=".2" />
                        </div>
                      </div>
                      <div className="col-xs-6  center">
                        <div className="knob-container inline">
                          <input type="text" className="input-small knob" defaultValue={41} data-min={0} data-max={100} data-width={80} data-height={80} data-thickness=".2" data-fgcolor="#87B87F" data-displayprevious="true" data-anglearc={250} data-angleoffset={-125} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 center">
                        <div className="knob-container inline">
                          <input type="text" className="input-small knob" defaultValue={1} data-min={0} data-max={10} data-width={150} data-height={150} data-thickness=".2" data-fgcolor="#B8877F" data-angleoffset={90} data-cursor="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="hr hr-18 dotted hr-double" />
      <h4 className="pink">
        <i className="ace-icon fa fa-hand-o-right green" />
        <a href="#modal-form" role="button" className="blue" data-toggle="modal"> Form Inside a Modal Box </a>
      </h4>
      <div className="hr hr-18 dotted hr-double" />
      <h4 className="header green">Form Layouts</h4>
      <div className="row">
        <div className="col-sm-5">
          <div className="widget-box">
            <div className="widget-header">
              <h4 className="widget-title">Default</h4>
            </div>
            <div className="widget-body">
              <div className="widget-main no-padding">
                <form>
                  {/* <legend>Form</legend> */}
                  <fieldset>
                    <label>Label name</label>
                    <input type="text" placeholder="Type something…" />
                    <span className="help-block">Example block-level help text here.</span>
                    <label className="pull-right">
                      <input type="checkbox" className="ace" />
                      <span className="lbl"> check me out</span>
                    </label>
                  </fieldset>
                  <div className="form-actions center">
                    <button type="button" className="btn btn-sm btn-success">
                      Submit
                      <i className="ace-icon fa fa-arrow-right icon-on-right bigger-110" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="widget-box">
            <div className="widget-header">
              <h4 className="widget-title">Inline Forms</h4>
            </div>
            <div className="widget-body">
              <div className="widget-main">
                <form className="form-inline">
                  <input type="text" className="input-small" placeholder="Username" />
                  <input type="password" className="input-small" placeholder="Password" />
                  <label className="inline">
                    <input type="checkbox" className="ace" />
                    <span className="lbl"> remember me</span>
                  </label>
                  <button type="button" className="btn btn-info btn-sm">
                    <i className="ace-icon fa fa-key bigger-110" />Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="space-6" />
          <div className="widget-box">
            <div className="widget-header widget-header-small">
              <h5 className="widget-title lighter">Search Form</h5>
            </div>
            <div className="widget-body">
              <div className="widget-main">
                <form className="form-search">
                  <div className="row">
                    <div className="col-xs-12 col-sm-8">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ace-icon fa fa-check" />
                        </span>
                        <input type="text" className="form-control search-query" placeholder="Type your query" />
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-purple btn-sm">
                            <span className="ace-icon fa fa-search icon-on-right bigger-110" />
                            Search
                          </button>
                        </span>
                      </div>
                      <div className="hr" />
                      <div className="input-group input-group-lg">
                        <span className="input-group-addon">
                          <i className="ace-icon fa fa-check" />
                        </span>
                        <input type="text" className="form-control search-query" placeholder="Type your query" />
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="ace-icon fa fa-search icon-on-right bigger-110" />
                            Search
                          </button>
                        </span>
                      </div>
                      <div className="hr" />
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ace-icon fa fa-check" />
                        </span>
                        <input type="text" className="form-control search-query" placeholder="Type your query" />
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-inverse btn-white">
                            <span className="ace-icon fa fa-search icon-on-right bigger-110" />
                            Search
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-form" className="modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">×</button>
              <h4 className="blue bigger">Please fill the following form fields</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <div className="space" />
                  <input type="file" />
                </div>
                <div className="col-xs-12 col-sm-7">
                  <div className="form-group">
                    <label htmlFor="form-field-select-3">Location</label>
                    <div>
                      <select className="chosen-select" data-placeholder="Choose a Country...">
                        <option value>&nbsp;</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-4" />
                  <div className="form-group">
                    <label htmlFor="form-field-username">Username</label>
                    <div>
                      <input type="text" id="form-field-username" placeholder="Username" defaultValue="alexdoe" />
                    </div>
                  </div>
                  <div className="space-4" />
                  <div className="form-group">
                    <label htmlFor="form-field-first">Name</label>
                    <div>
                      <input type="text" id="form-field-first" placeholder="First Name" defaultValue="Alex" />
                      <input type="text" id="form-field-last" placeholder="Last Name" defaultValue="Doe" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-sm" data-dismiss="modal">
                <i className="ace-icon fa fa-times" />
                Cancel
              </button>
              <button className="btn btn-sm btn-primary">
                <i className="ace-icon fa fa-check" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>{/* PAGE CONTENT ENDS */}
    </div>{/* /.col */}
  </div>{/* /.row */}
</div>

    );
  }
}

