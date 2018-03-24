/**
 * Demo Actions
 *
 * These are functions that dispatch (communicate changes to the store) our
 * mutations. Actions do not mutate the state directly, but only commit the
 * mutations.
 *
 * Further Reading: https://vuex.vuejs.org/en/actions.html
 */

import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
  GET_REDDIT_POSTS,
} from './constants';
import { getRedditData } from './side-effects';

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
      const posts = await getRedditData();

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
};


export default actions;