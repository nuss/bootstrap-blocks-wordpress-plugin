!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);n.n(o),n(2),n(4),n(8),n(11)},function(e,t){var n=wp.blocks.updateCategory,o=wp.components,l=o.Path,r=o.Rect,a=o.SVG;n("wp-bootstrap-blocks",{icon:wp.element.createElement(a,{viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(r,{stroke:"#979797",fill:"#6EA644",x:"-110.5",y:"-123.5",width:"340",height:"367"}),wp.element.createElement(l,{d:"M105.362393,45.9570783 C103.695123,44.8177711 101.427637,45.2868976 100.293893,46.9623494 C93.6915059,56.9480422 79.6864416,57.4841867 78.952843,57.4841867 C78.8194614,57.4841867 78.7527707,57.4841867 78.6193891,57.4841867 C61.3464764,57.4841867 54.744089,72.2951807 54.4773258,72.8983434 C53.6770365,74.7748494 54.5440166,76.9194277 56.3446678,77.7236446 C56.8115032,77.9246988 57.3450295,78.0587349 57.811865,78.0587349 C59.2123714,78.0587349 60.5461871,77.2545181 61.1464041,75.8471386 C61.2130949,75.7131024 65.7480681,65.5263554 77.418955,64.8561747 L77.418955,83.8222892 C76.9521195,87.9103916 75.0180868,91.127259 71.6168569,93.5399096 C68.0822455,96.0195783 63.3471999,97.2929217 57.5451018,97.2929217 C50.6092605,97.2929217 44.940544,94.8802711 40.7390247,90.121988 C36.4708146,85.3637048 34.3367095,78.5948795 34.3367095,69.8825301 L34.4034003,48.9728916 C34.7368542,41.2658133 36.8042685,35.1671687 40.7390247,30.810994 C45.0072347,26.0527108 50.6092605,23.6400602 57.5451018,23.6400602 C63.3471999,23.6400602 68.0822455,24.9134036 71.6168569,27.3930723 C75.1514684,29.872741 77.1521919,33.2906627 77.4856458,37.7138554 C77.4856458,37.8478916 77.4856458,38.0489458 77.4856458,38.1829819 C77.4856458,40.7296687 79.5530601,42.8072289 82.0873098,42.8072289 C84.6215595,42.8072289 86.6889738,40.7296687 86.6889738,38.1829819 C86.6889738,38.0489458 86.6889738,37.8478916 86.6889738,37.7138554 C86.022066,31.0790663 83.0209807,25.8516566 77.6190274,21.8975904 C72.217074,17.9435241 65.481305,16 57.3450295,16 C47.674866,16 39.8720445,19.2168675 33.9365648,25.5835843 C28.3345391,31.5481928 25.4001447,39.3893072 25.0666908,49.0399096 C25.0666908,49.7100904 25,50.3802711 25,51.0504518 L25.0666908,69.8825301 L25,69.8825301 C25,80.5384036 28.0010852,89.0496988 33.9365648,95.4164157 C39.8720445,101.783133 47.674866,105 57.3450295,105 C65.481305,105 72.217074,103.056476 77.6190274,99.1024096 C82.5541453,95.4834337 85.4885397,90.7251506 86.4889014,84.8275602 L86.6889738,63.7838855 C92.757835,62.309488 101.027492,58.9585843 106.229373,51.0504518 C107.563189,49.375 107.096353,47.0963855 105.362393,45.9570783 Z",stroke:"#FFFFFF",fill:"#FFFFFF"}))})},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=n(3),r=(n.n(l),wp.i18n.__),a=wp.blocks.registerBlockType,s=wp.editor,c=s.InnerBlocks,p=s.InspectorControls,i=wp.components,u=i.SelectControl,m=i.CheckboxControl,b=i.TextControl,w=i.PanelBody,f=wp.element.Fragment,d=wp.hooks.applyFilters,k=d("wpBootstrapBlocks.container.useFluidContainerPerDefault",!0),C=[{label:r("Small","wp-bootstrap-blocks"),value:"mb-2"},{label:r("Medium","wp-bootstrap-blocks"),value:"mb-3"},{label:r("Large","wp-bootstrap-blocks"),value:"mb-5"}];C=d("wpBootstrapBlocks.container.customMarginOptions",C);var v=[{label:r("None","wp-bootstrap-blocks"),value:"mb-0"}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(C)),g=function(e){var t=e.label,n=e.attributeName,l=e.value,r=e.setAttributes;return wp.element.createElement(b,{label:t,value:l,onChange:function(e){r(o({},n,e))}})};a("wp-bootstrap-blocks/container",{title:r("Container","wp-bootstrap-blocks"),icon:"feedback",category:"wp-bootstrap-blocks",keywords:[r("Bootstrap Blocks","wp-bootstrap-blocks"),r("Bootstrap","wp-bootstrap-blocks"),r("Container","wp-bootstrap-blocks")],supports:{align:!1},edit:function(e){var t=e.className,n=e.attributes,o=e.setAttributes,l=n.containerID,a=n.isFluid,s=n.marginAfter;return void 0===a&&o({isFluid:k}),wp.element.createElement(f,null,wp.element.createElement(p,null,wp.element.createElement(w,null,wp.element.createElement(m,{label:r("Fluid","wp-bootstrap-blocks"),checked:a,onChange:function(e){o({isFluid:e})}}),wp.element.createElement(u,{label:r("Margin After","wp-bootstrap-blocks"),value:s,options:v,onChange:function(e){o({marginAfter:e})}})),wp.element.createElement(w,{title:r("Container ID","wp-bootstrap-blocks"),initialOpen:!1},wp.element.createElement(g,{label:r("Unique ID of the html element","wp-bootstrap-blocks"),attributeName:"containerID",value:l,setAttributes:o}))),wp.element.createElement("div",{className:t},wp.element.createElement(c,null)))},save:function(){return wp.element.createElement(c.Content,null)}})},function(e,t){},function(e,t,n){"use strict";var o=n(5),l=wp.i18n.__,r=wp.blocks.registerBlockType,a=wp.editor.InnerBlocks;r("wp-bootstrap-blocks/column",{title:l("Column","wp-bootstrap-blocks"),icon:"menu",category:"wp-bootstrap-blocks",keywords:[l("Bootstrap Blocks","wp-bootstrap-blocks"),l("Bootstrap","wp-bootstrap-blocks"),l("Column","wp-bootstrap-blocks")],parent:["wp-bootstrap-blocks/row"],getEditWrapperProps:function(e){var t=e.sizeXl,n=e.indentXl,o=e.sizeLg,l=e.indentLg,r=e.sizeMd,a=e.indentMd,s=e.sizeSm,c=(e.indentSm,e.sizeXs),p=e.indentXs;return{"data-size-xs":c,"data-indent-xs":p,"data-size-sm":s,"data-indent-sm":p,"data-size-md":r,"data-indent-md":a,"data-size-lg":o,"data-indent-lg":l,"data-size-xl":t,"data-indent-xl":n,id:e.columnID}},edit:o.a,save:function(){return wp.element.createElement(a.Content,null)}})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(6),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=wp.i18n.__,i=wp.editor,u=i.InnerBlocks,m=i.InspectorControls,b=wp.components,w=b.PanelBody,f=b.RangeControl,d=b.TextControl,k=wp.element,C=k.Component,v=k.Fragment,g=wp.compose.compose,h=function(e){var t=e.label,n=e.attributeName,o=e.value,l=e.setAttributes;return wp.element.createElement(d,{label:t,value:o,onChange:function(e){l(a({},n,e))}})},E=function(e){var t=e.label,n=e.attributeName,o=e.value,l=e.setAttributes;return wp.element.createElement(f,{label:t,value:o,onChange:function(e){l(a({},n,e))},min:0,max:12})},y=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,o=e.setAttributes,l=t.columnID,r=t.sizeXl,a=t.indentXl,s=t.sizeLg,c=t.indentLg,i=t.sizeMd,b=t.indentMd,f=t.sizeSm,d=t.indentSm,k=t.sizeXs,C=t.indentXs;return wp.element.createElement(v,null,wp.element.createElement(m,null,wp.element.createElement(w,{title:p("Column size","wp-bootstrap-blocks"),initialOpen:!0},wp.element.createElement(E,{label:p("Xl Columns","wp-bootstrap-blocks"),attributeName:"sizeXl",value:r,setAttributes:o}),wp.element.createElement(E,{label:p("Xl Columns offset","wp-bootstrap-blocks"),attributeName:"indentXl",value:a,setAttributes:o}),wp.element.createElement("hr",null),wp.element.createElement(E,{label:p("Lg Columns","wp-bootstrap-blocks"),attributeName:"sizeLg",value:s,setAttributes:o}),wp.element.createElement(E,{label:p("Lg Columns offset","wp-bootstrap-blocks"),attributeName:"indentLg",value:c,setAttributes:o}),wp.element.createElement("hr",null),wp.element.createElement(E,{label:p("Md Columns","wp-bootstrap-blocks"),attributeName:"sizeMd",value:i,setAttributes:o}),wp.element.createElement(E,{label:p("Md Columns offset","wp-bootstrap-blocks"),attributeName:"indentMd",value:b,setAttributes:o}),wp.element.createElement("hr",null),wp.element.createElement(E,{label:p("Sm Columns","wp-bootstrap-blocks"),attributeName:"sizeSm",value:f,setAttributes:o}),wp.element.createElement(E,{label:p("Sm Columns offset","wp-bootstrap-blocks"),attributeName:"indentSm",value:d,setAttributes:o}),wp.element.createElement("hr",null),wp.element.createElement(E,{label:p("Xs Columns","wp-bootstrap-blocks"),attributeName:"sizeXs",value:k,setAttributes:o}),wp.element.createElement(E,{label:p("Xs Columns offset","wp-bootstrap-blocks"),attributeName:"indentXs",value:C,setAttributes:o})),wp.element.createElement(w,{title:p("Column ID","wp-bootstrap-blocks"),initialOpen:!1},wp.element.createElement(h,{label:p("Unique ID of the html element","wp-bootstrap-blocks"),attributeName:"columnID",value:l,setAttributes:o}))),wp.element.createElement("div",{className:n},wp.element.createElement(u,{templateLock:!1})))}}]),t}(C);t.a=g(Object(s.a)(function(e){return{clientId:e.clientId}}))(y)},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(7),l=n.n(o),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=wp.element.createContext,s=wp.compose.createHigherOrderComponent,c=a({name:"",isSelected:!1,focusedElement:null,setFocusedElement:l.a,clientId:null}),p=c.Consumer,i=function(e){return s(function(t){return function(n){return wp.element.createElement(p,null,function(o){return wp.element.createElement(t,r({},n,e(o,n)))})}},"withBlockEditContext")}},function(e,t){function n(){}e.exports=n},function(e,t,n){"use strict";var o=n(9),l=(n.n(o),n(10)),r=(n.n(l),wp.i18n.__),a=wp.blocks.registerBlockType,s=wp.editor,c=s.InnerBlocks,p=s.InspectorControls,i=s.BlockControls,u=s.AlignmentToolbar,m=wp.components,b=m.SelectControl,w=m.CheckboxControl,f=m.PanelBody,d=m.Path,k=m.SVG,C=wp.element.Fragment,v=wp.data,g=v.dispatch,h=v.select,E=wp.hooks.applyFilters,y=["wp-bootstrap-blocks/column"],B={"1-1":{label:r("2 Columns (1:1)","wp-bootstrap-blocks"),templateLock:"all",blocks:[["wp-bootstrap-blocks/column",{sizeMd:6}],["wp-bootstrap-blocks/column",{sizeMd:6}]]},"1-2":{label:r("2 Columns (1:2)","wp-bootstrap-blocks"),templateLock:"all",blocks:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:8}]]},"2-1":{label:r("2 Columns (2:1)","wp-bootstrap-blocks"),templateLock:"all",blocks:[["wp-bootstrap-blocks/column",{sizeMd:8}],["wp-bootstrap-blocks/column",{sizeMd:4}]]},"1-1-1":{label:r("3 Columns (1:1:1)","wp-bootstrap-blocks"),templateLock:"all",blocks:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}]]}};B=E("wpBootstrapBlocks.row.templates",B),E("wpBootstrapBlocks.row.enableCustomTemplate",!0)&&(B.custom={label:r("Custom","wp-bootstrap-blocks"),templateLock:!1,blocks:[["wp-bootstrap-blocks/column"]]});var z=function(e){return B[e]?B[e].blocks:[]},A=function(e){return!!B[e]&&B[e].templateLock};a("wp-bootstrap-blocks/row",{title:r("Row","wp-bootstrap-blocks"),icon:"layout",category:"wp-bootstrap-blocks",keywords:[r("Bootstrap Blocks","wp-bootstrap-blocks"),r("Bootstrap","wp-bootstrap-blocks"),r("Row","wp-bootstrap-blocks")],supports:{align:["full"]},getEditWrapperProps:function(e){return{"data-alignment":e.alignment,"data-vertical-alignment":e.verticalAlignment}},edit:function(e){var t=e.className,n=e.attributes,o=e.setAttributes,l=e.clientId,a=n.template,s=n.noGutters,m=n.alignment,v=n.verticalAlignment,E=[];Object.keys(B).forEach(function(e){E.push({label:B[e].label,value:e})});var M=function(e){h("core/editor").getBlocksByClientId(l)[0].innerBlocks.forEach(function(t,n){if(B[e]&&B[e].blocks.length>n){var o=B[e].blocks[n][1];g("core/editor").updateBlockAttributes(t.clientId,o)}}),o({template:e})},x=function(e){o({noGutters:e})},O=[{icon:"editor-alignleft",title:r("Align columns left","wp-bootstrap-blocks"),align:"left"},{icon:"editor-aligncenter",title:r("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:"editor-alignright",title:r("Align columns right","wp-bootstrap-blocks"),align:"right"}],_=[{icon:wp.element.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},wp.element.createElement(d,{d:"M51.542,9.5H36.458C34.551,9.5,33,11.051,33,12.958v29.083c0,1.907,1.551,3.458,3.458,3.458h15.083 c1.907,0,3.458-1.551,3.458-3.458V12.958C55,11.051,53.449,9.5,51.542,9.5z M53,13.5v6v6v6v6v4.542 c0,0.804-0.654,1.458-1.458,1.458H36.458C35.654,43.5,35,42.846,35,42.042V12.958c0-0.804,0.654-1.458,1.458-1.458h15.083 c0.804,0,1.458,0.654,1.458,1.458V13.5z"}),wp.element.createElement(d,{d:"M23.542,9.5H8.458C6.551,9.5,5,11.051,5,12.958v39.083C5,53.949,6.551,55.5,8.458,55.5h15.083 c1.907,0,3.458-1.551,3.458-3.458V12.958C27,11.051,25.449,9.5,23.542,9.5z"}),wp.element.createElement(d,{d:"M59,4.5H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h58c0.552,0,1-0.448,1-1S59.552,4.5,59,4.5z"})),title:r("Align columns top","wp-bootstrap-blocks"),align:"top"},{icon:wp.element.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},wp.element.createElement(d,{d:"M59,29h-4V15.458C55,13.551,53.448,12,51.541,12H36.458C34.551,12,33,13.551,33,15.458V29h-6V10.458 C27,8.551,25.449,7,23.542,7H8.458C6.551,7,5,8.551,5,10.458V29H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h4v18.542 C5,51.449,6.551,53,8.458,53h15.083C25.449,53,27,51.449,27,49.542V31h6v13.542C33,46.449,34.551,48,36.458,48h15.083 C53.449,48,55,46.449,55,44.542V31h4c0.553,0,1-0.448,1-1S59.553,29,59,29z M53,34v6v4.542C53,45.346,52.346,46,51.542,46H36.458 C35.654,46,35,45.346,35,44.542V15.458C35,14.654,35.654,14,36.458,14h15.083C52.346,14,53,14.654,53,15.458V16v6v6V34z"})),title:r("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:wp.element.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},wp.element.createElement(d,{d:"M36.458,50.5L36.458,50.5h15.083h0.001c1.669,0,3.065-1.188,3.388-2.762C54.976,47.513,55,47.28,55,47.042V17.958 c0-1.907-1.551-3.458-3.458-3.458H36.459C34.552,14.5,33,16.051,33,17.958v29.083c0,0.238,0.024,0.471,0.07,0.696 C33.393,49.312,34.789,50.5,36.458,50.5z M35,17.958c0-0.804,0.654-1.458,1.459-1.458h15.083c0.804,0,1.458,0.654,1.458,1.458V18.5 v6v6v6v6v4.542c0,0.201-0.041,0.393-0.115,0.567c-0.222,0.523-0.741,0.891-1.344,0.891H36.459c-0.604,0-1.122-0.368-1.344-0.891 C35.041,47.434,35,47.243,35,47.042V17.958z"}),wp.element.createElement(d,{d:"M8.458,50.5h15.083c1.907,0,3.459-1.551,3.459-3.458V7.958C27,6.051,25.449,4.5,23.542,4.5H8.459 C6.552,4.5,5,6.051,5,7.958v39.083C5,48.949,6.551,50.5,8.458,50.5z"}),wp.element.createElement(d,{d:"M59,53.5H1c-0.553,0-1,0.448-1,1s0.447,1,1,1h58c0.553,0,1-0.448,1-1S59.553,53.5,59,53.5z"})),title:r("Align columns bottom","wp-bootstrap-blocks"),align:"bottom"}];return wp.element.createElement(C,null,wp.element.createElement(p,null,wp.element.createElement(f,null,wp.element.createElement(b,{label:r("Template","wp-bootstrap-blocks"),value:a,options:E,onChange:function(e){M(e)}}),wp.element.createElement(w,{label:r("No Gutters","wp-bootstrap-blocks"),checked:s,onChange:function(e){x(e)}}))),wp.element.createElement(i,null,wp.element.createElement(u,{value:m,onChange:function(e){return o({alignment:e})},alignmentControls:O}),wp.element.createElement(u,{value:v,onChange:function(e){return o({verticalAlignment:e})},alignmentControls:_})),wp.element.createElement("div",{className:t},wp.element.createElement(c,{allowedBlocks:y,template:z(a),templateLock:A(a)})))},save:function(){return wp.element.createElement(c.Content,null)}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(12),l=(n.n(o),n(13)),r=wp.i18n.__,a=wp.blocks.registerBlockType,s=wp.components,c=s.G,p=s.Path,i=s.SVG;a("wp-bootstrap-blocks/button",{title:r("Button","wp-bootstrap-blocks"),icon:wp.element.createElement(i,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(p,{fill:"none",d:"M0 0h24v24H0V0z"}),wp.element.createElement(c,null,wp.element.createElement(p,{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"}))),category:"wp-bootstrap-blocks",keywords:[r("Bootstrap Blocks","wp-bootstrap-blocks"),r("Bootstrap","wp-bootstrap-blocks"),r("Button","wp-bootstrap-blocks")],getEditWrapperProps:function(e){return{"data-alignment":e.alignment}},edit:l.a,save:function(){return null}})},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=wp.i18n.__,c=wp.element,p=c.Component,i=c.Fragment,u=wp.editor,m=u.RichText,b=u.URLInput,w=u.InspectorControls,f=u.BlockControls,d=u.AlignmentToolbar,k=wp.components,C=k.Dashicon,v=k.IconButton,g=k.SelectControl,h=k.PanelBody,E=wp.hooks.applyFilters,y=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,o=e.setAttributes,l=e.isSelected,r=t.url,a=t.text,c=t.style,p=t.alignment,u=[{label:s("Primary","wp-bootstrap-blocks"),value:"primary"},{label:s("Secondary","wp-bootstrap-blocks"),value:"secondary"}];return u=E("wpBootstrapBlocks.button.styleOptions",u),wp.element.createElement(i,null,wp.element.createElement("div",{className:n,"data-alignment":p},wp.element.createElement(m,{placeholder:s("Add text\u2026"),value:a,onChange:function(e){return o({text:e})},formattingControls:[],keepPlaceholderOnFocus:!0}),wp.element.createElement(w,null,wp.element.createElement(h,null,wp.element.createElement(g,{label:s("Style","wp-bootstrap-blocks"),value:c,options:u,onChange:function(e){o({style:e})}}))),wp.element.createElement(f,null,wp.element.createElement(d,{value:p,onChange:function(e){return o({alignment:e})}}))),l&&wp.element.createElement("form",{className:"wp-block-wp-bootstrap-blocks-button-link",onSubmit:function(e){return e.preventDefault()}},wp.element.createElement(C,{icon:"admin-links"}),wp.element.createElement(b,{value:r,onChange:function(e){return o({url:e})}}),wp.element.createElement(v,{icon:"editor-break",label:s("Apply"),type:"submit"})))}}]),t}(p);t.a=y}]);