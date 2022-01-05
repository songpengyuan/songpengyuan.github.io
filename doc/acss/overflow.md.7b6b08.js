(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1486:function(s,n){s.exports={content:["article",["p","Hunt UI 引入了以下功能类，以控制元素内容超过其容器时的表现。"],["p","相关 CSS 属性：",["code","overflow"]," ",["code","::-webkit-scrollbar"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"overflow-overlay"</span><span class="token punctuation">:</span> "overflow<span class="token punctuation">:</span> overlay<span class="token comment" spellcheck="true">;\\n::-webkit-scrollbar{\\n  width: 14px;\\n  height: 14px;\\n}\\n...",</span>\n  <span class="token string">"overflow-auto"</span><span class="token punctuation">:</span> "overflow<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-hidden"</span><span class="token punctuation">:</span> "overflow<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-visible"</span><span class="token punctuation">:</span> "overflow<span class="token punctuation">:</span> visible<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-scroll"</span><span class="token punctuation">:</span> "overflow<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-x-auto"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-y-auto"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-x-hidden"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-y-hidden"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflox-x-visible"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> visible<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-y-visible"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> visible<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-x-scroll"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"overflow-y-scroll"</span><span class="token punctuation">:</span> "overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "overflow-overlay": "overflow: overlay;\\n::-webkit-scrollbar{\\n  width: 14px;\\n  height: 14px;\\n}\\n...",\n  "overflow-auto": "overflow: auto;",\n  "overflow-hidden": "overflow: hidden;",\n  "overflow-visible": "overflow: visible;",\n  "overflow-scroll": "overflow: scroll;",\n  "overflow-x-auto": "overflow-x: auto;",\n  "overflow-y-auto": "overflow-y: auto;",\n  "overflow-x-hidden": "overflow-x: hidden;",\n  "overflow-y-hidden": "overflow-y: hidden;",\n  "overflox-x-visible": "overflow-x: visible;",\n  "overflow-y-visible": "overflow-y: visible;",\n  "overflow-x-scroll": "overflow-x: scroll;",\n  "overflow-y-scroll": "overflow-y: scroll;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-3/4 h-300 overflow-overlay text-16 text-white text-center rounded-6"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-20 bg-green bg-opacity-10"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-20 bg-green bg-opacity-20"</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-20 bg-green bg-opacity-30"</span><span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-20 bg-green bg-opacity-40"</span><span class="token operator">></span><span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-20 bg-green bg-opacity-50"</span><span class="token operator">></span><span class="token number">5</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-20 bg-green bg-opacity-60"</span><span class="token operator">></span><span class="token number">6</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="w-3/4 h-300 overflow-overlay text-16 text-white text-center rounded-6">\n    <div className="p-20 bg-green bg-opacity-10">1</div>\n    <div className="p-20 bg-green bg-opacity-20">2</div>\n    <div className="p-20 bg-green bg-opacity-30">3</div>\n    <div className="p-20 bg-green bg-opacity-40">4</div>\n    <div className="p-20 bg-green bg-opacity-50">5</div>\n    <div className="p-20 bg-green bg-opacity-60">6</div>\n  </div>\n)']]],meta:{title:"Overflow",filename:"doc/acss/overflow.md"}}}}]);