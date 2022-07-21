/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
export default function loadSDK(
  version: string,
  key: string,
  libraries?: string[],
) {
  const libs = ['visualization', 'tools', 'geometry', ...(libraries || [])];
  return new Promise((resolve) => {
    if (window.TMap) {
      resolve(window.TMap);
      return;
    }
    window.tmapCallback = function tmapCallback() {
      resolve(window.TMap);
    };

    // 在乾坤子应用中使用
    if ((window as any).__POWERED_BY_QIANKUN__ && top) {
      top.tmapCallback = function tmapCallback() {
        resolve(TMap);
      };
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://map.qq.com/api/gljs?v=${version}&key=${key}&libraries=${libs.join(
      ',',
    )}&callback=tmapCallback`;
    document.body.appendChild(script);
  });
}
