export default {
  name: 'issueList',
  url: '/issueList/{issueId}',
  component: 'issueList',
  resolve: {
    issues: function(githubService, $stateParams) {
      return githubService.fetchIssueList( $stateParams.issueId)
    }
  }
}
