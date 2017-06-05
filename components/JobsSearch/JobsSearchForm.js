
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
/**
 * State for query is currently kept here. WOuld be a good idea to move into store
 * itself. Left here for brevity.
 */
class JobsSearchForm extends React.Component {
  lang = null;
  location = null;
  
  //jobStore must have queryJobs function
  static propTypes = {
    jobStore: PropTypes.object.isRequired
  };

  onCitySelect(value) {
    console.log(this.props);
    this.props.jobStore.location = value;
    this.props.jobStore.queryJobs();
  }

  onLanguageSelect(value) {
    this.props.jobStore.language= value;
    this.props.jobStore.queryJobs();
  }

  render() {
    return <form className={s.searchForm}>
      <Select style={selectStyle} label="City" options={cities} onSelect={this.onCitySelect.bind(this)} />
      <Select style={selectStyle} label="Language" options={languages} onSelect={this.onLanguageSelect.bind(this)} />
    </form>;
  }

}

export default JobsSearchForm;
