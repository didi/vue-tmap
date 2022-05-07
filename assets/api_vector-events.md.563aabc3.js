import{_ as a,c as p,a as t,b as o,e as n,r as e,o as c}from"./app.aec0a7fb.js";const f='{"title":"\u77E2\u91CF\u56FE\u5F62\u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u793A\u4F8B","slug":"\u57FA\u7840\u793A\u4F8B"}],"relativePath":"api/vector-events.md"}',l={},u=n('<h1 id="\u77E2\u91CF\u56FE\u5F62\u4E8B\u4EF6" tabindex="-1">\u77E2\u91CF\u56FE\u5F62\u4E8B\u4EF6 <a class="header-anchor" href="#\u77E2\u91CF\u56FE\u5F62\u4E8B\u4EF6" aria-hidden="true">#</a></h1><p>\u6298\u7EBF\u3001\u591A\u8FB9\u5F62\u3001\u5706\u5F62\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528vue\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F\u7ED1\u5B9A\u4E8B\u4EF6<code>v-on:click=&quot;methodName&quot;</code> \u6216\u4F7F\u7528\u5FEB\u6377\u65B9\u5F0F <code>@click=&quot;methodName&quot;</code></p><p>\u652F\u6301\u7684\u4E8B\u4EF6\u6709</p><ul><li>click</li><li>dblclick</li><li>mousedown</li><li>mouseup</li><li>mousemove</li><li>hover</li><li>touchstart</li><li>touchmove</li><li>touchend</li></ul><p>\u76D1\u542C\u51FD\u6570\u7684\u53C2\u6570\u89C4\u8303\u53C2\u8003\u5B98\u65B9\u6587\u6863 <a href="https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3" target="_blank" rel="noopener noreferrer">https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3</a></p><h2 id="\u57FA\u7840\u793A\u4F8B" tabindex="-1">\u57FA\u7840\u793A\u4F8B <a class="header-anchor" href="#\u57FA\u7840\u793A\u4F8B" aria-hidden="true">#</a></h2>',6),k={style:{height:"400px"}},r=n(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-map</span>
    <span class="token attr-name">mapKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:doubleClickZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tmap-multi-polygon</span>
      <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:geometries</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>geometries<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@dblclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u6539\u53D8\u989C\u8272\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setColor(<span class="token punctuation">&#39;</span>#00FF00<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setColor(<span class="token punctuation">&#39;</span>#00FFFF<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u6DFB\u52A0\u591A\u8FB9\u5F62<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onAdd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onRemove<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>remove<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tmap-map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> shallowRef<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;multi-polygon&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> geometries <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;polygonTen&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u591A\u8FB9\u5F62\u56FE\u5F62\u6570\u636E\u7684\u6807\u5FD7\u4FE1\u606F</span>
        <span class="token literal-property property">styleId</span><span class="token operator">:</span> <span class="token string">&#39;polygon&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6837\u5F0Fid</span>
        <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041054</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.272303</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.039419</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.272721</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.039764</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.274824</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041374</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.274491</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u591A\u8FB9\u5F62\u7684\u4F4D\u7F6E\u4FE1\u606F</span>
        <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u591A\u8FB9\u5F62\u7684\u5C5E\u6027\u6570\u636E</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u817E\u8BAF\u5317\u4EAC\u603B\u90E8&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#3777FF&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9762\u586B\u5145\u8272</span>
        <span class="token literal-property property">showBorder</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u62D4\u8D77\u9762\u7684\u8FB9\u7EBF</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#ff00ff&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FB9\u7EBF\u989C\u8272</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ssss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff00f&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showBorder</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#3F09F9&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4F7F\u7528setup\u51FD\u6570\u9700\u8981\u624B\u52A8\u5305\u88C5reactive</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;polygon-layer&#39;</span><span class="token punctuation">,</span>
      styles<span class="token punctuation">,</span>
      geometries<span class="token punctuation">,</span>
      <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        styles<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>styles<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
          <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token operator">...</span>styles<span class="token punctuation">.</span>value<span class="token punctuation">.</span>polygon<span class="token punctuation">,</span>
            color<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onAdd</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>geometries<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        geometries<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token operator">...</span><span class="token function">unref</span><span class="token punctuation">(</span>geometries<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;polygonSina&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u591A\u8FB9\u5F62\u56FE\u5F62\u6570\u636E\u7684\u6807\u5FD7\u4FE1\u606F</span>
            <span class="token literal-property property">styleId</span><span class="token operator">:</span> <span class="token string">&#39;ssss&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6837\u5F0Fid</span>
            <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041649</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.275059</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.040828</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.275237</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.040934</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276079</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041041</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276229</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041095</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276481</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041058</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276787</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041144</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.277613</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041965</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.277404</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041879</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276653</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041776</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276293</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041752</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.276073</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">40.041768</span><span class="token punctuation">,</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">116.275864</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// \u591A\u8FB9\u5F62\u7684\u5C5E\u6027\u6570\u636E</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5176\u4ED6\u5EFA\u7B51\u7269&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onRemove</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>geometries<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        geometries<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">unref</span><span class="token punctuation">(</span>geometries<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.color</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1001<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.green</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.blue</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #00ffff<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function i(y,g,m,d,v,b){const s=e("DemoMultiPolygon");return c(),p("div",null,[u,t("div",k,[o(s)]),r])}var h=a(l,[["render",i]]);export{f as __pageData,h as default};