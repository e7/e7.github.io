(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{455:function(t,a,s){"use strict";s.r(a);var n=s(35),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速幂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速幂"}},[t._v("#")]),t._v(" 快速幂")]),t._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("计算a^b原始的方式是将a乘b次，时间复杂度为O(n)，实际上不止计算了a^b，还计算了a^2、a^3...a^(b-1)，幂运算本身是可以任意组合的，比如a^b=a^x * a^y * a^(b-x-y)。于是我们将一个大问题拆解为多个小问题，这符合动态规划的思想。a^2=a"),s("em",[t._v("a，a^3=a")]),t._v("a^2，a^4=a^2*a^2，按二进制拆解是比较常见的做法，时间复杂度为O(logn)。")]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#! /usr/bin/env python3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fast_pow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# base就是当前位时的幂，即a^(2^bit)")]),t._v("\n    base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里将b按二进制拆解")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" base\n        b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        base "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" base\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n        \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast_pow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("估算ln(N!)，假设0 < N < 100000，类型为int")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("斯特林公式告诉我们：ln(N!) ~~ ln(N/e)^N")])]),t._v(" "),s("li",[s("p",[t._v("python标准库参考：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" math\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factorial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1051299.2218991218")]),t._v("\n")])])])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);