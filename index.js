// Header Search Path in iOS
//   $(SRCROOT)/../react-native/React
//   $(SRCROOT)/../../React

import { NativeModules, Platform } from 'react-native';

// const NaverLogin = NativeModules.RNNaverLogin;
const { RNNaverLogin } = NativeModules;
/*

const { RNNetworkInfo } = NativeModules;

const NetworkInfo = {
  getSSID(ssid) {
    RNNetworkInfo.getSSID(ssid);
  },

  getBSSID(bssid) {
    RNNetworkInfo.getBSSID(bssid);
  },

  getIPAddress(ip) {
    RNNetworkInfo.getIPAddress(ip);
  },

  getIPV4Address(ip) {
    RNNetworkInfo.getIPV4Address(ip);
  }
}

module.exports = { NetworkInfo }
*/
//
// export function experi(arg) {
//   console.log(arg);
//   return `Hello world to arg : ${arg}`;
// }
//
// export function reachToIos(arg) {
//   // -(void)helloToCocoa:(NSString *)param {
//   NaverLogin.helloToCocoa(arg);
// }

const RnNaverAuth = {
  reachToIos(arg) {
    console.log(' reached To Ios Method .js ');
    // -(void)helloToCocoa:(NSString *)param {
    NaverLogin.helloToCocoa(arg);
 }
}

module.exports = { RnNaverAuth };
