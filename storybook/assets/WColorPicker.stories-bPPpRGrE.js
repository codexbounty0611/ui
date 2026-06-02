import{C as c}from"./WRoot-Dr78YGtX.js";import{S as m}from"./vue.esm-bundler-DdplDy38.js";import{q as i,e as u}from"./index-TFupZtJ7.js";import"./iframe-1hv05qNq.js";import"./twMerge-CLwyhV7-.js";const C={component:u,title:"Components/ColorPicker",args:{}},o={render:e=>({components:i,setup:()=>{const r=m({r:0,g:0,b:0,...e.modelValue});delete e.modelValue;const t=l=>{r.value={...l}};return{args:{outline:!1,color:r,allowAlpha:!0,...e},handleChange:t}},template:`
            <WRoot :outline="args.outline">
            {{args.color}}
            <WColorPicker
                :modelValue="args.color.value"
                v-bind="args"
                @update:modelValue="handleChange"
            >
            </WColorPicker>
            </WRoot>
        `})},a={...o,args:{allowAlpha:!1}},n={...o,args:{modelValue:{r:255,g:0,b:0}}},s={...o,args:{allowAlpha:!1,customRepresentation:{fromHsvaToString:(e,r)=>new c("hsv",[e.h,e.s,e.v],r?e.a:1).toString({format:"hex"})}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components,
    setup: () => {
      const color = ref({
        r: 0,
        g: 0,
        b: 0 /* , a: 0.5 */,
        ...args.modelValue
      });
      delete (args as any).modelValue;
      const handleChange = (e: any) => {
        color.value = {
          ...e
        };
      };
      return {
        args: {
          outline: false,
          color,
          allowAlpha: true,
          ...args
        },
        handleChange
      };
    },
    template: \`
            <WRoot :outline="args.outline">
            {{args.color}}
            <WColorPicker
                :modelValue="args.color.value"
                v-bind="args"
                @update:modelValue="handleChange"
            >
            </WColorPicker>
            </WRoot>
        \`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    allowAlpha: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    modelValue: {
      r: 255,
      g: 0,
      b: 0
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    allowAlpha: false,
    customRepresentation: {
      fromHsvaToString: (hsva: any, includeAlpha: boolean) => new Color("hsv", [hsva.h, hsva.s, hsva.v], includeAlpha ? hsva.a : 1 // this takes care of the correct hex format
      ).toString({
        format: "hex"
      })
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["Primary","DoesNotAllowAlpha","WithExistingValue","CustomStringRepresentation"];export{s as CustomStringRepresentation,a as DoesNotAllowAlpha,o as Primary,n as WithExistingValue,v as __namedExportsOrder,C as default};
