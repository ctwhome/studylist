class CounterController {

  constructor($interval) {
    'ngInject'

    this.$interval = $interval;
  }

  $onInit() {

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
    }, 1000, seconds);
  }

  toggleTime() {
    this.counting = !this.counting;

    this.toggleIcon();
    this.counting ? this.countdown(this.counter) : this.pause();
  }

  toggleIcon () {
    this.icon = this.counting ? "pause" : "play_arrow";
    this.iconColor = this.counting ? {fill: '#d84315'} : {fill: 'orange'};
  }

  pause() {
    if (angular.isDefined(this.interval)) {
      console.log("the promies ", this.$interval.cancel(this.interval));
      this.$interval.cancel(this.interval);
      this.playAudio();
    }
  }

  playAudio () {

      // buffers automatically when created
      let snd = new Audio("assets/guitar.wav");
      snd.play();
  }

  reset() {
    if (angular.isDefined(this.interval)) {
      this.$interval.cancel(this.interval)
      this.toggleTime();
    }
    this.counter = this.DEFAULT_COUNTER;
  }

}

export default CounterController;
