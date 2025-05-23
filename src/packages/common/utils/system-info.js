import { getBrowserInfo } from './browser-info';
import { getWindowInfo } from './window-info';


const { toString } = Object.prototype;

export function isPlainObject(obj) {
  return toString.call(obj) === '[object Object]';
}

export function sortObject(obj) {
  const sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort()
      .forEach((key) => {
        sortObj[key] = obj[key];
      });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}


let browserInfo = {};
let innerInitBrowserInfo = true;

function initBrowserInfo() {
  if (!innerInitBrowserInfo) return;
  browserInfo = getBrowserInfo();
}

export function getDeviceInfo() {
  initBrowserInfo();
  const {
    deviceBrand,
    deviceModel,
    brand,
    model,
    platform,
    system,
    deviceOrientation,
    deviceType,
  } = browserInfo;

  return {
    brand,
    deviceBrand,
    deviceModel,
    devicePixelRatio: window.devicePixelRatio,
    deviceId: '', // deviceId(),
    deviceOrientation,
    deviceType,
    model,
    platform,
    system,
  };
}

export function getAppBaseInfo() {
  initBrowserInfo();
  const { theme, language, browserName, browserVersion } = browserInfo;

  const appLanguage = uni
    ? uni.getLocale
      ? uni.getLocale()
      : language
    : language;

  return {
    appId: '', // __uniConfig.appId,
    appName: '', // __uniConfig.appName,
    appVersion: '', // __uniConfig.appVersion,
    appVersionCode: '', // __uniConfig.appVersionCode,
    appLanguage,
    enableDebug: false,
    hostSDKVersion: undefined,
    hostPackageName: undefined,
    hostFontSizeSetting: undefined,
    hostName: browserName,
    hostVersion: browserVersion,
    hostTheme: theme,
    hostLanguage: language,
    language,
    SDKVersion: '',
    theme,
    version: '',
  };
}

/**
 * 获取系统信息-同步
 */
export function getSystemInfoSync() {
  innerInitBrowserInfo = true;
  initBrowserInfo();
  innerInitBrowserInfo = false;
  const windowInfo = getWindowInfo();
  const deviceInfo = getDeviceInfo();
  const appBaseInfo = getAppBaseInfo();
  innerInitBrowserInfo = true;

  const { ua, browserName, browserVersion, osname, osversion } = browserInfo;

  const systemInfo = Object.assign(
    {},
    windowInfo,
    deviceInfo,
    appBaseInfo,
    {
      browserName,
      browserVersion,
      fontSizeSetting: appBaseInfo.hostFontSizeSetting,
      osName: osname.toLocaleLowerCase(),
      osVersion: osversion,
      osLanguage: undefined,
      osTheme: undefined,
      uniPlatform: 'web',
      uniCompileVersion: '', // __uniConfig.compilerVersion,
      uniRuntimeVersion: '', // __uniConfig.compilerVersion,
      ua,
    },
  );

  delete systemInfo.screenTop;
  delete systemInfo.enableDebug;
  // if (!__uniConfig.darkmode) delete systemInfo.theme;

  return sortObject(systemInfo);
}
/**
 * 获取系统信息-异步
 */
export function getSystemInfo() {
  return getSystemInfoSync();
}
