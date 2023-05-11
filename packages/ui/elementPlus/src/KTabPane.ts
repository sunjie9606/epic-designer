import { defineComponent, h, renderSlot, type PropType } from 'vue'
import { ElTabPane } from 'element-plus'
import { type NodeItem } from '../../../types/kDesigner'
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup (props, { slots }) {
    return () => {
      const record = {
        ...props.record,
        name: props.record?.id ?? ''
      } as any
      const children = record.children
      delete record.children
      return h(ElTabPane, record, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((record: NodeItem) =>
              renderSlot(slots, 'node', { record })
            )
          )
      })
    }
  }
})
