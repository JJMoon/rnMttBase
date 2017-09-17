//
//  NaverAuthRct.h
//  naverAuth
//
//  Created by JJTTMOON on 2017. 6. 28..
//  Copyright © 2017년 Facebook. All rights reserved.
//

#ifndef NaverAuthRct_h
#define NaverAuthRct_h

//  이 파일은 참고 용..  나중에 지울 예정..
#import <React/RCTBridgeModule.h>

#import "NaverThirdPartyConstantsForApp.h"
#import "NaverThirdPartyLoginConnection.h"

@interface ReactIosAuth : NSObject <RCTBridgeModule, NaverThirdPartyLoginConnectionDelegate>
{
  NaverThirdPartyLoginConnection *_thirdPartyLoginConn;
  
  RCTResponseSenderBlock naverTokenSend;
}
@end



#endif /* NaverAuthRct_h */
