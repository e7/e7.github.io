(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{468:function(s,a,e){"use strict";e.r(a);var t=e(35),l=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),e("ol",[e("li",[s._v("指定目标CPU平台架构"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果要编译其它平台代码，比如ARCH=arm，则需要安装相应的交叉编译工具")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ARCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x86\n")])])])]),s._v(" "),e("li",[s._v("生成平台默认配置"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" x86_64_defconfig\n")])])])]),s._v(" "),e("li",[s._v("配置微调"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" menuconfig\n")])])])]),s._v(" "),e("li",[s._v("编译内核"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])])]),s._v(" "),e("li",[s._v("编译内核模块"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" modules_install\n")])])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);