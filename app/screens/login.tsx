import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, TextInput, Image} from 'react-native';
import UiButton from '../components/ui/UiButton';
import UiText from '../components/ui/UiText';
import COLORS from '../constants/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNaviation';

type Props = NativeStackScreenProps<RootStackParamList, 'login'>;
const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollViewStyle}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={{width: 60, height: 60, marginBottom: 60}}
            source={require('../assets/Instagram_logo_2016.webp')}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <UiButton
            styleProp={{width: '80%', marginTop: 20}}
            title="Login"
            onPress={() => navigation.navigate('feed')}
          />
          <UiText style={styles.forgottenPasswordText}>
            Forgotten Password?
          </UiText>
        </View>

        <View style={styles.footer}>
          <UiButton
            styleProp={{width: '80%'}}
            title="Create new account"
            onPress={() => console.log('new account')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Image
          style={{width: 100, height: 24}}
          source={require('../assets/insta_text_logo.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  forgottenPasswordText: {
    marginTop: 15,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: COLORS.white,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  footer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default LoginScreen;
