export default class IssueListController {
    static $inject = ['$scope', '$stateParams']
    issueList = []
    title = ''
    totalIssues = 0
    scope
     constructor($scope, stateParams) {
        this.title = stateParams.issueId
     }
}
