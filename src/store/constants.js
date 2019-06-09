/* eslint import/prefer-default-export: 0 */

/**
 * Global Constants (Mutation Types)
 *
 * Mutations that are possible in this application.
 *
 * Each action has a corresponding mutation type, which the mutator knows and
 * picks up on. To avoid weird typos between the mutations and the actions, we
 * save them as constants here.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */


export const GET_EXCHANGE_PRODUCTS = {
    REQUEST: 'GET_EXCHANGE_PRODUCTS_REQUEST',
    SUCCESS: 'GET_EXCHANGE_PRODUCTS_SUCCESS',
    FAILURE: 'GET_EXCHANGE_PRODUCTS_FAILURE',
  };