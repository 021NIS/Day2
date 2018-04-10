import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text1}>НИШ</Text>
				<Text style={styles.text2}>ХБН</Text>
				<Text style={styles.text3}>АЛМАТЫ</Text>
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
	text1: {
		fontSize: 25,
		color: 'red',
		textAlign: 'right'
	},
	text2: {
		fontSize: 45,
		color: 'green'
	},
	text3: {
		fontSize: 35,
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'right'
	}
});
