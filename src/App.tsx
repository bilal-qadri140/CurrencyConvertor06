import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CurrencyButton from './CurrencyButton'
// import currencyByRupee from './Constants'
import { currencyByRupee } from './Constants'
import Snackbar from 'react-native-snackbar'
interface CurrencyPerRupee {
  [key: string]: number;
}
export default function App() {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState(0)


  const currencyPerRupee: CurrencyPerRupee = {
    DOLLAR: 0.0036,
    EURO: 0.0034,
    POUND: 0.0030,
    RUBEL: 0.35,
    AUSDOLLAR: 0.0057,
    CANDOLLAR: 0.0049,
    YEN: 0.54,
    DINAR: 0.0011,
    BITCOIN: 0.000000543544886
  }


  const buttonPressed = (currency: string) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please Enter a Value',
        backgroundColor: '#EA7773',
        textColor: '#000',
      });
      setResultValue(0)
    }
    else {
      let result = parseFloat(inputValue) * currencyPerRupee[currency]
      setResultValue(result)
    }
  }

  return (
    <ScrollView style={styles.container}
      keyboardShouldPersistTaps={'handled'}
      automaticallyAdjustKeyboardInsets={true}
    >
      <StatusBar backgroundColor={'#1b262c'} />
      <SafeAreaView >
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {resultValue}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText}
            placeholder='Enter Value'
            placeholderTextColor={'#fff'}
            keyboardType='numeric'
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </View>

        <View style={styles.currencyButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
              key={currency}
              style={styles.currencyButton}
              onPress={() => { buttonPressed(currency) }}
            >
              <Text style={styles.currencyButtonText}>
                {currency}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c'
  },
  resultContainer: {
    height: 80,
    marginTop: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal:6,
  },
  resultText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputContainer: {
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal:6,
  },
  inputText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  },
  currencyButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,

  },
  currencyButton: {
    flexDirection: 'row',
    width: '30%',
    height: 100,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '1.5%',
    backgroundColor: '#0f4c75'
  },
  currencyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
})