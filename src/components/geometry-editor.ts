/* eslint-disable no-console */
import { defineComponent, inject, Ref, toRaw } from 'vue';

export default defineComponent({
  name: 'tmap-geometry-editor',
  props: {
    selectedStyleId: {
      type: String,
      default: 'selected',
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    const geometry = inject<TMap.GeometryOverlay>('geometry');
    if (!map || !geometry) {
      return {};
    }
    const editor = new TMap.tools.GeometryEditor({
      map: toRaw(map.value),
      overlayList: [
        {
          overlay: geometry,
          id: geometry.id,
          selectedStyleId: props.selectedStyleId,
        },
      ],
      actionMode: TMap.tools.constants.EDITOR_ACTION.INTERACT, // 编辑器的工作模式
      activeOverlayId: geometry.id, // 激活图层
      selectable: true, // 开启点选功能
      snappable: true, // 开启吸附
    });
    editor.on('active_changed', (e: unknown) => {
      console.log('active_changed', e);
    });
    editor.on('select', (e: unknown) => {
      console.log('select', e);
    });
    editor.on('draw_complete', (e: unknown) => {
      console.log('draw_complete', e);
    });
    editor.on('adjust_complete', (e: unknown) => {
      console.log('adjust_complete', e);
    });
    editor.on('delete_complete', (e: unknown) => {
      console.log('delete_complete', e);
    });
    editor.on('split_complete', (e: unknown) => {
      console.log('split_complete', e);
    });
    editor.on('union_complete', (e: unknown) => {
      console.log('union_complete', e);
    });
    editor.on('split_fail', (e: unknown) => {
      console.log('split_fail', e);
    });
    editor.on('union_fail', (e: unknown) => {
      console.log('union_fail', e);
    });
    return {};
  },
  render() {
    return null;
  },
});
