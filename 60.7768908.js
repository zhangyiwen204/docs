webpackJsonp([60],{220:function(t,e){t.exports="<section><h1>Cell Swipe</h1> <blockquote> <p>a swipe cell based on cell。</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { CellSwipe } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(CellSwipe.name, Cell);\n</code></pre> <h2>Example</h2> <p>Add button group on the right</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell-swipe</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"text\"</span>\n  <span class=hljs-attr>:right</span>=<span class=hljs-string>\"[\n    {\n      content: 'Delete',\n      style: { background: 'red', color: '#fff' },\n      handler: () =&gt; this.$messagebox('delete')\n    }\n  ]\"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell-swipe</span>&gt;</span>\n</code></pre> <p><code>content</code> allowed HTML or text;</p> <h2>API</h2> <table> <thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>icon</td> <td>cell icon</td> <td>String</td> <td>back, more</td> <td></td> </tr> <tr> <td>title</td> <td>title of the cell</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>to</td> <td>link</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>content of the cell</td> <td>*</td> <td></td> <td></td> </tr> <tr> <td>label</td> <td>a description shown underneath the title</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>is-link</td> <td>if the cell is a link, works with the <code>to</code> attribute</td> <td>Boolean</td> <td></td> <td></td> </tr> <tr> <td>left</td> <td>button group, <code>{ content, style, handler }</code></td> <td>Object[]</td> <td></td> <td></td> </tr> <tr> <td>right</td> <td>button group, <code>{ content, style, handler }</code></td> <td>Object[]</td> <td></td> <td></td> </tr> </tbody> </table> <h2>Slot</h2> <table> <thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>custom content</td> </tr> <tr> <td>title</td> <td>custom title</td> </tr> <tr> <td>icon</td> <td>custom icon</td> </tr> </tbody> </table> </section>"},347:function(t,e,d){var n,s,o={};s=d(220),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var l="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(l.template=s),l.computed||(l.computed={}),Object.keys(o).forEach(function(t){var e=o[t];l.computed[t]=function(){return e}})},59:function(t,e,d){t.exports=d(347)}});