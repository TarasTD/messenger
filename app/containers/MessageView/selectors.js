import { createSelector } from 'reselect';

/**
 * Direct selector to the messageView state domain
 */
const selectMessageViewDomain = (state) => state.get('messageView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MessageView
 */

const makeSelectMessageView = () => createSelector(
  selectMessageViewDomain,
  (substate) => substate.toJS()
);

export default makeSelectMessageView;
export {
  selectMessageViewDomain,
};
