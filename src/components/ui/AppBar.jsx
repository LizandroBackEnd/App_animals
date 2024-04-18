import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

const AppBarTab = ({ to, text }) => {
	return (
		<TouchableOpacity activeOpacity={1} style={styles.touchNav}>
			<Link to={to}>
				<View>
					<Text style={styles.textNav}>{text}</Text>
				</View>
			</Link>
		</TouchableOpacity>
	)
}

export const AppBar = () => {
	return (
		<View style={styles.appBar}>
			<AppBarTab to='/' text='Animales' />
			<AppBarTab to='/letras' text='Letras' />
		</View>
	)
}

const styles = StyleSheet.create({
	appBar: {
		backgroundColor: '#000',
		position: 'absolute',
		height: 80,
		padding: 10,
		top: 0,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	textNav: {
		color: '#000'
	},
	touchNav: {
		marginTop: 25,
		padding: 5,
		borderRadius: 5
	},
	textNav: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#FFF'
	}
})
