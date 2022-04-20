export default function useCleanUp(map: TMap.Map, id: string) {
  const overlay = map.getLayer(id);
  if (overlay) {
    overlay.setMap(null);
  }
  // 有时候新组件加载会在旧组件卸载之前，防止出现边框不显示的bug
  const oldOverlayBorder = map.getLayer(`${id}_border_line`);
  if (oldOverlayBorder) {
    oldOverlayBorder.setMap(null);
  }
  const overlayBorder = map.getLayer(`${id}_border`);
  if (overlayBorder) {
    overlayBorder.setMap(null);
  }
}
