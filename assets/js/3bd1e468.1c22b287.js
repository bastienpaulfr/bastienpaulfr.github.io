"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[428],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,b=p["".concat(l,".").concat(g)]||p[g]||f[g]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return f},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Add a new line at the end of each text files tracked by git",date:new Date("2020-03-30T13:04:26.000Z"),draft:!1},l=void 0,u={permalink:"/blog/nl-at-eof",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/blog/nl-at-eof.md",source:"@site/blog/nl-at-eof.md",title:"Add a new line at the end of each text files tracked by git",description:"One of the most anoying thing I meet when I am coding software, is the \xab No new line at end of file \xbb warning.",date:"2020-03-30T13:04:26.000Z",formattedDate:"March 30, 2020",tags:[],readingTime:.685,truncated:!1,authors:[],prevItem:{title:"How to make a good converter",permalink:"/blog/converters"},nextItem:{title:"How to create a circlular file logger with Timber",permalink:"/blog/circular-file-logger"}},s={authorsImageUrls:[]},f=[],p={toc:f};function g(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the most anoying thing I meet when I am coding software, is the \xab No new line at end of file \xbb warning."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"manifest",src:n(4351).Z})),(0,i.kt)("p",null,"For this, I have written a little script based of my research on google. I want to rewrite all text files tracked by git and ensure that a new line is written at the end of file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\n\n# list all files tracked by git\nfor file in `git ls-files -c -m`;\ndo\n  # Test that file does exist\n  if [ -f $file ]; then\n    # Test that file is not a binary one\n    grep -Iq . \"$file\"\n    if [ $? -eq 0 ]; then\n      # Add a new line\n      sed -i '$a\\' $file\n    fi\n  fi\ndone\n")),(0,i.kt)("p",null,"You can execute it from a git repository and commit the result."))}g.isMDXComponent=!0},4351:function(e,t){t.Z="data:image/png;base64,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"}}]);