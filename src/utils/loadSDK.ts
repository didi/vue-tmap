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
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://map.qq.com/api/gljs?v=${version}&key=${key}&libraries=${libs.join(
      ',',
    )}&callback=tmapCallback`;
    document.body.appendChild(script);
  });
}
