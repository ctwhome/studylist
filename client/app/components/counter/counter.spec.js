import CounterModule from './counter'
import CounterController from './counter.controller';
import CounterComponent from './counter.component';
import CounterTemplate from './counter.html';

describe('Counter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CounterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CounterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CounterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CounterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CounterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CounterController);
      });
  });
});
