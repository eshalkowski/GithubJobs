import {observable, action} from 'mobx';
import $ from 'jquery';

class JobsStore {
    @observable jobs = [];
    location = null;
    language = null;
    /**
     * TODO: create custom API and add in error handling/cancel logic/loading/caching/etc...
     * @param {} options 
     *  --lang: language to search for
     *  --location: location to search for
     */
    @action queryJobs(options) {
      //Get Jobs
      $.getJSON(`http://jobs.github.com/positions.json?${this.formatQueryParams(options)}&callback=?`,
        data => {
          this.jobs = data;
        });
    }

    formatQueryParams(options) {
      return `description=${this.formatForURL(this.language)}&location=${this.formatForURL(this.location)}`
    }

    formatForURL(theString) {
      return theString && theString.replace(/ /g,"+");
    }
}

export default new JobsStore();