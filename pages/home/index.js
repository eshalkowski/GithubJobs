/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import Header from '../../components/Layout/Header';
import JobSearchForm from '../../components/JobsSearch/JobsSearchForm';
import JobSearchGrid from '../../components/JobsSearch/JobSearchGrid';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
  }
 
  render() {
    return (
      <Layout className={s.content}>
        <JobSearchForm className={s.searchForm} />
        <JobSearchGrid/>
      </Layout>
    );
  }

}

export default HomePage;
