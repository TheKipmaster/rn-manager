import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, Text } from 'react-native';
import { Card, CardItem, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  onNameChange(value) {
    this.props.employeeUpdate({ prop: 'name', value });
  }
  onPhoneChange(value) {
    this.props.employeeUpdate({ prop: 'phone', value });
  }
  onShiftChange(value) {
    this.props.employeeUpdate({ prop: 'shifts', value });
  }

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Input
              label='Name'
              placeholder='Sarah'
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
            />
          </CardItem>

          <CardItem>
            <Input
              label='Phone'
              placeholder='(61) 9 9123-3790'
              onChangeText={this.onPhoneChange.bind(this)}
              value={this.props.phone}
            />
          </CardItem>

          <CardItem>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker
              style={{ flex: 2 }}
              selectedValue={this.props.shifts}
              onValueChange={this.onShiftChange.bind(this)}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardItem>

          <CardItem>
            <Button>
              Create
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 10,
    alignSelf: 'center',
    flex: 1
  }
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shifts } = employeeForm;

  return { name, phone, shifts };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
