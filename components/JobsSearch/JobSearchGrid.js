/**
 * Search grid for jobs search
 */

import React from 'react';
import {PropTypes, observer} from 'mobx-react'
import cx from 'classnames';
import Select from '../Select/Select';
import s from './JobSearchGrid.css';

@observer
class JobsSearchGrid extends React.Component {

  static propTypes = {
    jobs: PropTypes.observableArray
  };

  render() {
    console.log(this.props.jobs);
    return <table className={cx(s.grid, 'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp')}>
      <caption>
        Showing {this.props.jobs && this.props.jobs.length} Jobs
      </caption>
      <tbody>
        { this.props.jobs.map((job) =>{
            return <tr>
              <td className={s.titleAndCompany}>
                <div>{job.title}</div>
                <div>{job.company}</div>
              </td>
              <td className={s.locationAndDate}>
                <div>{job.location}</div>
                <div>{job.created_at}</div>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  }

}

export default JobsSearchGrid;
