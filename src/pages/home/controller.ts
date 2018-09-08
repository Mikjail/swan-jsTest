export default class HomeController {
    static $inject = ['githubService', '$scope']
    private scope: any
    private githubFetchService: any
    public searchValue = ''
    public listRepo = []
    constructor(private githubService, $scope) {
        this.scope = $scope
        this.githubFetchService = this.githubService
    }

    async handleSubmit() {
        try {
            const  response = await this.githubFetchService.fetchGitInfo(this.searchValue)
            this.listRepo = response
            this.scope.$apply()
        } catch (error) {
            console.log(error)
        }

    }

    
}
