import mutations from '../mutations';
import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
} from '../constants';

describe('Example Mutations', () => {
  it(UPDATE_NAME, () => {
    // Mock State/payload
    const state = { name: '' };
    const payload = { name: 'John Doe' };

    // Apply Mutation
    mutations[UPDATE_NAME](state, payload);

    // Assert Result
    expect(state.name).toBe('John Doe');
  });

  it(INCREMENT, () => {
    // Mock State
    const state = { count: 0 };

    // Apply Mutation
    mutations[INCREMENT](state);

    // Assert Result
    expect(state.count).toBe(1);
  });

  it(DECREMENT, () => {
    // Mock State
    const state = { count: 0 };

    // Apply Mutation
    mutations[DECREMENT](state);

    // Assert Result
    expect(state.count).toBe(-1);
  });
});