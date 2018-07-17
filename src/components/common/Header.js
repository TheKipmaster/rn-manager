// imports
import React from 'react';
import { Text, View } from 'react-native';

// create component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justfyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
    // shadowColor: 'red',
    // shadowOffset: { width: 0, height: 20 },
    // shadowOpacity: 1,
  },
  textStyle: {
    fontSize: 20
  }
};

// export component
export { Header };
