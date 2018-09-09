export default class HomeController {
    static $inject = ['githubService', '$scope']
    private scope: any
    private githubFetchService: any
    public searchValue = ''
    public listRepo = []
    public isLoading = false
    public notFound = false
    constructor(private githubService, $scope) {
        this.scope = $scope
        this.githubFetchService = this.githubService
    }

    async handleSubmit() {
        try {
            this.isLoading = true
            const  response = await this.githubFetchService.fetchGitInfo(this.searchValue)
            this.isLoading = false
            this.listRepo = response
            this.notFound = this.listRepo.length < 1
            this.scope.$apply()
        } catch (error) {
            this.notFound = true
            this.isLoading = false
        }

    }
}
