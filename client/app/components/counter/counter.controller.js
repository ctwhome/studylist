class CounterController {

  constructor($interval) {
    'ngInject';

    this.$interval = $interval;
    this.DEFAULT_COUNTER = 600;
    this.digitCounter = 4;
    this.$curParent = null;
  }

  $onInit() {

    this.setCounter(this.DEFAULT_COUNTER);
    this.setInputText(this.getAbsoluteMins(this.DEFAULT_COUNTER), this.getAbsoluteSecs(this.DEFAULT_COUNTER));

    this.handleInputKeyUp = (e) => {
      this.handleKeyUp(e);
    };

    this.icon = "play_arrow";
    this.counting = false;
    this.iconColor = {fill: 'orange'};
  }

  updateCurParent (e) {

    this.$curParent = e.currentTarget;
    this.cacheElements();
  }

  cacheElements () {
    this.$input = this.$curParent.querySelector('.input');
    this.$time = this.$curParent.querySelector('.seconds');
    this.$d1 = this.$curParent.querySelector('.digit-1');
    this.$d2 = this.$curParent.querySelector('.digit-2');
    this.$d3 = this.$curParent.querySelector('.digit-3');
    this.$d4 = this.$curParent.querySelector('.digit-4');
    this.removeInputListners();
    this.setInputListeners();
  }

/* - Timer methods - */

  countdown(seconds) {
    this.interval = this.$interval(() => {
      seconds--;
      this.setCounter(seconds);
    }, 1000, seconds);
  }

  toggleTime(e) {
      this.counting = !this.counting;
      this.counting ? this.countdown(this.parseCounterToSeconds(this.counter)) : this.pause();
      this.toggleIcon();
  }

  toggleIcon () {
    this.icon = this.counting ? 'pause' : 'play_arrow';
    this.iconColor = this.counting ? {fill: '#d84315'} : {fill: 'orange'};
  }

  toggleIconIfPlaying () {
    if (this.counting) {
      this.counting = false;
      this.toggleIcon();
    }
  }

  pause() {

    if (angular.isDefined(this.interval)) {
      this.$interval.cancel(this.interval);
      this.playAudio();
    }
  }

  playAudio () {

    // buffers automatically when created
    let snd = new Audio('/assets/guitar.wav');
    snd.play();
  }

  setCounter (time) {
    this.counter = this.parseSecondsToDate(time);
  }

  reset() {

    if (angular.isDefined(this.interval)) {
      this.$interval.cancel(this.interval);
    }

    this.toggleIconIfPlaying();
    this.setCounter(this.DEFAULT_COUNTER);
  }

  /* - Input Methods - */

  handleKeyUp (e) {

    if (!isNaN(parseFloat(e.key)) && isFinite(e.key) && this.digitCanBePlaced(e.key)) { // If key is a number

      this.$curParent.querySelector(`.digit-${this.digitCounter}`).innerHTML = e.key;
      this.digitCounter--;

      if (this.digitCounter < 1) this.digitCounter = 4;

      this.$curParent.querySelector(`.digit-${this.getNextDigit()}`).style.color = '#ABABAB';
      this.$curParent.querySelector(`.digit-${this.digitCounter}`).style.color = '#434343';

    }else if (e.keyCode === 13) { // Enter keyCode
      this.$curParent.querySelector(`.digit-${this.getNextDigit()}`).style.color = '#ABABAB';
      this.hideInput();
    }
  }

  getNextDigit () {
    return this.digitCounter === 4 ? 1 : this.digitCounter + 1;
  }

  digitCanBePlaced (key) {

    const num = parseInt(key);
    let result = true;

    switch (this.digitCounter) {
      case 1:
        result = num < 6 ? true : false;
        break;

      case 3:
        result = num < 6 ? true : false;
        break;
    }

    return result;
  }

  formatInput (time) {

    let digits = time.split('');

    this.$d1.textContent = digits[0];
    this.$d2.textContent = digits[1];
    this.$d3.textContent = digits[3];
    this.$d4.textContent = digits[4];
  }

  setInputListeners () {
    this.$input.addEventListener('keyup', this.handleInputKeyUp);
  }

  removeInputListners () {
    this.$input.removeEventListener('keyup', this.handleInputKeyUp);
  }

  setInputText (min, sec) {
    this.inputText = !sec ? `${min}m` : `${min}m ${sec}s`;
  }

  showInput () {

    this.toggleIconIfPlaying();

    setTimeout(() => {
      this.resetColorInput();
      this.$curParent.querySelector(`.digit-${this.digitCounter}`).style.color = '#434343';
      this.formatInput(this.$time.textContent);
      this.$curParent.querySelector('.input-counter').classList.add('visible');
      this.$curParent.querySelector('.seconds').classList.remove('visible');
      this.$input.focus();
    }, 0);
  }

  hideInput () {

    this.$curParent.querySelector('.input-counter').classList.remove('visible');
    this.$curParent.querySelector('.seconds').classList.add('visible');
    this.setCounterFromInput();
  }

  setCounterFromInput () {
    const d1 = this.$curParent.querySelector('.digit-1').textContent;
    const d2 = this.$curParent.querySelector('.digit-2').textContent;
    const d3 = this.$curParent.querySelector('.digit-3').textContent;
    const d4 = this.$curParent.querySelector('.digit-4').textContent;

    this.setCounter(this.parseCounterToSeconds(`${d1}${d2}:${d3}${d4}`));
  }

  resetColorInput () {
    this.$d1.style.color = this.$d2.style.color = this.$d3.style.color = this.$d4.style.color = '#ABABAB';
  }

  /* UTILS - Getters, setters, parsers... */

  addZero (num) {
    return `0${num}`.slice(-2);
  }

  getAbsoluteMins (time) {

    let min = Math.floor(time/60);
    min = min%60;

    return `${this.addZero(min)}`;
  }

  getAbsoluteSecs (time) {
    return `${this.addZero(time%60)}`;
  }

  parseSecondsToDate (time) {

    let min = Math.floor(time/60);
    min = min%60;
    let sec = time%60;

    return `${this.addZero(min)}:${this.addZero(sec)}`;
  }

  parseCounterToSeconds (counter) {

    let timeParsed = counter.match(/(\d{2}):(\d{2})/);
    let minutes = timeParsed[1];
    let seconds = timeParsed[2];
    return parseInt(minutes) * 60 + parseInt(seconds);
  }
}

export default CounterController;
