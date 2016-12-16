import AddDialogController from './add-dialog.controller';


class HomeController {

  constructor($mdDialog, User) {
    "ngInject";
    this.User = User;
    this.mdDialog = $mdDialog;
  }
  $onInit() {
    this.config = {
      animation: 150,
      onSort: function (event) {
        console.log(event);
      }
    };

    this.user = this.User.getUser();
    this.activeList = this.user.lists[0].name;
    this.getElementsListSelected()
  }

  /**
   * Return the elements of the selected list
   * @param list
   */
  getElementsListSelected(){
   this.list = this.user["lists"].filter((v)=>{ return v.name == this.activeList; })[0].timers
  }

  delete(index) {
    this.list.splice(index, 1);
  }

  add(task) {
    this.list.push({name: task.name, time: task.time})
  }

  addDialog(ev) {
    this.mdDialog.show({
      controller: AddDialogController,
      controllerAs: '$ctrl',
      template: require('./add-dialog.html'),
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
    })
      .then((task) => {
        // $scope.status = 'You said the information was "' + answer + '".';
        console.log(task);
        this.add(task);
      }, function () {
        // $scope.status = 'You cancelled the dialog.';
      });

  }
}

export default HomeController;
