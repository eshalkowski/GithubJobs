
/**
 * Search form for jobs search
 */

import React, { PropTypes } from 'react';
import history from '../../core/history';
import Select from '../Select/Select';

class JobsSearchForm extends React.Component {

  static propTypes = {
    //to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    //onClick: PropTypes.func,
  };

  onSelect(value) {
    console.log('The Value Is', value);
  }
  render() {
    //TODO: move into state (Use redux, mobx, or other state management solution?)
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
  
    return <form className={this.props.className || ''}>
      <label for="citySelect">City</label>
      <Select id="citySelect" options={cities} onSelect={this.onSelect} />
      <label for="languageSelect">Language</label>
      <Select id="languageSelect" options={languages} onSelect={this.onSelect} />
    </form>;
  }

}

export default JobsSearchForm;
