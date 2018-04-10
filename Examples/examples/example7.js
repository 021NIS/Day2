import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./assets/jsLogo.png')} style={styles.box2} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink'
	},
	box2: {
		width: 200,
		height: 200,
		backgroundColor: 'green'
	}
});
