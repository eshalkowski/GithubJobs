
/**
 * Search form for jobs search
 * 
 * TODO: Add {name, value} support
 * TODO: Add option for initial value select 
 */

import React, { PropTypes } from 'react';
import history from '../../core/history';
import s from './Select.css'

class Select extends React.Component {

  static propTypes = {
    options: PropTypes.array.isRequired, //Array of Stings
    onSelect: PropTypes.func,
    style: PropTypes.object,
    label: PropTypes.string
  };

  constructor(props) {
    super(props);
    //Emit initial selection event
    props.onSelect && props.onSelect(props.options[0]);
  }

  onChange(e) {
      this.props.onSelect && this.props.onSelect(e.target.value);
  }

  render() {
    const options = this.props.options;

    return <div style={this.props.style}>
      <label className={s.label}>{this.props.label || ''}</label>
      <select className={s.select} onChange={this.onChange.bind(this)}>{
        options.map((option => {
          return <option key={option} value={option}>{option}</option>
        }))
    }</select>
    </div>;
  }

}

export default Select;
