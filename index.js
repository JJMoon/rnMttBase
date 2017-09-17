// Header Search Path in iOS
//   $(SRCROOT)/../react-native/React
//   $(SRCROOT)/../../React

import { NativeModules, Platform } from 'react-native';

const NaverLogin = NativeModules.RNNaverLogin;

export function experi(arg) {
  console.log(arg);
  return `Hello world to arg : ${arg}`;
}

export function reachToIos(arg) {
  // -(void)helloToCocoa:(NSString *)param {
  NaverLogin.helloToCocoa(arg);
}
