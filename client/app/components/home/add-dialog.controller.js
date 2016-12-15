

class AddDialogController {

  constructor($mdDialog) {
    "ngInject";

    this.$mdDialog = $mdDialog;

  }
  add(task){
    console.log(task);
    this.$mdDialog.hide(task);
  }

  cancel(){
    this.$mdDialog.hide();
  }
}

export default AddDialogController;
