import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: async () => (await import("element-plus")).ElSlider,
  defaultSchema: {
    label: "滑块",
    type: "slider",
    icon: "icon-number",
    field: "slider",
    isInput: true,
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
      {
        label: "默认值",
        type: "slider",
        field: "componentProps.defaultValue",
      },
    ],
  }
} as ComponentConfigModel;
