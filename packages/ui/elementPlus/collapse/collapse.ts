import { defineComponent, h, renderSlot, type PropType } from "vue";
import { ElCollapse } from "element-plus";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      required: true,
      default: () => ({}),
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        title: props.componentSchema?.label ?? "",
      } as any;
      const children = componentSchema.children;
      delete componentSchema.children;

      return h(ElCollapse, componentSchema, {
        default: () => [
          renderSlot(slots, "edit-node", {}, () =>
            children.map((subcomponentSchema: ComponentSchema) =>
              renderSlot(slots, "node", { componentSchema: subcomponentSchema })
            )
          ),
        ],
      });
    };
  },
});
