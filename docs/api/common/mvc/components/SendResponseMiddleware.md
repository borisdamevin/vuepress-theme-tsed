---
sidebar: auto
---
# SendResponseMiddleware <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { SendResponseMiddleware }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.0/src//common/mvc/components/SendResponseMiddleware.ts#L0-L0">/common/mvc/components/SendResponseMiddleware.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">class</span> SendResponseMiddleware <span class="token keyword">implements</span> <a href="#api/common/mvc/imiddleware"><span class="token">IMiddleware</span></a> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> converterService<span class="token punctuation">:</span> <a href="#api/common/converters/converterservice"><span class="token">ConverterService</span></a><span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>converterService<span class="token punctuation">:</span> <a href="#api/common/converters/converterservice"><span class="token">ConverterService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">use</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> response<span class="token punctuation">:</span> Express.<a href="#api/common/filters/response"><span class="token">Response</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
:::


<!-- Members -->




## Members


<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">protected</span> converterService<span class="token punctuation">:</span> <a href="#api/common/converters/converterservice"><span class="token">ConverterService</span></a></code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang "><span class="token function">use</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> response<span class="token punctuation">:</span> Express.<a href="#api/common/filters/response"><span class="token">Response</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre>
:::
</div>