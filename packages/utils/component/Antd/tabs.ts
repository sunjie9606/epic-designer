export default {
  component: () => import("./KTabs"),
  schema: {
    label: "标签页",
    type: "tabs",
    icon: "icon-xiala",
    children: []
  },
  atteditSchemas: [
    {
      label: "垂直对齐方式",
      type: "input",
      attrIndex: "componentProps.align",
    },
    {
      label: "水平排列方式",
      type: "input",
      attrIndex: "componentProps.justify",
    },
    {
      label: "栅格间距",
      type: "input",
      attrIndex: "componentProps.gutter",
    },
    {
      label: "自动换行",
      type: "switch",
      attrIndex: "componentProps.wrap",
    },


  ],
  bindModel: "value",
};
