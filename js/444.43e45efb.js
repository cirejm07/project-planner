"use strict";(self["webpackChunkproject_planner"]=self["webpackChunkproject_planner"]||[]).push([[444],{4444:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var l=n(3396),a=n(9242);const i=t=>((0,l.dD)("data-v-07d2ade4"),t=t(),(0,l.Cn)(),t),d=i((()=>(0,l._)("label",null,"Title",-1))),r=i((()=>(0,l._)("label",null,"Details:",-1))),o=i((()=>(0,l._)("button",null,"Add Project",-1)));function u(t,e,n,i,u,s){return(0,l.wg)(),(0,l.iD)("div",{onSubmit:e[2]||(e[2]=(0,a.iM)(((...t)=>s.handleSubmit&&s.handleSubmit(...t)),["prevent"]))},[(0,l._)("form",null,[d,(0,l.wy)((0,l._)("input",{input:"text","onUpdate:modelValue":e[0]||(e[0]=t=>u.title=t),required:""},null,512),[[a.nr,u.title]]),r,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.details=t),required:""},null,512),[[a.nr,u.details]]),o])],32)}n(7658);var s={data(){return{title:"",details:""}},methods:{async handleSubmit(){const t=await fetch("http://localhost:3000/projects/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.title,details:this.details,isCompleted:!1})});t.ok&&this.$router.push({name:"home"})}}},p=n(89);const c=(0,p.Z)(s,[["render",u],["__scopeId","data-v-07d2ade4"]]);var h=c}}]);
//# sourceMappingURL=444.43e45efb.js.map