webpackJsonp([52],{229:function(t,e){t.exports="<section><h1>Action sheet</h1> <blockquote> <p>操作表，从屏幕下方移入。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Actionsheet } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Actionsheet.name, Actionsheet);\n</code></pre> <h2>例子</h2> <p><code>actions</code> 属性绑定一个由对象组成的数组，每个对象有 <code>name</code> 和 <code>method</code> 两个键，<code>name</code> 为菜单项的文本，<code>method</code> 为点击该菜单项的回调函数。</p> <p>将 <code>visible</code> 属性与一个本地变量同步，通过操作这个变量即可控制 <code>actionsheet</code> 的显示与隐藏。</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-actionsheet</span>\n  <span class=hljs-attr>:actions</span>=<span class=hljs-string>\"actions\"</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"sheetVisible\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-actionsheet</span>&gt;</span>\n</code></pre> <h2>API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>actions</td> <td>菜单项数组</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>visible</td> <td>是否显示 <code>actionsheet</code></td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>cancelText</td> <td>取消按钮的文本。若设为空字符串，则不显示取消按钮</td> <td>String</td> <td></td> <td>'取消'</td> </tr> <tr> <td>closeOnClickModal</td> <td>是否可以通过点击 modal 层来关闭 <code>actionsheet</code></td> <td>Boolean</td> <td></td> <td>true</td> </tr> </tbody> </table> </section>"},356:function(t,e,s){var o,n,a={};n=s(229),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var d="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(d.template=n),d.computed||(d.computed={}),Object.keys(a).forEach(function(t){var e=a[t];d.computed[t]=function(){return e}})},88:function(t,e,s){t.exports=s(356)}});