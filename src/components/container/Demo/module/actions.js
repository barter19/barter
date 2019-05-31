/**
 * Demo Actions
 *
 * These are functions that dispatch (communicate changes to the store) our
 * mutations. Actions do not mutate the state directly, but only commit the
 * mutations.
 *
 * Further Reading: https://vuex.vuejs.org/en/actions.html
 */

import { setI18nLanguage } from '@/i18n';
import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
  GET_REDDIT_POSTS,
  UPDATE_LOCALE,
} from './constants';
import { fetchRedditPosts } from './side-effects';
import { createApolloFetch } from 'apollo-fetch';

const uri = 'http://127.0.0.1:3000/graphql';
const apolloFetch = createApolloFetch({ uri });

const actions = {
  updateName({ commit }, payload) {
    commit({
      type: UPDATE_NAME,
      name: payload.name,
    });
  },
  incrementCounter({ commit }) {
    commit({
      type: INCREMENT,
    });
  },
  decrementCounter({ commit }) {
    commit({
      type: DECREMENT,
    });
  },
  async getRedditPosts({ commit }) {
    commit({
      type: GET_REDDIT_POSTS.REQUEST,
    });

    try {
      const posts = await fetchRedditPosts();

      commit({
        type: GET_REDDIT_POSTS.SUCCESS,
        posts,
      });
    } catch (error) {
      commit({
        type: GET_REDDIT_POSTS.FAILURE,
        error,
      });
    }
  },
  updateLocale({ commit }, payload) {
    const locale = setI18nLanguage(payload.locale);

    commit({
      type: UPDATE_LOCALE,
      locale,
    });
  },
  registerUser(){
    const query = `
    query Users {
      users {
        id
      }
    }`;
  apolloFetch({ query}).then(result => {
    const { data } = result;

  console.log(result);
  })
  .catch(error => {
    //respond to a network error
  });
}
};

export default actions;
