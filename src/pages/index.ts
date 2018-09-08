import angular = require('angular')
import Home from './home'
import View1 from './home/view1'
import githubService from '../services/github.service'

export default angular
  .module('pages', [])
  .component('home', Home)
  .component('view1', View1)
  .service('githubService', githubService)
  .name
