import{j as e}from"./iframe-CIRVnMV3.js";import{c as p}from"./index-BwobEAja.js";import{c as g}from"./utils-CytzSlOG.js";const m=p("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function r({className:l,variant:u,...f}){return e.jsx("div",{className:g(m({variant:u}),l),...f})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const B={title:"Components/Badge",component:r},a={render:()=>e.jsx("div",{className:"p-4",children:e.jsx(r,{children:"Default"})})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"})]})};var n,s,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <Badge>Default</Badge>
    </div>
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 p-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default","Variants"];export{a as Default,t as Variants,b as __namedExportsOrder,B as default};
