import {observable, action} from 'mobx';
import $ from 'jquery';

class JobsStore {
    @observable jobs = [];

    
    @action queryJobs() {
      //Get Jobs
      $.getJSON('http://jobs.github.com/positions.json?description=python&location=new+york&callback=?',
        data => {
          this.jobs = data;
        });
    }
}

export default new JobsStore();