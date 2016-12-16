class ListController {
  constructor() {

  }

  delete(index){
    this.list.splice(index, 1);
  }
  add(task){
    this.list.push({name: task.name, time: task.time})
  }
}

export default ListController;
