import {
  EMPLOYEE_UPDATE,
} from './types';

// export const nameChanged = (text) => ({
//   type: NAME_CHANGED,
//   payload: text
// });
//
// export const phoneChanged = (text) => ({
//   type: PHONE_CHANGED,
//   payload: text
// });

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});
