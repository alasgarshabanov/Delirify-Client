(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[38],{1533:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},1534:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},1536:function(e,n,t){var r=t(767),o=t(54);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!==typeof n?o(e):n}},1537:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},1538:function(e,n,t){var r=t(1611);e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},1611:function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},1661:function(e,n,t){"use strict";var r=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(0)),a=(0,r(t(62)).default)(o.default.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");n.default=a},1802:function(e,n,t){"use strict";var r=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(0)),a=(0,r(t(62)).default)(o.default.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.default=a},1803:function(e,n,t){"use strict";var r=t(736),o=t(42);Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"anchorRef",{enumerable:!0,get:function(){return h.anchorRef}}),Object.defineProperty(n,"bindTrigger",{enumerable:!0,get:function(){return h.bindTrigger}}),Object.defineProperty(n,"bindToggle",{enumerable:!0,get:function(){return h.bindToggle}}),Object.defineProperty(n,"bindHover",{enumerable:!0,get:function(){return h.bindHover}}),Object.defineProperty(n,"bindMenu",{enumerable:!0,get:function(){return h.bindMenu}}),Object.defineProperty(n,"bindPopover",{enumerable:!0,get:function(){return h.bindPopover}}),Object.defineProperty(n,"bindPopper",{enumerable:!0,get:function(){return h.bindPopper}}),n.default=void 0;var a=o(t(767)),i=o(t(1533)),l=o(t(1534)),u=o(t(1536)),c=o(t(1537)),p=o(t(54)),s=o(t(1538)),m=o(t(51)),d=r(t(0)),f=o(t(6)),h=t(1804),v=function(e){function n(){var e,t;(0,i.default)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=(0,u.default)(this,(e=(0,c.default)(n)).call.apply(e,[this].concat(o))),(0,m.default)((0,p.default)(t),"state",h.initCoreState),(0,m.default)((0,p.default)(t),"_mounted",!0),(0,m.default)((0,p.default)(t),"_setStateIfMounted",(function(e){t._mounted&&t.setState(e)})),t}return(0,s.default)(n,e),(0,l.default)(n,[{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentDidUpdate",value:function(e,n){var t=this.props.popupId;if((t!==e.popupId||this.state.anchorEl!==n.anchorEl)&&t&&"object"===("undefined"===typeof document?"undefined":(0,a.default)(document))){var r=document.getElementById(t);r&&r.focus()}}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.popupId,r=e.variant,o=e.parentPopupState,a=n((0,h.createPopupState)({state:this.state,setState:this._setStateIfMounted,popupId:t,variant:r,parentPopupState:o}));return null==a?null:a}}]),n}(d.Component);n.default=v,(0,m.default)(v,"propTypes",{children:f.default.func.isRequired,popupId:f.default.string,variant:f.default.oneOf(["popover","popper"]).isRequired,parentPopupState:f.default.object})},1804:function(e,n,t){"use strict";var r=t(736),o=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.createPopupState=function(e){var n=e.state,t=e.setState,r=e.parentPopupState,o=e.popupId,c=e.variant,p=n.isOpen,m=n.setAnchorElUsed,d=n.anchorEl,f=n.hovered,h=n._childPopupState,v=n,E=function(e){(function(e,n){for(var t in n)if(e.hasOwnProperty(t)&&e[t]!==n[t])return!0;return!1})(v,e)&&t(v=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},v,{},e))},M=function(e){if(u||e||m||(u=!0,console.error("eventOrAnchorEl should be defined if setAnchorEl is not used")),r){if(!r.isOpen)return;r._setChildPopupState(y)}"object"===("undefined"===typeof document?"undefined":(0,a.default)(document))&&document.activeElement&&document.activeElement.blur();var n={isOpen:!0,hovered:e&&"mouseenter"===e.type};e&&e.currentTarget?m||(n.anchorEl=e.currentTarget):e&&(n.anchorEl=e),E(n)},g=function(){h&&h.close(),r&&r._setChildPopupState(null),E({isOpen:!1,hovered:!1})},y={anchorEl:d,setAnchorEl:function(e){E({setAnchorElUsed:!0,anchorEl:e})},setAnchorElUsed:m,popupId:o,variant:c,isOpen:p,open:M,close:g,toggle:function(e){p?g():M(e)},setOpen:function(e,n){e?M(n):g()},onMouseLeave:function(e){var n=e.relatedTarget;f&&!function e(n,t){var r=t.anchorEl,o=t._childPopupState;return s(r,n)||s(function(e){var n=e.popupId;return n&&"undefined"!==typeof document?document.getElementById(n):null}(t),n)||null!=o&&e(n,o)}(n,y)&&g()},_childPopupState:h,_setChildPopupState:function(e){return E({_childPopupState:e})}};return y},n.anchorRef=function(e){var n=e.setAnchorEl;return function(e){e&&n(e)}},n.bindTrigger=function(e){var n,t=e.isOpen,r=e.open,o=e.popupId,a=e.variant;return n={},(0,i.default)(n,"popover"===a?"aria-controls":"aria-describedby",t?o:null),(0,i.default)(n,"aria-haspopup","popover"===a||void 0),(0,i.default)(n,"onClick",r),n},n.bindToggle=function(e){var n,t=e.isOpen,r=e.toggle,o=e.popupId,a=e.variant;return n={},(0,i.default)(n,"popover"===a?"aria-controls":"aria-describedby",t?o:null),(0,i.default)(n,"aria-haspopup","popover"===a||void 0),(0,i.default)(n,"onClick",r),n},n.bindHover=function(e){var n,t=e.isOpen,r=e.open,o=e.onMouseLeave,a=e.popupId,l=e.variant;return n={},(0,i.default)(n,"popover"===l?"aria-controls":"aria-describedby",t?a:null),(0,i.default)(n,"aria-haspopup","popover"===l||void 0),(0,i.default)(n,"onMouseEnter",r),(0,i.default)(n,"onMouseLeave",o),n},n.bindPopover=c,n.bindPopper=function(e){var n=e.isOpen,t=e.anchorEl;return{id:e.popupId,anchorEl:t,open:n}},n.bindMenu=n.initCoreState=void 0;var a=o(t(767)),i=o(t(51));r(t(0));function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var u=!1;function c(e){var n=e.isOpen,t=e.anchorEl,r=e.close;return{id:e.popupId,anchorEl:t,open:n,onClose:r,onMouseLeave:e.onMouseLeave}}n.initCoreState={isOpen:!1,setAnchorElUsed:!1,anchorEl:null,hovered:!1,_childPopupState:null};var p=c;function s(e,n){if(!e)return!1;for(;n;){if(n===e)return!0;n=n.parentElement}return!1}n.bindMenu=p},2257:function(e,n,t){"use strict";var r=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(0)),a=(0,r(t(62)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"12",cy:"19",r:"2"}),o.default.createElement("path",{d:"M10 3h4v12h-4z"})),"PriorityHigh");n.default=a},2787:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(407),i=t(474),l=t(473),u=t(472),c=t(19),p=t(326),s=t(259),m=t(323);function d(){var e=o.a.useState(null),n=Object(c.a)(e,2),t=n[0],r=n[1];function a(){r(null)}return o.a.createElement("div",null,o.a.createElement(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},"Open Menu"),o.a.createElement(s.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:a},o.a.createElement(m.a,{onClick:a},"Profile"),o.a.createElement(m.a,{onClick:a},"My account"),o.a.createElement(m.a,{onClick:a},"Logout")))}var f="import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport Menu from '@material-ui/core/Menu';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\n\r\nexport default function SimpleMenu() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n\r\n  function handleClick(event) {\r\n    setAnchorEl(event.currentTarget);\r\n  }\r\n\r\n  function handleClose() {\r\n    setAnchorEl(null);\r\n  }\r\n\r\n  return (\r\n    <div>\r\n      <Button\r\n        aria-controls='simple-menu'\r\n        aria-haspopup='true'\r\n        onClick={handleClick}>\r\n        Open Menu\r\n      </Button>\r\n      <Menu\r\n        id='simple-menu'\r\n        anchorEl={anchorEl}\r\n        keepMounted\r\n        open={Boolean(anchorEl)}\r\n        onClose={handleClose}>\r\n        <MenuItem onClick={handleClose}>Profile</MenuItem>\r\n        <MenuItem onClick={handleClose}>My account</MenuItem>\r\n        <MenuItem onClick={handleClose}>Logout</MenuItem>\r\n      </Menu>\r\n    </div>\r\n  );\r\n}\r\n",h=t(228),v=t(399),E=t(266),M=t(564),g=Object(h.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),y=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function b(){var e=g(),n=o.a.useState(null),t=Object(c.a)(n,2),r=t[0],a=t[1],i=o.a.useState(1),l=Object(c.a)(i,2),u=l[0],p=l[1];return o.a.createElement("div",{className:e.root},o.a.createElement(v.a,{component:"nav","aria-label":"Device settings"},o.a.createElement(E.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){a(e.currentTarget)}},o.a.createElement(M.a,{primary:"When device is locked",secondary:y[u]}))),o.a.createElement(s.a,{id:"lock-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:function(){a(null)}},y.map((function(e,n){return o.a.createElement(m.a,{key:e,disabled:0===n,selected:n===u,onClick:function(e){return function(e,n){p(n),a(null)}(0,n)}},e)}))))}var I=t(420),C=t(182),k=t(147),P=t(430),O=t(398),S=Object(h.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}}));function x(){var e=S(),n=o.a.useState(!1),t=Object(c.a)(n,2),r=t[0],a=t[1],i=o.a.useRef(null);function l(e){i.current&&i.current.contains(e.target)||a(!1)}return o.a.createElement("div",{className:e.root},o.a.createElement(k.a,{className:e.paper},o.a.createElement(O.a,null,o.a.createElement(m.a,null,"Profile"),o.a.createElement(m.a,null,"My account"),o.a.createElement(m.a,null,"Logout"))),o.a.createElement("div",null,o.a.createElement(p.a,{ref:i,"aria-controls":"menu-list-grow","aria-haspopup":"true",onClick:function(){a((function(e){return!e}))}},"Toggle Menu Grow"),o.a.createElement(P.a,{open:r,anchorEl:i.current,keepMounted:!0,transition:!0,disablePortal:!0},(function(e){var n=e.TransitionProps,t=e.placement;return o.a.createElement(C.a,Object.assign({},n,{style:{transformOrigin:"bottom"===t?"center top":"center bottom"}}),o.a.createElement(k.a,{id:"menu-list-grow"},o.a.createElement(I.a,{onClickAway:l},o.a.createElement(O.a,null,o.a.createElement(m.a,{onClick:l},"Profile"),o.a.createElement(m.a,{onClick:l},"My account"),o.a.createElement(m.a,{onClick:l},"Logout")))))}))))}var L=t(264),T=t(92),w=t.n(T),j=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function A(){var e=o.a.useState(null),n=Object(c.a)(e,2),t=n[0],r=n[1],a=Boolean(t);function i(){r(null)}return o.a.createElement("div",null,o.a.createElement(L.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},o.a.createElement(w.a,null)),o.a.createElement(s.a,{id:"long-menu",anchorEl:t,keepMounted:!0,open:a,onClose:i,PaperProps:{style:{maxHeight:216,width:200}}},j.map((function(e){return o.a.createElement(m.a,{key:e,selected:"Pyxis"===e,onClick:i},e)}))))}var _=t(562),B=t(74),R=t(1661),H=t.n(R),D=t(1802),U=t.n(D),G=t(2257),N=t.n(G),F=Object(h.a)({root:{width:230}});function W(){var e=F();return o.a.createElement(k.a,{className:e.root},o.a.createElement(O.a,null,o.a.createElement(m.a,null,o.a.createElement(_.a,null,o.a.createElement(U.a,null)),o.a.createElement(B.a,{variant:"inherit"},"A short message")),o.a.createElement(m.a,null,o.a.createElement(_.a,null,o.a.createElement(N.a,null)),o.a.createElement(B.a,{variant:"inherit"},"A very long text that overflows")),o.a.createElement(m.a,null,o.a.createElement(_.a,null,o.a.createElement(H.a,null)),o.a.createElement(B.a,{variant:"inherit",noWrap:!0},"A very long text that overflows"))))}var z=t(217);function V(){var e=o.a.useState(null),n=Object(c.a)(e,2),t=n[0],r=n[1],a=Boolean(t);function i(){r(null)}return o.a.createElement("div",null,o.a.createElement(p.a,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},"Open with fade transition"),o.a.createElement(s.a,{id:"fade-menu",anchorEl:t,keepMounted:!0,open:a,onClose:i,TransitionComponent:z.a},o.a.createElement(m.a,{onClick:i},"Profile"),o.a.createElement(m.a,{onClick:i},"My account"),o.a.createElement(m.a,{onClick:i},"Logout")))}var q=t(1803),J=t.n(q);var Y=function(){return o.a.createElement(J.a,{variant:"popover",popupId:"demo-popup-menu"},(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,Object.assign({variant:"contained"},Object(q.bindTrigger)(e)),"Open Menu"),o.a.createElement(s.a,Object(q.bindMenu)(e),o.a.createElement(m.a,{onClick:e.close},"Cake"),o.a.createElement(m.a,{onClick:e.close},"Death")))}))};n.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"Menus",description:"Menus display a list of choices on temporary surfaces.",refUrl:"https://material-ui.com/components/transfer-list/"}),o.a.createElement(u.a,null,o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Simple Menu",component:d,source:f,description:"Simple menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make sure that all menu items are completely visible."})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Selected menus",component:b,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport List from '@material-ui/core/List';\r\nimport ListItem from '@material-ui/core/ListItem';\r\nimport ListItemText from '@material-ui/core/ListItemText';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport Menu from '@material-ui/core/Menu';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    maxWidth: 360,\r\n    backgroundColor: theme.palette.background.paper,\r\n  },\r\n}));\r\n\r\nconst options = [\r\n  'Show some love to Material-UI',\r\n  'Show all notification content',\r\n  'Hide sensitive notification content',\r\n  'Hide all notification content',\r\n];\r\n\r\nexport default function SimpleListMenu() {\r\n  const classes = useStyles();\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n  const [selectedIndex, setSelectedIndex] = React.useState(1);\r\n\r\n  function handleClickListItem(event) {\r\n    setAnchorEl(event.currentTarget);\r\n  }\r\n\r\n  function handleMenuItemClick(event, index) {\r\n    setSelectedIndex(index);\r\n    setAnchorEl(null);\r\n  }\r\n\r\n  function handleClose() {\r\n    setAnchorEl(null);\r\n  }\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <List component='nav' aria-label='Device settings'>\r\n        <ListItem\r\n          button\r\n          aria-haspopup='true'\r\n          aria-controls='lock-menu'\r\n          aria-label='when device is locked'\r\n          onClick={handleClickListItem}>\r\n          <ListItemText\r\n            primary='When device is locked'\r\n            secondary={options[selectedIndex]}\r\n          />\r\n        </ListItem>\r\n      </List>\r\n      <Menu\r\n        id='lock-menu'\r\n        anchorEl={anchorEl}\r\n        keepMounted\r\n        open={Boolean(anchorEl)}\r\n        onClose={handleClose}>\r\n        {options.map((option, index) => (\r\n          <MenuItem\r\n            key={option}\r\n            disabled={index === 0}\r\n            selected={index === selectedIndex}\r\n            onClick={event => handleMenuItemClick(event, index)}>\r\n            {option}\r\n          </MenuItem>\r\n        ))}\r\n      </Menu>\r\n    </div>\r\n  );\r\n}\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"MenuList composition",component:x,source:"import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\r\nimport Grow from '@material-ui/core/Grow';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport Popper from '@material-ui/core/Popper';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport MenuList from '@material-ui/core/MenuList';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n  },\r\n  paper: {\r\n    marginRight: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nexport default function MenuListComposition() {\r\n  const classes = useStyles();\r\n  const [open, setOpen] = React.useState(false);\r\n  const anchorRef = React.useRef(null);\r\n\r\n  function handleToggle() {\r\n    setOpen(prevOpen => !prevOpen);\r\n  }\r\n\r\n  function handleClose(event) {\r\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\r\n      return;\r\n    }\r\n\r\n    setOpen(false);\r\n  }\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Paper className={classes.paper}>\r\n        <MenuList>\r\n          <MenuItem>Profile</MenuItem>\r\n          <MenuItem>My account</MenuItem>\r\n          <MenuItem>Logout</MenuItem>\r\n        </MenuList>\r\n      </Paper>\r\n      <div>\r\n        <Button\r\n          ref={anchorRef}\r\n          aria-controls='menu-list-grow'\r\n          aria-haspopup='true'\r\n          onClick={handleToggle}>\r\n          Toggle Menu Grow\r\n        </Button>\r\n        <Popper\r\n          open={open}\r\n          anchorEl={anchorRef.current}\r\n          keepMounted\r\n          transition\r\n          disablePortal>\r\n          {({TransitionProps, placement}) => (\r\n            <Grow\r\n              {...TransitionProps}\r\n              style={{\r\n                transformOrigin:\r\n                  placement === 'bottom' ? 'center top' : 'center bottom',\r\n              }}>\r\n              <Paper id='menu-list-grow'>\r\n                <ClickAwayListener onClickAway={handleClose}>\r\n                  <MenuList>\r\n                    <MenuItem onClick={handleClose}>Profile</MenuItem>\r\n                    <MenuItem onClick={handleClose}>My account</MenuItem>\r\n                    <MenuItem onClick={handleClose}>Logout</MenuItem>\r\n                  </MenuList>\r\n                </ClickAwayListener>\r\n              </Paper>\r\n            </Grow>\r\n          )}\r\n        </Popper>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",description:"The primary responsibility of the MenuList component is to handle the focus."})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Limitations",component:W,source:"import React from 'react';\r\nimport MenuList from '@material-ui/core/MenuList';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport DraftsIcon from '@material-ui/icons/Drafts';\r\nimport SendIcon from '@material-ui/icons/Send';\r\nimport PriorityHighIcon from '@material-ui/icons/PriorityHigh';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    width: 230,\r\n  },\r\n});\r\n\r\nexport default function TypographyMenu() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Paper className={classes.root}>\r\n      <MenuList>\r\n        <MenuItem>\r\n          <ListItemIcon>\r\n            <SendIcon />\r\n          </ListItemIcon>\r\n          <Typography variant='inherit'>A short message</Typography>\r\n        </MenuItem>\r\n        <MenuItem>\r\n          <ListItemIcon>\r\n            <PriorityHighIcon />\r\n          </ListItemIcon>\r\n          <Typography variant='inherit'>\r\n            A very long text that overflows\r\n          </Typography>\r\n        </MenuItem>\r\n        <MenuItem>\r\n          <ListItemIcon>\r\n            <DraftsIcon />\r\n          </ListItemIcon>\r\n          <Typography variant='inherit' noWrap>\r\n            A very long text that overflows\r\n          </Typography>\r\n        </MenuItem>\r\n      </MenuList>\r\n    </Paper>\r\n  );\r\n}\r\n",description:"There is a flexbox bug that prevents text-overflow: ellipsis from working in a flexbox layout. You can use the Typography component with noWrap to workaround this issue:."})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Customized menus",component:d,source:f,description:"Here is an example of customizing the component. You can learn more about this in the overrides documentation page."})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Max height menus",component:A,source:"import React from 'react';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport Menu from '@material-ui/core/Menu';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport MoreVertIcon from '@material-ui/icons/MoreVert';\r\n\r\nconst options = [\r\n  'None',\r\n  'Atria',\r\n  'Callisto',\r\n  'Dione',\r\n  'Ganymede',\r\n  'Hangouts Call',\r\n  'Luna',\r\n  'Oberon',\r\n  'Phobos',\r\n  'Pyxis',\r\n  'Sedna',\r\n  'Titania',\r\n  'Triton',\r\n  'Umbriel',\r\n];\r\n\r\nconst ITEM_HEIGHT = 48;\r\n\r\nexport default function LongMenu() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n  const open = Boolean(anchorEl);\r\n\r\n  function handleClick(event) {\r\n    setAnchorEl(event.currentTarget);\r\n  }\r\n\r\n  function handleClose() {\r\n    setAnchorEl(null);\r\n  }\r\n\r\n  return (\r\n    <div>\r\n      <IconButton\r\n        aria-label='more'\r\n        aria-controls='long-menu'\r\n        aria-haspopup='true'\r\n        onClick={handleClick}>\r\n        <MoreVertIcon />\r\n      </IconButton>\r\n      <Menu\r\n        id='long-menu'\r\n        anchorEl={anchorEl}\r\n        keepMounted\r\n        open={open}\r\n        onClose={handleClose}\r\n        PaperProps={{\r\n          style: {\r\n            maxHeight: ITEM_HEIGHT * 4.5,\r\n            width: 200,\r\n          },\r\n        }}>\r\n        {options.map(option => (\r\n          <MenuItem\r\n            key={option}\r\n            selected={option === 'Pyxis'}\r\n            onClick={handleClose}>\r\n            {option}\r\n          </MenuItem>\r\n        ))}\r\n      </Menu>\r\n    </div>\r\n  );\r\n}\r\n",description:"If the height of a menu prevents all menu items from being displayed, the menu can scroll internally."})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Change transition",component:V,source:"import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport Menu from '@material-ui/core/Menu';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport Fade from '@material-ui/core/Fade';\r\n\r\nexport default function FadeMenu() {\r\n  const [anchorEl, setAnchorEl] = React.useState(null);\r\n  const open = Boolean(anchorEl);\r\n\r\n  function handleClick(event) {\r\n    setAnchorEl(event.currentTarget);\r\n  }\r\n\r\n  function handleClose() {\r\n    setAnchorEl(null);\r\n  }\r\n\r\n  return (\r\n    <div>\r\n      <Button\r\n        aria-controls='fade-menu'\r\n        aria-haspopup='true'\r\n        onClick={handleClick}>\r\n        Open with fade transition\r\n      </Button>\r\n      <Menu\r\n        id='fade-menu'\r\n        anchorEl={anchorEl}\r\n        keepMounted\r\n        open={open}\r\n        onClose={handleClose}\r\n        TransitionComponent={Fade}>\r\n        <MenuItem onClick={handleClose}>Profile</MenuItem>\r\n        <MenuItem onClick={handleClose}>My account</MenuItem>\r\n        <MenuItem onClick={handleClose}>Logout</MenuItem>\r\n      </Menu>\r\n    </div>\r\n  );\r\n}\r\n",description:"Use a different transition."})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Complementary projects",component:Y,source:"import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport Menu from '@material-ui/core/Menu';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';\r\n\r\nfunction MenuPopupState() {\r\n  return (\r\n    <PopupState variant='popover' popupId='demo-popup-menu'>\r\n      {popupState => (\r\n        <React.Fragment>\r\n          <Button variant='contained' {...bindTrigger(popupState)}>\r\n            Open Menu\r\n          </Button>\r\n          <Menu {...bindMenu(popupState)}>\r\n            <MenuItem onClick={popupState.close}>Cake</MenuItem>\r\n            <MenuItem onClick={popupState.close}>Death</MenuItem>\r\n          </Menu>\r\n        </React.Fragment>\r\n      )}\r\n    </PopupState>\r\n  );\r\n}\r\n\r\nexport default MenuPopupState;\r\n",description:"There is a 3rd party package material-ui-popup-state that takes care of menu state for you in most cases."}))))}}}]);
//# sourceMappingURL=38.98ccca5d.chunk.js.map