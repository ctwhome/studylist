class CounterController {

  constructor($interval) {
    'ngInject'

    this.$interval = $interval;

    // THIS WORKS!!!!
    //
    // let seconds = 10;
    // this.interval = this.$interval(() => {
    //   seconds--;
    //   this.counter = seconds;
    // }, 1000, seconds).then(()=>{
    //   console.log(444444);
    // })
    //
    //
    // setTimeout(()=>{
    //   this.$interval.cancel(this.interval)
    // }, 3000);

  }


  $onInit() {

    // console.log(this.$interval);

    this.DEFAULT_COUNTER = 600;
    this.counter = this.DEFAULT_COUNTER;

    this.icon = "play_arrow"
    this.counting = false;
    this.iconColor = {fill: 'orange'};
  }

  countdown(seconds) {
    this.interval = this.$interval(() => {
      seconds--;
      this.counter = seconds;
    }, 1000, seconds).then(() => {

      // buffers automatically when created
      var snd = new Audio("assets/guitar.wav");
      snd.play();
      // this.counter = this.DEFAULT_COUNTER;
    });
  }

  toggleTime() {
    this.counting = !this.counting;

    this.icon = this.counting ? "pause" : "play_arrow";
    this.iconColor = this.counting ? {fill: '#d84315'} : {fill: 'orange'};
    this.counting ? this.countdown(this.counter) : this.pause();
  }

  pause() {

    // console.info("angular.isDefined(this.interval) ", angular.isDefined(this.interval));
    // this.$interval.cancel(this.interval);

    if (angular.isDefined(this.interval)) {
      console.log("the promies ", this.$interval.cancel(this.interval));
      this.$interval.cancel(this.interval)
      this.interval = undefined;
    }
  }


  reset() {
    if (angular.isDefined(this.interval)) {
      this.$interval.cancel(this.interval)
    }
    this.counter = this.DEFAULT_COUNTER;
  }

}

export default CounterController;
