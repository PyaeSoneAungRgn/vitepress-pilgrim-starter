import{_ as s,v as a,b as n,R as o}from"./chunks/framework.f6186024.js";const v=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),l={name:"markdown-examples.md"},e=o(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">\`\`\`js{4}</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">export default {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  data () {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    return {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki css-variables has-highlighted-lines"><code><span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">default</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-function);">data</span><span style="color:var(--shiki-color-text);"> () {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line highlighted"><span style="color:var(--shiki-color-text);">      msg</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">::: info</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">This is an info box.</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">::: tip</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">This is a tip.</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">::: warning</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">This is a warning.</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">::: danger</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">This is a dangerous warning.</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">::: details</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">This is a details block.</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,19),t=[e];function i(p,r,c,h,d,k){return a(),n("div",null,t)}const g=s(l,[["render",i]]);export{v as __pageData,g as default};
