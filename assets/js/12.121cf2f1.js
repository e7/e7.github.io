(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{451:function(t,s,a){"use strict";a.r(s);var e=a(35),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cmake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake"}},[t._v("#")]),t._v(" CMake")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cmake -S "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -B build\n")])])]),a("h2",{attrs:{id:"常用变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用变量"}},[t._v("#")]),t._v(" 常用变量")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PROJECT_SOURCE_DIR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("工程源码目录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CMAKE_PROJECT_NAME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("项目名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"vcpkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vcpkg"}},[t._v("#")]),t._v(" Vcpkg")]),t._v(" "),a("blockquote",[a("p",[t._v("vcpkg默认安装x86的库，如果在CMake中配置的是64位的编译器，则会报错，找不到库。")]),t._v(" "),a("p",[t._v("两种解决方式：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装库的时候指定为x64")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vcpkg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" zlib:x64-windows\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vcpkg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" zlib --triplet x64-windows\n")])])])]),t._v(" "),a("li",[a("p",[t._v("设置环境变量（记得重启以使变量生效）")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VCPKG_DEFAULT_TRIPLET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x64-windows\n")])])])])]),t._v(" "),a("p",[t._v("使用多线程库在windows平台下可能出现链接错误：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("win下链接有"),a("code",[t._v("/MT(d)")]),t._v("和"),a("code",[t._v("/MD(d)")]),t._v("的C运行时之分，可以在CMakefileLists.txt中设置")]),t._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("APPEND "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_PREFIX_PATH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$ENV{VCPKG_ROOT}/installed/x64-windows-static-md"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VCPKG_TARGET_TRIPLET x64-windows-static-md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认是MT，这里的设置跟安装时候的要匹配")]),t._v("\n")])])]),a("p",[t._v("更细节的可以使用如下环境变量控制：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VCPKG_LIBRARY_LINKAGE Determines if a library/port is build as a static or dynamic library")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VCPKG_CRT_LINKAGE Determines if the static (/MT(d)) or dynamic (/MD(d)) CRT (C runtime) is used")]),t._v("\n\nx64-windows:\nVCPKG_LIBRARY_LINKAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dynamic\nVCPKG_CRT_LINKAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dynamic\n\nx64-windows-static:\nVCPKG_LIBRARY_LINKAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" static\nVCPKG_CRT_LINKAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" static\n\nx64-windows-static-md:\nVCPKG_LIBRARY_LINKAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" static\nVCPKG_CRT_LINKAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dynamic\n")])])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("命令行")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cmake -S. -B build -DCMAKE_TOOLCHAIN_FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${vcpkgRoot}")]),t._v("/scripts/buildsystem/vcpkg.cmake\n")])])])]),t._v(" "),a("li",[a("p",[t._v("vscode")]),t._v(" "),a("p",[t._v("settings.json配置")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cmake.configureSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CMAKE_TOOLCHAIN_FILE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/xxxx/scripts/buildsystem/vcpkg.cmake"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("收集代码文件")]),t._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GLOB SRC_FILES "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_SOURCE_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('/src/*.cpp"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_SOURCE_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('/src/*.h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("为目标添加编译选项")]),t._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_compile_features")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_PROJECT_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PRIVATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("cxx_std_17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("msvc编译器默认不识别不带bom的utf8编码的源码文件，需要手动指定编码类型")]),t._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意要放在add_executable指令之前才能起作用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("WIN32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_compile_options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$<$<C_COMPILER_ID:MSVC>:/source-charset:utf-8>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_compile_options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$<$<CXX_COMPILER_ID:MSVC>:/source-charset:utf-8>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDIF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("windows下命令行编译指令")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("cmake "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("G "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 16 2019"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("A x64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("S "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("B build64\ncmake "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("build build64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("config Release\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);