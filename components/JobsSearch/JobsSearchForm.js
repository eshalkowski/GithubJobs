
/**
 * Search form for jobs search
 */

import React, { PropTypes } from 'react';
import history from '../../core/history';
import Select from '../Select/Select';
import s from './JobsSearchForm.css';

const cities = [
  'Boston',
  'San Francisco',
  'Los Angelas',
  'Denver',
  'Boulder',
  'Chicago',
  'New York'
];

const languages = [
  'Python',
  'Node',
  'JavaScript',
  'Ruby',
  '.NET',
  'Java',
  'Go'
]

const selectStyle = {
  width: '200px',
  margin: '0 10px 0 0'
}

class JobsSearchForm extends React.Component {

  static propTypes = {

  };

  onSelect(value) {
    console.log('The Value Is', value);
  }
  render() {
    return <form className={s.searchForm}>
      <Select style={selectStyle} label="City" options={cities} onSelect={this.onSelect} />
      <Select style={selectStyle} label="Language" options={languages} onSelect={this.onSelect} />
    </form>;
  }

}

export default JobsSearchForm;
