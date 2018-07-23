import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Card, CardItem, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shifts } = this.props;

    this.props.employeeCreate({ name, phone, shifts });
  }

  render() {
    return (
      <View>
        <Card>
          <EmployeeForm {...this.props} />
          <CardItem>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shifts } = employeeForm;

  return { name, phone, shifts };
};

export default connect(mapStateToProps, {
   employeeUpdate, employeeCreate
 })(EmployeeCreate);
