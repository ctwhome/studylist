import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import ngSortable from 'ng-sortable';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import '../../node_modules/angular-material/angular-material.min.css';
import './animate.css';

angular.module('app', [
  uiRouter,
  Common,
  Components,
  ngAnimate, ngMessages, ngAria, ngMaterial,
  ngSortable,
  ngMdIcons

])
  .config(($locationProvider, $mdThemingProvider, $mdAriaProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $mdAriaProvider.disableWarnings();

    $mdThemingProvider.theme('default').primaryPalette('orange');
  })


  .run(function () {


    // Register the service worker if available.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(function (reg) {
        console.log('Successfully registered service worker', reg);
      }).catch(function (err) {
        console.warn('Error whilst registering service worker', err);
      });
    }

    window.addEventListener('online', function (e) {
      // Resync data with server.
      console.log("You are online");
      // Page.hideOfflineWarning();
      // Arrivals.loadData();
    }, false);

    window.addEventListener('offline', function (e) {
      // Queue up events for server.
      console.log("You are offline");
      // Page.showOfflineWarning();
    }, false);

// Check if the user is connected.
    if (navigator.onLine) {
      // Arrivals.loadData();
    } else {
      // Show offline message
      // Page.showOfflineWarning();
    }
  })
  .component('app', AppComponent);
