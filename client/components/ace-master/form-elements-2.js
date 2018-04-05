//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
      <div className="page-header">
        <h1>More Elements </h1>
      </div>{/* /.page-header */}
      <div className="row">
        <div className="col-xs-12">
          {/* PAGE CONTENT BEGINS */}
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label className="col-sm-3 control-label no-padding-top"> Star Rating </label>
              <div className="col-sm-9">
                <div className="rating inline" />
                <div className="hr hr-16 hr-dotted" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label no-padding-right">Typeahead.js</label>
              <div className="col-sm-9">
                <div className="pos-rel">
                  <input className="typeahead scrollable" type="text" placeholder="States of USA" />
                </div>
              </div>
            </div>
            <div className="space-6" />
            <div className="form-group">
              <label className="control-label col-xs-12 col-sm-3 no-padding-right" htmlFor="food">Bootstrap Multiselect</label>
              <div className="col-xs-12 col-sm-9">
                <select id="food" className="multiselect" multiple>
                  <option value="cheese">Cheese</option>
                  <option value="tomatoes">Tomatoes</option>
                  <option value="mozarella">Mozzarella</option>
                  <option value="mushrooms">Mushrooms</option>
                  <option value="pepperoni">Pepperoni</option>
                </select>
              </div>
            </div>
            <div className="hr hr-16 hr-dotted" />
            <div className="form-group">
              <label className="col-sm-3 control-label no-padding-top" htmlFor="duallist"> Dual listbox </label>
              <div className="col-sm-8">
                <select multiple="multiple" size={10} name="duallistbox_demo1[]" id="duallist">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3" selected="selected">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                  <option value="option6" selected="selected">Option 6</option>
                  <option value="option7">Option 7</option>
                  <option value="option8">Option 8</option>
                  <option value="option9">Option 9</option>
                  <option value="option0">Option 10</option>
                </select>
                <div className="hr hr-16 hr-dotted" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-12 col-sm-3 no-padding-right"> Select2 </label>
              <div className="col-xs-12 col-sm-9">
                <select multiple id="state" name="state" className="select2" data-placeholder="Click to Choose...">
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
                <span className="inline pull-right">
                  <span className="grey">style:</span>
                  <span className="btn-toolbar inline middle no-margin">
                    <span id="select2-multiple-style" data-toggle="buttons" className="btn-group no-margin">
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
              </div>
            </div>
          </form>
          {/* PAGE CONTENT ENDS */}
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>
    
  

    );
  }
}

