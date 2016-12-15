import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import List from './list/list';
import Counter from './counter/counter';

let componentModule = angular.module('app.components', [
  Home,
  About,
  List,
  Counter
])

.name;

export default componentModule;
