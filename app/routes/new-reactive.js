import Ember from 'ember';

export default Ember.Route.extend({

  model:function(params){
    return this.store.query('reactive', {test: params.test_id});
  },
  actions:{
    createReactive:function(){
      var reactive = this.store.createRecord('reactive',{
        question:this.controller.get('question')
      });
      reactive.save().then(()=>{
        console.log("Se guardo el reactivo");
      },
      function(){
        alert("Error al guardar un reactivo papi");
      });
      console.log("acá agarrando algo chido");
    }
  }


});
