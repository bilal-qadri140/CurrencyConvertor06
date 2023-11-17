import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import type { PropsWithChildren } from 'react'

type CurrencyProps = PropsWithChildren<{
    name: string
    flag: string
}>


const CurrencyButton = (props: CurrencyProps): JSX.Element => {
    return (
        <View style={styles.buttunContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttunContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    }
})

export default CurrencyButton