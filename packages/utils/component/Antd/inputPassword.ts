export default {
  component: async () =>
    (await import("ant-design-vue/lib/input")).InputPassword,
  schema: {
    label: "密码输入框",
    type: "password",
    icon: "icon-number",
    field: "password",
    isInput: true,
  },
  atteditSchemas: [
    {
      label: "字段名",
      type: "input",
      attrIndex: "field",
    },
    {
      label: "文字",
      type: "input",
      attrIndex: "label",
    },
  ],
  bindModel: "value",
};
