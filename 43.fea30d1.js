webpackJsonp([43],{222:function(s,a){s.exports='<section><h1>Search</h1> <blockquote> <p>A search bar with a searching result list.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Search } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Search.name, Search);\n</code></pre> <h2>Examples</h2> <p>Basic usage</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-search</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"value"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-search</span>&gt;</span>\n</code></pre> <p>Configure texts</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-search</span>\n  <span class=hljs-attr>v-model</span>=<span class=hljs-string>"value"</span>\n  <span class=hljs-attr>cancel-text</span>=<span class=hljs-string>"取消"</span>\n  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"搜索"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-search</span>&gt;</span>\n</code></pre> <p>Display searching result</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-search</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:result.sync</span>=<span class=hljs-string>"result"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-search</span>&gt;</span>\n</code></pre> <p>Custom the display of the searching result list</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-search</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"value"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span>\n    <span class=hljs-attr>v-for</span>=<span class=hljs-string>"item in result"</span>\n    <span class=hljs-attr>:title</span>=<span class=hljs-string>"item.title"</span>\n    <span class=hljs-attr>:value</span>=<span class=hljs-string>"item.value"</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-search</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>search input</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>cancel-text</td> <td>text of the cancel button</td> <td>String</td> <td></td> <td>\'取消\'</td> </tr> <tr> <td>placeholder</td> <td>place holder for the search bar</td> <td>String</td> <td></td> <td>\'搜索\'</td> </tr> <tr> <td>result</td> <td>the searching result list</td> <td>Array</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>custom searching result list</td> </tr> </tbody> </table></div></section>'},343:function(s,a,t){var l,n;n=t(222),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports["default"]),n&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=n)},77:function(s,a,t){s.exports=t(343)}});