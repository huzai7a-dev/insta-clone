// types.ts
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>;
export type SignUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUp'
>;
export type ForgotPasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'ForgotPassword'
>;

export type MainTabParamList = {
  Feed: undefined;
  Profile: undefined;
};

export type FeedScreenProps = NativeStackScreenProps<MainTabParamList, 'Feed'>;
export type ProfileScreenProps = NativeStackScreenProps<
  MainTabParamList,
  'Profile'
>;
