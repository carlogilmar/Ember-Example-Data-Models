import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  test: DS.belongsTo('test')
});
