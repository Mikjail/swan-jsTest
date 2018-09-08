import angular = require('angular')
import Home from './home'
import View1 from './home/view1'
import IssueList from './issueList'
import githubService from '../services/github.service'

export default angular
  .module('pages', [])
  .component('home', Home)
  .component('view1', View1)
  .component('issueList', IssueList)
  .service('githubService', githubService)
  .name
