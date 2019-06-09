/**
 * Global Actions
 *
 * These are functions that dispatch (communicate changes to the store) our
 * mutations. Actions do not mutate the state directly, but only commit the
 * mutations.
 *
 * Further Reading: https://vuex.vuejs.org/en/actions.html
 */

import { GET_EXCHANGE_PRODUCTS } from './constants';
import { fetchExchangeProducts } from './side-effects';

const actions = {
    async getExchangeProducts({ commit }) {
        commit({
            type: GET_EXCHANGE_PRODUCTS.REQUEST,
        });

        try {
            const posts = await fetchExchangeProducts();

            commit({
                type: GET_EXCHANGE_PRODUCTS.SUCCESS,
                posts,
            });
        } catch (error) {
            commit({
                type: GET_EXCHANGE_PRODUCTS.FAILURE,
                error,
            });
        }
    },
};

export default actions;
