export default class ListRepoController {
    listRepo = []

    constructor($scope) {
        this.listRepo = $scope.$parent.$ctrl.listRepo
    }
}
