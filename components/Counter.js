import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} onPress={this.props.add}>
          {this.props.count}
        </Text>
      </View>
    );
  }
}

export default connect(
  ({ count }) => ({ count }),
  (dispatch) => ({ add: dispatch.count.add })
)(Counter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
})