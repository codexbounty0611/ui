import{q as o,_ as s}from"./index-TFupZtJ7.js";import"./WRoot-Dr78YGtX.js";import"./vue.esm-bundler-DdplDy38.js";import"./iframe-1hv05qNq.js";import"./twMerge-CLwyhV7-.js";const c={component:s,title:"Components/Checkbox",args:{modelValue:!0,label:"Label"}},e={render:r=>({components:o,setup:()=>({args:r}),template:`
            <WCheckbox v-bind="args" v-model="args.modelValue"></WCheckbox>
            <br>
            Opposite State:
            <br>
            <WCheckbox v-bind="args" :modelValue="!args.modelValue" @update:modelValue="args.modelValue = !$event"></WCheckbox>
        `})},a={...e,args:{disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
            <WCheckbox v-bind="args" v-model="args.modelValue"></WCheckbox>
            <br>
            Opposite State:
            <br>
            <WCheckbox v-bind="args" :modelValue="!args.modelValue" @update:modelValue="args.modelValue = !$event"></WCheckbox>
        \`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const p=["Primary","Disabled"];export{a as Disabled,e as Primary,p as __namedExportsOrder,c as default};
