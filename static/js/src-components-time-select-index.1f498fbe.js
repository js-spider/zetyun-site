(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/time-select/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),s=n("./src/index.tsx"),l={seconds:{key:"seconds",selectData:[1,5,10,20,30],displayUnit:"\u79d2"},minutes:{key:"minutes",selectData:[1,5,10,20,30],displayUnit:"\u5206\u949f"},hours:{key:"hours",selectData:[1,2,4,8,12,18],displayUnit:"\u5c0f\u65f6"}};function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(_,e);var t,n,a,p,g=(t=_,function(){var e,n=y(t);if(h()){var a=y(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f(this,e)});function _(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),(t=g.call(this,e)).layout=null,t}return n=_,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"timeselect"}},"TimeSelect"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"\u4f7f\u7528"}},"\u4f7f\u7528"),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"TimeSelect"),"\u7528\u6765\u5728\u9009\u62e9\u65f6\u95f4\u8303\u56f4\uff0c\u6700\u7ec8\u8fd4\u56de\u79d2\uff0c\u53ef\u4ee5\u7ed3\u5408Form\u8868\u5355\u4f7f\u7528, \u73b0\u9636\u6bb5\u652f\u6301\u79d2\uff0c\u5206\u949f\uff0c\u5c0f\u65f6"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"data-\u914d\u7f6e"}},"data \u914d\u7f6e"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"const data = {\n  seconds: {\n    key: 'seconds',\n    selectData: [1, 5, 10, 20, 30],\n    displayUnit: '\u79d2',\n  },\n  minutes: {\n    key: 'minutes',\n    selectData: [1, 5, 10, 20, 30],\n    displayUnit: '\u5206\u949f',\n  },\n  hours: {\n    key: 'hours',\n    selectData: [1, 2, 4, 8, 12, 18],\n    displayUnit: '\u5c0f\u65f6',\n  },\n};\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"\u57fa\u672c\u4f7f\u7528"}},"\u57fa\u672c\u4f7f\u7528"),o.a.createElement(c.e,{__codesandbox:"undefined",__position:0,__code:"<TimeSelect width={200} />",__scope:{props:this?this.props:n,State:i.a,Toggle:i.b,TagInput:s.h,TimeSelect:s.i,data:l}},o.a.createElement(s.i,{width:200})),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"value\u503c"}},"value\u503c"),o.a.createElement(c.e,{__codesandbox:"undefined",__position:1,__code:"<TimeSelect width={200} value={1200} />",__scope:{props:this?this.props:n,State:i.a,Toggle:i.b,TagInput:s.h,TimeSelect:s.i,data:l}},o.a.createElement(s.i,{width:200,value:1200})),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"\u7981\u7528"}},"\u7981\u7528"),o.a.createElement(c.e,{__codesandbox:"undefined",__position:2,__code:"<TimeSelect width={200} value={1200} disabled />",__scope:{props:this?this.props:n,State:i.a,Toggle:i.b,TagInput:s.h,TimeSelect:s.i,data:l}},o.a.createElement(s.i,{width:200,value:1200,disabled:!0})),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"onchage"}},"onChage"),o.a.createElement(c.e,{__codesandbox:"undefined",__position:3,__code:"<State initial={{ value: 120 }}>\n  {({ state, setState }) => (\n    <React.Fragment>\n      <TimeSelect\n        width={200}\n        data={data}\n        value={state.value}\n        onChange={value => setState({ value })}\n      />\n      <span>change value: {state.value}</span>\n    </React.Fragment>\n  )}\n</State>",__scope:{props:this?this.props:n,State:i.a,Toggle:i.b,TagInput:s.h,TimeSelect:s.i,data:l}},o.a.createElement(i.a,{initial:{value:120}},(function(e){var t=e.state,n=e.setState;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.i,{width:200,data:l,value:t.value,onChange:function(e){return n({value:e})}}),o.a.createElement("span",null,"change value: ",t.value))}))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"timeselect-1"}},"TimeSelect"),o.a.createElement(c.f,{of:s.i}))}}])&&m(n.prototype,a),p&&m(n,p),_}(o.a.Component)}}]);