(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[125],{2841:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(407),p=n(474),l=n(473),s=n(472),m=n(278),c=n(279),i=n(281),d=n(280),u=n(1569),g=Object(u.withGoogleMap)((function(e){return a.a.createElement(u.GoogleMap,{defaultZoom:15,options:{scrollwheel:!1},defaultCenter:{lat:47.646935,lng:-122.303763}})})),f=function(e){Object(i.a)(n,e);var r=Object(d.a)(n);function n(){return Object(m.a)(this,n),r.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.styleName;return e||(e="cr-embed-responsive-21by9"),a.a.createElement(g,{containerElement:a.a.createElement("div",{className:"cr-embed-responsive ".concat(e)}),mapElement:a.a.createElement("div",{className:"cr-embed-responsive-item"})})}}]),n}(t.Component);r.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{title:"Google Map",description:"A wrapper around google.maps.Map",refUrl:"https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map/"}),a.a.createElement(s.a,null,a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(p.a,{title:"Simple Map",component:f,source:"import React, {Component} from 'react';\r\nimport {GoogleMap, withGoogleMap} from 'react-google-maps';\r\n\r\n/*\r\n * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple\r\n */\r\n\r\nconst SimpleMapExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap\r\n    defaultZoom={15}\r\n    options={{\r\n      scrollwheel: false,\r\n    }}\r\n    defaultCenter={{lat: 47.646935, lng: -122.303763}}\r\n  />\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nexport default class SimpleMap extends Component {\r\n  render() {\r\n    let styleName = this.props.styleName;\r\n    if (!styleName) {\r\n      styleName = 'cr-embed-responsive-21by9';\r\n    }\r\n    return (\r\n      <SimpleMapExampleGoogleMap\r\n        containerElement={\r\n          <div className={`cr-embed-responsive ${styleName}`} />\r\n        }\r\n        mapElement={<div className='cr-embed-responsive-item' />}\r\n      />\r\n    );\r\n  }\r\n}\r\n"}))))}}}]);
//# sourceMappingURL=125.5fefa638.chunk.js.map