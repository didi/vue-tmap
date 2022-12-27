import { onUnmounted } from 'vue';

export default function useEvent(
  overlay: TMap.GeometryOverlay,
  attrs: Record<string, unknown>,
  emit: (event: string, ...args: unknown[]) => void,
) {
  const events: string[] = [];
  const listeners: Function[] = [];
  Object.keys(attrs).forEach((attr) => {
    if (attr.indexOf('on') === 0) {
      const eventName = attr[2].toLowerCase() + attr.slice(3);
      events.push(eventName);
      listeners.push(emit.bind(null, eventName));
    }
  });

  events.forEach((eventName, i) => {
    overlay.on(eventName, listeners[i]);
  });
  onUnmounted(() => {
    events.forEach((eventName, i) => {
      overlay.off(eventName, listeners[i]);
    });
  });
}
