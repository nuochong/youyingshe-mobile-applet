import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const moduleGlobal = {
  state,
  getters,
  actions,
  mutations
};
export default moduleGlobal;