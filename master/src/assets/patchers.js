import patchDynamicAppend from 'qiankun/es/sandbox/patchers/dynamicHeadAppend';
import patchHistoryListener from 'qiankun/es/sandbox/patchers/historyListener';
import patchInterval from 'qiankun/es/sandbox/patchers/interval';
import patchWindowListener from 'qiankun/es/sandbox/patchers/windowListener';

export function patchAtMounting(appName, elementGetter, proxy, singular) {
  return [patchInterval(), patchWindowListener(), patchHistoryListener(), patchDynamicAppend(appName, elementGetter, proxy, true, singular)];
}
export function patchAtBootstrapping(appName, elementGetter, proxy, singular) {
  return [patchDynamicAppend(appName, elementGetter, proxy, false, singular)];
}