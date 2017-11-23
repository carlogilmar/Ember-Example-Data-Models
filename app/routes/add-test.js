import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    createTest:function(){
      var test = this.store.createRecord('test', {
        title: this.controller.get('title')
      });
      test.save().then( (test) => {
        //this.controllerFor('application').set('test', test);
        this.transitionTo('newReactive');
        console.log("Test guardado");
      },
      function(){
        alert("Error al guardar el test");
      });
    }
  }
});
