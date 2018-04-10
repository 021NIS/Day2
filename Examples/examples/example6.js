import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.box1} />
				<View style={styles.box2} />
				<View style={styles.box3} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink'
	},
	box1: {
		flex: 2,
		backgroundColor: 'blue'
	},
	box2: {
		flex: 5,
		backgroundColor: 'green'
	},
	box3: {
		flex: 3,
		backgroundColor: 'red'
	}
});
