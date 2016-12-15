class ListController {
  constructor() {

    this.list = [
      { name: "task 1", time:600},
      { name: "task 2", time:600},
      { name: "task 3", time:600},
      { name: "task 4", time:600},
      { name: "task 5", time:600},
      { name: "task 6", time:600}
    ]

  }

  delete(index){
    this.list.splice(index, 1);
  }
  add(task){
    this.list.push({name: task.name, time: task.time})
  }

}

export default ListController;
