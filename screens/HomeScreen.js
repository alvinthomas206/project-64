import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';


export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = { word: '', definition: '', phonetics: '' };
  }
  getWord = (word) => {
    var searchKeyword = word.toLowerCase();
    try{
          var wordData = dictionary[word]['word'];
          var definition = dictionary[word]['definition'];
          var lexicalCategory =  dictionary[word]['lexicalCategory'];
          this.setState({
            word: this.state.text,
            definition: definition,
            lexicalCategory: lexicalCategory,
          });
    }
  catch{
    alert("Sorry this word is not available now")
 this.setState({
   
            'word': this.state.text,
            'definition': 'Not Found',
            'lexicalCategory': 'Not Found',
            'isSerchPressed':false
          });

    }

       
  
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor='#00adb5'
          centerComponent={{
            text: 'Pocket Dictionary',

            style: {
              color: 'white',
              fontSize: 20,
            },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchedPressed: false,
              word: 'loading....',
              lexicalCategory: 'loading....',
              examples: [],
              definition: 'loading....',
            });
          }}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.textIn}> Search </Text>{' '}
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 20,
            color: '#eeeeee',
            fontSize: 18,
            marginTop: 10,
          }}>
          Word = {this.state.word}
        </Text>
        <Text
          style={{
            marginLeft: 20,
            color: '#eeeeee',
            fontSize: 18,
            marginTop: 10,
          }}>
          Category = {this.state.lexicalCategory}
        </Text>
        <Text
          style={{
            marginLeft: 20,
            color: '#eeeeee',
            fontSize: 18,
            marginTop: 10,
          }}>
          Definition = {this.state.definition}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    color: '#eeeeee',
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'red',
    outline: 'none',

    borderRadius: 100,
  },
  searchButton: {
    width: '40%',
    height: 50,
    alignSelf: 'center',
    padding: 8,
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'red',
    backgroundColor: '#00adb5',
  },
  textIn: {
    color: '#eeeeee',
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});