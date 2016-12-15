import angular from 'angular';
import uiRouter from 'angular-ui-router';
import counterComponent from './counter.component';

let counterModule = angular.module('counter', [
  uiRouter
])

  .component('counter', counterComponent)

  .filter('secondsToDateTime', function () {
    return function (seconds) {
      var d = new Date(0, 0, 0, 0, 0, 0, 0);
      d.setSeconds(seconds);
      return d;
    };
  })

  .name;

export default counterModule;
