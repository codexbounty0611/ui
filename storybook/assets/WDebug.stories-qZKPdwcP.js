import{t}from"./WRoot-Dr78YGtX.js";import{q as o,g as m}from"./index-TFupZtJ7.js";import"./vue.esm-bundler-DdplDy38.js";import"./iframe-1hv05qNq.js";import"./twMerge-CLwyhV7-.js";const d={component:m,title:"Components/Debug",args:{value:{any:["any",{value:"any"}]}}},a={render:s=>({components:o,setup:()=>({args:s}),template:`
            <WDebug v-bind="args" />
        `})},r={...a,args:{...a.args,value:{any:["any",{value:"any"}]},tab:2}},e={...a,args:{...a.args,value:void 0}},n={...a,args:{...a.args,value:t`
            Manually
                Indented
                    String
        `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => ({
      args
    }),
    template: \`
            <WDebug v-bind="args" />
        \`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    value: {
      any: ["any", {
        value: "any"
      }]
    },
    tab: 2
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    value: crop\`
            Manually
                Indented
                    String
        \`
  }
}`,...n.parameters?.docs?.source}}};const l=["Primary","WithCustomTab","NoValue","StringWithWhitespace"];export{e as NoValue,a as Primary,n as StringWithWhitespace,r as WithCustomTab,l as __namedExportsOrder,d as default};
