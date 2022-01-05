(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1463:function(s,n){s.exports={content:["article",["p","Hunt UI 引入了以下功能类，以控制 ",["code","flex"]," 容器内的元素是如何布局的，定义了主轴的方向。"],["p","相关 CSS 属性：",["code","flex-direction"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"flex-row"</span><span class="token punctuation">:</span> "flex<span class="token operator">-</span>direction<span class="token punctuation">:</span> row<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"flex-row-reverse"</span><span class="token punctuation">:</span> "flex<span class="token operator">-</span>direction<span class="token punctuation">:</span> row<span class="token operator">-</span>reverse<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"flex-col"</span><span class="token punctuation">:</span> "flex<span class="token operator">-</span>direction<span class="token punctuation">:</span> column<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"flex-col-reverse"</span><span class="token punctuation">:</span> "flex<span class="token operator">-</span>direction<span class="token punctuation">:</span> column<span class="token operator">-</span>reverse<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "flex-row": "flex-direction: row;",\n  "flex-row-reverse": "flex-direction: row-reverse;",\n  "flex-col": "flex-direction: column;",\n  "flex-col-reverse": "flex-direction: column-reverse;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col space-y-4 p-16 w-1/2 text-white text-center bg-tp-gray-100 rounded-4"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="flex flex-col space-y-4 p-16 w-1/2 text-white text-center bg-tp-gray-100 rounded-4">\n    <div className="px-16 py-10 bg-green rounded-4">1</div>\n    <div className="px-16 py-10 bg-green rounded-4">2</div>\n    <div className="px-16 py-10 bg-green rounded-4">3</div>\n  </div>\n)']]],meta:{title:"Flex Direction",filename:"doc/acss/flex-direction.md"}}}}]);