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
		paddingTop: 20,
		backgroundColor: 'pink'
	},
	box1: {
		width: 50,
		height: 50,
		backgroundColor: 'blue'
	},
	box2: {
		width: 100,
		height: 100,
		backgroundColor: 'green'
	},
	box3: {
		width: 150,
		height: 150,
		backgroundColor: 'red'
	}
});
