/* global inject */
/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
describe('rgtHelloWorld', function() {

  beforeEach(module('sirragnar.reusableModule'));

  var scope,compile,element;

  beforeEach(inject(function($rootScope,$compile) {
    scope = $rootScope.$new();
    compile = $compile;    
    element = compile('<rgt-hello-world></rgt-hello-world>')(scope);
  }));

  it('just should say hello', function() {
   
    console.log(element);
    expect(element.text()).toBe('Hello world!');
    

  });
});