import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shifts } = this.props;
    this.props.employeeSave({
      name, phone, shifts, uid: this.props.employee.uid
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shifts } = state.employeeForm;

  return { name, phone, shifts };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit);
