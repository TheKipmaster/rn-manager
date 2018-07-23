import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  console.ignoredYellowBox = ['Setting a timer'];
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginForm}
            title='Please Login'
            initial
          />
        </Scene>

        <Scene key='main'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='List of Employees'
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate(); }}
            initial
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='New Employee'
          />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
