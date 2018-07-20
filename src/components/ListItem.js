import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardItem } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <CardItem>
      <Text style={style.titleStyle}>
        {name}
      </Text>
      </CardItem>
    );
  }
}

const style = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
