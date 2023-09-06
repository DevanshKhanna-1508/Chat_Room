import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterationScreen = () => {
  const [email, setemail] = useState ('');
  const [password, setpassword] = useState ('');
  const navigation = useNavigation ();
  const [name, setname] = useState ('');
  const HandleRegisteration = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

      axios
        .post ("http://localhost:8000/register", user)
        .then ((response) => {
          console.log (response);
          Alert.alert (
            'Registeration Sucessfull',
            'You have been registered sucessfully'
          );
          setname ("");
          setemail ("");
          setpassword ("");
        })
        .catch ((error) => {
          Alert.alert ('Registeration Failed',
           'Unable to regsiter your account');
          console.log ('Registeration failed', error);
        });
    };


  return (
    <SafeAreaView styles={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.sign}>
          <Text style={styles.signtxt}>Register</Text>
          <Text style={styles.txt}>Register to your account</Text>
        </View>
        <View style={{marginTop: 50, marginLeft: 60}}>
          <Text style={{fontSize: 18, color: 'gray', marginLeft: 5}}>
            Name
          </Text>
          <TextInput
            value={name}
            onChangeText={text => setname (text)}
            placeholder="Enter your name"
            style={styles.input}
          />
        </View>

        <View style={{marginTop: 25, marginLeft: 60}}>
          <Text style={{fontSize: 18, color: 'gray', marginLeft: 5}}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={text => setemail (text)}
            placeholder="Enter your email"
            style={styles.input}
          />
        </View>
        <View style={{marginTop: 25, marginLeft: 60}}>
          <Text style={{fontSize: 18, color: 'gray', marginLeft: 5}}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={text => setpassword (text)}
            secureTextEntry={true}
            placeholder="Enter your password"
            style={styles.input}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 80}}>
          <Pressable onPress={HandleRegisteration} style={styles.btun}>
            <Text style={styles.btuntxt}>Register</Text>
          </Pressable>

        </View>
        <View style={{alignItems: 'center', marginTop: 7}}>
          <Text style={{fontSize: 14}}>
            Already have a account??
          </Text>
          <Pressable onPress={() => navigation.goBack ()}>
            <Text style={{color: 'blue'}}>Sign In</Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterationScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  sign: {
    alignItems: 'center',
    marginTop: 150,
  },
  signtxt: {
    fontSize: 30,
    color: '#29afed',
    fontWeight: '600',
  },
  txt: {
    marginTop: 5,
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 4,
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
  btun: {
    height: 50,
    width: 180,
    backgroundColor: '#4A5582',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btuntxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  signup: {
    marginTop: 10,
    fontSize: 15,
    color: 'gray',
  },
});
