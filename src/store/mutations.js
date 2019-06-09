/**
 * Global Mutations
 *
 * The only way to change the state in Vuex is by committing a mutation. This is
 * also the function that updates the view.
 *
 * Further Reading: https://vuex.vuejs.org/en/mutations.html
 *
 * Usage:
 *
 * 1. Import your constant
 * 2. Add a function inside the mutations object formatted like this:
 *
 *    [YOUR_ACTION_CONSTANT](state, payload) {
 *      state.someVar = payload.var1;
 *      state.anotherVar = payload.var2;
 *    }
 */

import { GET_EXCHANGE_PRODUCTS } from './constants';


const mutations = {
    [GET_EXCHANGE_PRODUCTS.REQUEST](state) {
        state.loading = true;
    },
    [GET_EXCHANGE_PRODUCTS.SUCCESS](state, payload) {
        state.loading = false;
        state.exchangeProducts = payload.posts;
    },
    [GET_EXCHANGE_PRODUCTS.FAILURE](state, payload) {
        state.loading = false;
        state.getProductsError = payload.error;
    },
};

export default mutations;
