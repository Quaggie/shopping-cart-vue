import { expect } from 'chai';
import { mutations } from '../src/vuex/store';

describe('Mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { developers: [] }
    // apply mutation
    ADD_DEVELOPER(state, { username: 'Jonathan', price: 200} );
    // assert result
    expect(state.developer.length).to.equal(2);
  });
});
