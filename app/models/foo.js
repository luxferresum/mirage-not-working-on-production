import DS from 'ember-data';

export default DS.Model.extend({
  bars: DS.hasMany('bar'),
});
