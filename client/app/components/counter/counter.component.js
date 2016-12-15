import template from './counter.html';
import controller from './counter.controller';
import './counter.scss';

let counterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default counterComponent;
