
import { createSelector } from 'reselect';

const selectLeadEntry = (state) => {
 // console.log('original state is', state);
  if(!!state) {
    return state.get("pages");
  }else{
    return state;
  }
};


const makeSelectFormState = () => createSelector(
  selectLeadEntry,
  (state) => {
    //  console.log('loginState' , loginState);
    return state;
  }
);

export {
  selectLeadEntry,
  makeSelectFormState
};
