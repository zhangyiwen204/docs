webpackJsonp([41],{241:function(s,t){s.exports='<section><h1>Index List</h1> <blockquote> <p>An indexed list, can be navigated by index.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { IndexList, IndexSection } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(IndexList.name, IndexList);\nVue.component(IndexSection.name, IndexSection);\n</code></pre> <h2>Example</h2> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-index-list</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-index-section</span> <span class=hljs-attr>index</span>=<span class=hljs-string>"A"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Aaron"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Alden"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Austin"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-section</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-index-section</span> <span class=hljs-attr>index</span>=<span class=hljs-string>"B"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Baldwin"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Braden"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-section</span>&gt;</span>\n  ...\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-index-section</span> <span class=hljs-attr>index</span>=<span class=hljs-string>"Z"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Zack"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"Zane"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-section</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-list</span>&gt;</span>\n</code></pre> <p>Each <code>mt-index-section</code> corresponds with one of the index in the index navigator. The <code>index</code> attribute of <code>mt-index-section</code> is the display text of its corresponding index. Any custom content can be nested inside <code>mt-index-section</code>.</p> <p>When your finger moves on the index navigator, an index indicator will be displayed at the center of the list. If the indicator is not desired, simply set <code>show-indicator</code> to <code>false</code>.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-index-list</span> <span class=hljs-attr>:show-indicator</span>=<span class=hljs-string>"false"</span>&gt;</span>\n  ...\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-index-list</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>mt-index-list</h3> <table> <thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>height</td> <td>height of the component. Automatically extends to the bottom of the viewport if not specified</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>showIndicator</td> <td>if an index indicator is created</td> <td>Boolean</td> <td></td> <td>true</td> </tr> </tbody> </table> <h3>mt-index-section</h3> <table> <thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>index</td> <td>index value(required)</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table> <h2>Slot</h2> <h3>mt-index-list</h3> <table> <thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>one or more <code>mt-index-section</code> components</td> </tr> </tbody> </table> <h3>mt-index-section</h3> <table> <thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>the content of a single <code>mt-index-section</code></td> </tr> </tbody> </table> </section>'},34:function(s,t,a){s.exports=a(368)},368:function(s,t,a){var n,e,l={};e=a(241),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;e&&(p.template=e),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var t=l[s];p.computed[s]=function(){return t}})}});