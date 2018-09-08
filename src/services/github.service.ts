class GithubService {
  private http: any
  private listResponse: any
  constructor($http) {
    this.http = $http
  }

  async fetchGitInfo(value) {
    try {

      const { data } = await this.http.get(`https://api.github.com/search/repositories?q=${value}`)

      return data.items

    } catch (error) {
      console.log(error)
    }
  }
}

export default GithubService
