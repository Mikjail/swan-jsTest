export default class ListRepoController {
    listRepo = []
    scope

    constructor($scope) {
     this.scope = $scope
     this.initList()
    }

    initList() {
        this.listRepo =   this.scope.$parent.$ctrl.listRepo.map((
            {name, description, url, language, clone_url, forks_count, stargazers_count, open_issues_count }) => {
            return {
                name,
                language,
                description,
                url,
                clone_url,
                forks_count,
                stargazers_count,
                open_issues_count }
        })
        console.log(this.listRepo)
    }
}
