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
                <div className={s.title}>{job.title}</div>
                <div className={s.company}>{job.company} - <span className={s.type__full}>{job.type}</span></div>
              </td>
              <td className={s.locationAndDate}>
                <div className={s.location}>{job.location}</div>
                <div className={s.createdAt}>{job.created_at}</div>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  }

}

export default JobsSearchGrid;
