export default class ListRepoController {
    listRepo = []
    scope
    state

    constructor($scope, $state) {
     this.scope = $scope
     this.state = $state
     this.initList()
    }

    initList() {
        this.listRepo =   this.scope.$parent.$ctrl.listRepo.map((
            { name,
              full_name,
              description,
              url,
              language,
              clone_url,
              forks_count,
              stargazers_count,
              open_issues_count,
              watchers_count }) => {
            return {
                name,
                full_name,
                language,
                description,
                url,
                clone_url,
                forks_count,
                stargazers_count,
                open_issues_count,
                watchers_count }
        })
    }

    viewOpenIssues(repo) {
        let url = 'https://api.github.com/search/issues?q=rep o:'
        console.log(`${url}${repo}`)
        this.state.go('issueList', {
            url: '/issueList',
            templateUrl : '../../issueList',
        })
    }
}
