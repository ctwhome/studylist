import AddDialogController from './add-dialog.controller';


class HomeController {

  constructor($mdDialog) {
    "ngInject";

    this.mdDialog = $mdDialog;

  }

  $onInit() {

    this.name = 'home';

    this.items = [
      'jols1', 'hola2', 'hola32', 'anthoress'

    ]

    this.config = {
      animation: 150,
      onSort: function (event) {
        console.log(event);
      }
    };


    //TODO MOVE THIS TO THE SERVICE
    this.user =
      {
        name: 'Jesus Garcia',
        mail: 'ctw@ctwhome.com',
        picture: '//icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png',
        lists: [
          {
            id:0,
            name: "Study",
            timers: [
              {name: "task 1", desc: "A kind of a long desctription", time: 600},
              {name: "task 2", desc: "A kind of a long desctription", time: 200},
              {name: "task 3", desc: "A kind of a long desctription", time: 300},
              {name: "task 4", desc: "A kind of a long desctription", time: 300},
              {name: "task 5", desc: "A kind of a long desctription", time: 400}
            ]
          },

          {
            id:1,
            name: "Piano",
            timers: [
              {name: "Scales", desc: "A kind of a long desctription", time: 200},
              {name: "Technique", desc: "A kind of a long desctription", time: 300},
              {name: "Song", desc: "A kind of a long desctription", time: 300},
            ]
          },
          {
            id:2,
            name: "Language",
            timers: [
              {name: "Vocabulary", desc: "A kind of a long desctription", time: 600},
              {name: "Grammatica", desc: "A kind of a long desctription", time: 300},
              {name: "Reading", desc: "A kind of a long desctription", time: 300},
              {name: "Listening", desc: "A kind of a long desctription", time: 300}
            ]
          }

        ],
        jsonlist: {
          0: [
            {name: "task 1", desc: "A kind of a long desctription", time: 600},
            {name: "task 2", desc: "A kind of a long desctription", time: 200},
            {name: "task 3", desc: "A kind of a long desctription", time: 300},
            {name: "task 4", desc: "A kind of a long desctription", time: 300},
            {name: "task 5", desc: "A kind of a long desctription", time: 400}
          ],
          1: [
            {name: "task 1", desc: "A kind of a long desctription", time: 600},
            {name: "task 2", desc: "A kind of a long desctription", time: 200},
            {name: "task 3", desc: "A kind of a long desctription", time: 300},
            {name: "task 4", desc: "A kind of a long desctription", time: 300},
            {name: "task 5", desc: "A kind of a long desctription", time: 400}
          ]

        }
      };


    this.activeList = this.user.lists[0].name;

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

export
default
HomeController;
