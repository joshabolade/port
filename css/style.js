import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ========================================================================
  // ///////////////////////////////////////////////////////////////////// 
// 03 - Preloader
/////////////////////////////////////////////////////////////////////
  '#preloader': {
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '99999999999',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'visible',
    'background': '#fff url('../img/preloader.gif') no-repeat center center'
  },
  // ==========================================================================
	Global Styles
==========================================================================
  'a': {
    'color': '#E04343',
    'WebkitTransition': 'all 0.5s',
    'MozTransition': 'all 0.5s',
    'OTransition': 'all 0.5s',
    'transition': 'all 0.5s',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }],
    'outline': 'none!important'
  },
  'a:hover': {
    'color': '#0D0D0D',
    'textDecoration': 'none',
    'outline': 'none!important'
  },
  'a:focus': {
    'color': '#0D0D0D',
    'textDecoration': 'none',
    'outline': 'none!important'
  },
  'a:active': {
    'color': '#0D0D0D',
    'textDecoration': 'none',
    'outline': 'none!important'
  },
  'p': {
    'color': '#8c9398',
    'wordSpacing': '1px',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#353535!important',
    'textTransform': 'uppercase',
    'fontWeight': 'bold'
  },
  'h2::after': {
    'content': '" "',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 65 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#8c8c8c',
    'textTransform': 'uppercase',
    'fontWeight': 'bold'
  },
  'h6::after': {
    'content': '" "',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 65 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  // ==========================================================================HTML5 display definitions==========================================================================
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'details': {
    'display': 'block'
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'hgroup': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'summary': {
    'display': 'block'
  },
  'audio': {
    'display': 'inline-block',
    '*display': 'inline',
    '*zoom': '1'
  },
  'canvas': {
    'display': 'inline-block',
    '*display': 'inline',
    '*zoom': '1'
  },
  'video': {
    'display': 'inline-block',
    '*display': 'inline',
    '*zoom': '1'
  },
  // Remove excess height in iOS 5 devices.
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  '[hidden]': {
    'display': 'none'
  },
  // ==========================================================================Base==========================================================================
  'html': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'WebkitTextSizeAdjust': '100%',
    'MsTextSizeAdjust': '100%'
  },
  'html': {
    'WebkitFontSmoothing': 'antialiased',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.004)' }]
  },
  'html a': {
    'WebkitFontSmoothing': 'antialiased',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.004)' }]
  },
  'html': {
    'fontFamily': ''Varela Round',sans-serif'
  },
  'button': {
    'fontFamily': ''Varela Round',sans-serif'
  },
  'input': {
    'fontFamily': ''Varela Round',sans-serif'
  },
  'select': {
    'fontFamily': ''Varela Round',sans-serif'
  },
  'textarea': {
    'fontFamily': ''Varela Round',sans-serif'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Open Sans',sans-serif'
  },
  // ==========================================================================Links==========================================================================
  'a:focus': {
    'outline': 'thin dotted'
  },
  'a:active': {
    'outline': '0'
  },
  'a:hover': {
    'outline': '0'
  },
  // ==========================================================================Typography==========================================================================
  'import': 'url(http://fonts.googleapis.com/css?family=Open+Sans:300,400)',
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'margin': [{ 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }],
    'color': '#353535'
  },
  'h2': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'margin': [{ 'unit': 'em', 'value': 0.83 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.83 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'em', 'value': 1.17 }],
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 1.33 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.33 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'em', 'value': 0.83 }],
    'margin': [{ 'unit': 'em', 'value': 1.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.67 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'margin': [{ 'unit': 'em', 'value': 2.33 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2.33 }, { 'unit': 'px', 'value': 0 }]
  },
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }]
  },
  'b': {
    'fontWeight': 'bold'
  },
  'strong': {
    'fontWeight': 'bold'
  },
  'blockquote': {
    'margin': [{ 'unit': 'em', 'value': 0 }, { 'unit': 'px', 'value': 55 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'px', 'value': 55 }],
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#CCCCCC' }]
  },
  'dfn': {
    'fontStyle': 'italic'
  },
  'mark': {
    'background': '#ff0',
    'color': '#000'
  },
  'p': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'pre': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'code': {
    'fontFamily': 'monospace,serif',
    '_fontFamily': ''courier new',monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace,serif',
    '_fontFamily': ''courier new',monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'fontFamily': 'monospace,serif',
    '_fontFamily': ''courier new',monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace,serif',
    '_fontFamily': ''courier new',monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'whiteSpace': 'pre',
    'whiteSpace': 'pre-wrap',
    'wordWrap': 'break-word'
  },
  'q': {
    'quotes': 'none'
  },
  'q:before': {
    'content': '''',
    'content': 'none'
  },
  'q:after': {
    'content': '''',
    'content': 'none'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '100',
    'lineHeight': [{ 'unit': 'px', 'value': 28 }]
  },
  // ==========================================================================Lists==========================================================================
  'dl': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'menu': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'ol': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'dd': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  'menu': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  'ol': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  'ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  'nav ul': {
    'listStyle': 'none',
    'listStyleImage': 'none'
  },
  'nav ol': {
    'listStyle': 'none',
    'listStyleImage': 'none'
  },
  // ==========================================================================Embedded content==========================================================================
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'MsInterpolationMode': 'bicubic'
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  // ==========================================================================Figures==========================================================================
  'figure': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // ==========================================================================Forms==========================================================================
  'form': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c0c0c0' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'legend': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'normal',
    '*marginLeft': '-7px'
  },
  'button': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline',
    '*verticalAlign': 'middle'
  },
  'input': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline',
    '*verticalAlign': 'middle'
  },
  'select': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline',
    '*verticalAlign': 'middle'
  },
  'textarea': {
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline',
    '*verticalAlign': 'middle'
  },
  'button': {
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'input': {
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'button': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer',
    '*overflow': 'visible'
  },
  'html input[type="button"]': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer',
    '*overflow': 'visible'
  },
  'input[type="reset"]': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer',
    '*overflow': 'visible'
  },
  'input[type="submit"]': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer',
    '*overflow': 'visible'
  },
  'button[disabled]': {
    'cursor': 'default'
  },
  'input[disabled]': {
    'cursor': 'default'
  },
  'input[type="checkbox"]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    '*height': '13px',
    '*width': '13px'
  },
  'input[type="radio"]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    '*height': '13px',
    '*width': '13px'
  },
  'input[type="search"]': {
    'WebkitAppearance': 'textfield',
    'MozBoxSizing': 'content-box',
    'WebkitBoxSizing': 'content-box',
    'boxSizing': 'content-box'
  },
  'input[type="search"]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  'input[type="search"]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  'button::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'overflow': 'auto',
    'verticalAlign': 'top'
  },
  // ==========================================================================Tables==========================================================================
  'table': {
    'borderCollapse': 'collapse',
    'borderSpacing': '0'
  },
  // ==========================================================================Section Styles==========================================================================
  'section-padding': {
    'padding': [{ 'unit': 'px', 'value': 90 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }]
  },
  'dark-bg': {
    'background': '#f3f5f8'
  },
  'light-bg': {
    'backgroundColor': '#fff'
  },
  'dark-box': {
    'background': '#F3F5F8',
    'WebkitBoxShadow': '0px 3px 0px 0px #E04343',
    'MozBoxShadow': '0px 3px 0px 0px #E04343',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#E04343' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'dark-box:hover': {
    'WebkitBoxShadow': '0px 3px 0px 0px #FFE801',
    'MozBoxShadow': '0px 3px 0px 0px #FFE801',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#FFE801' }]
  },
  'dark-box:focus': {
    'WebkitBoxShadow': '0px 3px 0px 0px #FFE801',
    'MozBoxShadow': '0px 3px 0px 0px #FFE801',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#FFE801' }]
  },
  'box-hover': {
    'transition': 'all 500ms ease-in-out',
    'WebkitTransition': 'all 500ms ease-in-out',
    'MozTransition': 'all 500ms ease-in-out',
    'OTransition': 'all 500ms ease-in-out'
  },
  'box-hover:hover': {
    'transform': 'translate(0,-15px)',
    'WebkitTransform': 'translate(0,-15px)',
    'MsTransform': 'translate(0,-15px)'
  },
  'box-hover:focus': {
    'transform': 'translate(0,-15px)',
    'WebkitTransform': 'translate(0,-15px)',
    'MsTransform': 'translate(0,-15px)'
  },
  'wrapper': {
    'height': [{ 'unit': 'px', 'value': 650 }],
    'screen&&<w480': {
      'background': '#f3f5f8',
      'height': [{ 'unit': 'px', 'value': 640 }]
    }
  },
  'nopadding': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'inner': {
    'paddingTop': [{ 'unit': 'px', 'value': 138 }],
    'screen&&<w767': {
      'paddingTop': [{ 'unit': 'px', 'value': 10 }],
      'textAlign': 'center'
    }
  },
  // ==========================================================================Navigation==========================================================================
  'menu-wrap a': {
    'color': '#555d7c',
    'outline': 'none!important'
  },
  'menu-wrap a:hover': {
    'color': '#E04343'
  },
  'menu-wrap a:focus': {
    'color': '#E04343'
  },
  'content-wrap': {
    'overflowY': 'scroll',
    'WebkitOverflowScrolling': 'touch',
    'WebkitTransition': '-webkit-transform 0.4s',
    'transition': 'transform 0.4s',
    'WebkitTransitionTimingFunction': 'cubic-bezier(0.7,0,0.3,1)',
    'transitionTimingFunction': 'cubic-bezier(0.7,0,0.3,1)'
  },
  'content': {
    'position': 'relative',
    'background': '#b4bad2',
    'paddingBottom': [{ 'unit': 'em', 'value': 12 }]
  },
  // Common styles for menu button and menu-wrap
  'menu-button': {
    'position': 'fixed',
    'width': [{ 'unit': 'em', 'value': 2.5 }],
    'height': [{ 'unit': 'em', 'value': 2.25 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'WebkitTransform': 'translate3d(1.5em,1.5em,0)',
    'transform': 'translate3d(1.5em,1.5em,0)'
  },
  'menu-wrap': {
    'position': 'fixed',
    'width': [{ 'unit': 'em', 'value': 2.5 }],
    'height': [{ 'unit': 'em', 'value': 2.25 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'WebkitTransform': 'translate3d(1.5em,1.5em,0)',
    'transform': 'translate3d(1.5em,1.5em,0)'
  },
  // Menu Button
  'menu-button': {
    'zIndex': '1000',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'textIndent': '2.5em',
    'color': 'transparent',
    'background': 'transparent'
  },
  'menu-button::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': 0.5 }],
    'right': [{ 'unit': 'em', 'value': 0.5 }],
    'bottom': [{ 'unit': 'em', 'value': 0.5 }],
    'left': [{ 'unit': 'em', 'value': 0.5 }],
    'background': 'linear-gradient(#E04343 20%,rgba(0, 0, 0, 0) 20%,rgba(0, 0, 0, 0) 40%,#E04343 40%,#E04343 60%,rgba(0, 0, 0, 0) 60%,rgba(0, 0, 0, 0) 80%,#E04343 80%)',
    'content': ''''
  },
  'menu-button:hover': {
    'opacity': '0.6'
  },
  // Menu
  'menu-wrap': {
    'zIndex': '999',
    'background': 'rgba(255, 255, 255, 1)',
    'WebkitTransition': 'width 0.4s,height 0.4s,-webkit-transform 0.4s',
    'transition': 'width 0.4s,height 0.4s,transform 0.4s',
    'WebkitTransitionTimingFunction': 'cubic-bezier(0.7,0,0.3,1)',
    'transitionTimingFunction': 'cubic-bezier(0.7,0,0.3,1)'
  },
  'menu': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }]
  },
  'icon-list': {
    'float': 'right',
    'padding': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 6 }]
  },
  'icon-list a': {
    'opacity': '0',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#353535',
    'screen&&<w50': {
      'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0 }],
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
      'fontSize': [{ 'unit': 'em', 'value': 1 }]
    }
  },
  'icon-list a span': {
    'display': 'block',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.5 }],
    'fontWeight': '700',
    'paddingTop': [{ 'unit': 'em', 'value': 0.5 }]
  },
  // Shown menu
  'show-menu content-wrap': {
    'WebkitTransitionDelay': '0s',
    'transitionDelay': '0s',
    'WebkitTransform': 'translate3d(0,125px,0)',
    'transform': 'translate3d(0,125px,0)'
  },
  'show-menu menu-wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 125 }],
    'WebkitTransform': 'translate3d(0,0,0)',
    'transform': 'translate3d(0,0,0)',
    'WebkitTransitionDelay': '0s',
    'transitionDelay': '0s',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E04343' }]
  },
  'show-menu icon-list a': {
    'opacity': '1',
    'WebkitTransition': 'opacity 0.4s 0.4s',
    'transition': 'opacity 0.4s 0.4s'
  },
  'show-menu icon-list a:nth-child(2)': {
    'WebkitTransitionDelay': '0.42s',
    'transitionDelay': '0.42s'
  },
  'show-menu icon-list a:nth-child(3)': {
    'WebkitTransitionDelay': '0.44s',
    'transitionDelay': '0.44s'
  },
  'show-menu icon-list a:nth-child(4)': {
    'WebkitTransitionDelay': '0.46s',
    'transitionDelay': '0.46s'
  },
  'show-menu icon-list a:nth-child(5)': {
    'WebkitTransitionDelay': '0.48s',
    'transitionDelay': '0.48s'
  },
  'show-menu icon-list a:nth-child(6)': {
    'WebkitTransitionDelay': '0.5s',
    'transitionDelay': '0.5s'
  },
  // ==========================================================================Hero==========================================================================
  'hero': {
    'background': 'url('../img/header-bg.jpg') right bottom no-repeat',
    'backgroundSize': 'contain',
    'padding': [{ 'unit': 'px', 'value': 110 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#FBFBFB',
    'screen&&<w991': {
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'hero h1': {
    'fontSize': [{ 'unit': 'px', 'value': 120 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '600',
    'lineHeight': [{ 'unit': 'px', 'value': 95 }],
    'textTransform': 'uppercase'
  },
  'hero h1 span': {
    'color': '#a1a9b0',
    // display:inline-block;
  },
  'hero h3': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0.5',
    'color': '#E04343',
    'letterSpacing': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'textTransform': 'uppercase'
  },
  'hero p': {
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  // Boucing Arrow Animation
  'scrollto': {
    'padding': [{ 'unit': 'px', 'value': 150 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'color': '#FFF',
    'textDecoration': 'none',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'screen&&<w414': {
      'padding': [{ 'unit': 'px', 'value': 95 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'scrollto--arrow': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'scrollto--arrow img': {
    'animation': 'arrowbounce 1s alternate infinite',
    'MozAnimation': 'arrowbounce 1s alternate infinite',
    // Firefox
    'WebkitAnimation': 'arrowbounce 1s alternate infinite',
    // Safari and Chrome
    'OAnimation': 'arrowbounce 1s alternate infinite',
    // Opera
  },
  // ==========================================================================Intro==========================================================================
  'intro p': {
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1arrow': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textTransform': 'uppercase',
    'color': '#353535',
    'letterSpacing': [{ 'unit': 'px', 'value': 4 }],
    'background': 'url('../img/h1-bg.png') no-repeat center bottom',
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': 'bold'
  },
  'h1arrow span': {
    'color': '#E04343'
  },
  // ==========================================================================About==========================================================================
  'about-image': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'backgroundSize': 'cover'
  },
  'color-bg': {
    'background': '#E04343'
  },
  'color-bg a': {
    'color': '#FFE800'
  },
  'color-bg h6': {
    'color': 'white'
  },
  'color-bg p': {
    'color': 'white'
  },
  'color-bg h6::after': {
    'borderColor': '#fff'
  },
  'color-bg weight-outline-btn': {
    'color': 'white',
    'borderColor': 'white'
  },
  'color-bg weight-outline-btn:hover': {
    'background': '#FFF',
    'color': '#E04343',
    'borderColor': 'rgba(0, 0, 0, 0)'
  },
  'about-text': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 50 }]
  },
  'about-text h1': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#8C8C8C'
  },
  'color-bg h1arrow span': {
    'color': '#FFE800'
  },
  'color-bg h1arrow': {
    'color': '#FFF'
  },
  // ==========================================================================Services==========================================================================
  'services': {
    'marginTop': [{ 'unit': 'px', 'value': 80 }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'services icon': {
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 175 }],
    'height': [{ 'unit': 'px', 'value': 175 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 180 }],
    'fontSize': [{ 'unit': 'px', 'value': 56 }],
    'color': '#fff',
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.0)' }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }],
    'WebkitTransition': 'all .3s ease-out',
    'transition': 'all .3s ease-out',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E04343' }],
    'color': '#E04343'
  },
  'services item:hover icon': {
    'background': '#E04343',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E04343' }]
  },
  'services item [class*=fa]': {
    'WebkitTransition': 'all .3s ease-out',
    'transition': 'all .3s ease-out'
  },
  'services item:hover [class*=fa]': {
    'WebkitTransform': 'scale(1.2)',
    'transform': 'scale(1.2)',
    'WebkitTransition': 'all .3s ease-out',
    'transition': 'all .3s ease-out',
    'color': '#fff'
  },
  'features-wrapper': {
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'irespons': {
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#fff',
    'borderRadius': '50%',
    'WebkitTransition': 'all .3s ease-out',
    'transition': 'all .3s ease-out',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'color': '#CCCCCC'
  },
  // ==========================================================================iPhone Section==========================================================================
  'iphone': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'background': '#f3f5f8',
    'float': 'left',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': -15 }, { 'unit': 'px', 'value': -11 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': -6 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }],
    'MozBoxShadow': 'inset -15px -11px 40px -6px rgba(0,0,0,0.1)',
    'WebkitBoxShadow': 'inset -15px -11px 40px -6px rgba(0,0,0,0.1)',
    'zIndex': '1',
    'screen&&>w480&&<w991': {
      'display': 'none'
    }
  },
  'fluid-white': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'background': '#fff',
    'float': 'right',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '2'
  },
  'responsive-services': {
    'position': 'relative'
  },
  // ==========================================================================Portfolio==========================================================================
  'swag': {
    'padding': [{ 'unit': 'px', 'value': 75 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 75 }, { 'unit': 'px', 'value': 0 }]
  },
  'swag h1': {
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 5 }]
  },
  'swag h1 span': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'down-arrow-btn': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'background': 'rgba(0,0,0,0.6)',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textAlign': 'center'
  },
  'down-arrow-btn:hover': {
    'color': '#fff',
    'background': 'rgba(0,0,0,1)'
  },
  'down-arrow-btn:focus': {
    'color': '#fff',
    'background': 'rgba(0,0,0,1)'
  },
  'portfolio img': {
    'height': [{ 'unit': 'px', 'value': 300 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'imggrayscale': {
    'filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
    // Firefox 3.5+,IE10
    'filter': 'gray',
    // IE6-9
    'WebkitFilter': 'grayscale(100%)',
    // Chrome 19+& Safari 6+
    'WebkitTransition': 'all .6s ease',
    // Fade to color for Chrome and Safari
    'WebkitBackfaceVisibility': 'hidden',
    // Fix for transition flickering
  },
  'imggrayscale:hover': {
    'filter': 'none',
    'WebkitFilter': 'grayscale(0%)'
  },
  'row-offset-0': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'row-offset-0>*': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'effects': {
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'effects img': {
    'position': 'relative',
    'position': 'relative',
    'zIndex': '1',
    'overflow': 'hidden'
  },
  'effects img:nth-child(n)': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'effects img:first-child': {
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  'effects img:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'effects img img': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'overlay': {
    'display': 'block',
    'position': 'absolute',
    'zIndex': '20',
    'filter': 'none!important',
    'WebkitFilter': 'grayscale(0%)',
    'overflow': 'hidden',
    'transition': 'all 0.5s',
    'WebkitTransition': 'all 0.5s',
    'MozTransition': 'all 0.5s',
    'OTransition': 'all 0.5s'
  },
  'overlay-effect img i': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'overlay-effect overlay': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'opacity': '0'
  },
  'overlay-effect overlay aexpand': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': '%V', 'value': 0.47 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': -30 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'overlay-effect imghover overlay': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'opacity': '1'
  },
  'img img': {
    'width': [{ 'unit': '%H', 'value': NaN }, { 'unit': '%H', 'value': NaN }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': NaN }, { 'unit': '%H', 'value': NaN }, { 'unit': 'string', 'value': '!important' }],
    'WebkitTransition': 'opacity 0.35s,-webkit-transform 0.35s',
    'transition': 'opacity 0.35s,transform 0.35s',
    'MozTransition': 'opacity 0.35s,-moz-transform 0.35s',
    'OTransition': 'opacity 0.35s,-o-transform 0.35s',
    'WebkitTransform': 'translate3d(-40px,0,0)',
    'transform': 'translate3d(-40px,0,0)',
    'MsTransform': 'translate3d(-40px,0,0)'
  },
  'img:hover img': {
    'WebkitTransform': 'translate3d(0,0,0)',
    'transform': 'translate3d(0,0,0)',
    'MsTransform': 'translate3d(-40px,0,0)'
  },
  'hype': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'top': [{ 'unit': 'px', 'value': 50 }]
  },
  // ==========================================================================Subscribe==========================================================================
  'subscribe': {
    'paddingTop': [{ 'unit': 'px', 'value': 75 }]
  },
  'subscribe h1': {
    'color': '#FFFFFF',
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'subscribe h1 span': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'subscribe input[type=text]': {
    'backgroundColor': 'rgba(255,255,255,0.1)',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#FFE800' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'color': '#808080'
  },
  'subscribe input[type=text]:focus': {
    'outline': 'none'
  },
  'subscribe input[type=submit]': {
    'background': '#FFE800',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#FFE800' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'color': '#E04343',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'transition': 'all 0.5s ease',
    'MozTransition': 'all 0.5s ease',
    'WebkitTransition': 'all 0.5s ease',
    'OTransition': 'all 0.5s ease'
  },
  'subscribe input[type=submit]:hover': {
    'background': 'rgba(255, 232, 0, 0.9)',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#FFE800' }],
    'color': '#E04343'
  },
  // ==========================================================================CTA==========================================================================
  'spacer-cta': {
    'backgroundColor': '#E04343',
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }]
  },
  'outline-btn': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 40 }],
    'color': '#FFE801',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#FFE801' }],
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'outline-btn:hover': {
    'color': '#E04343',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#E04343' }],
    'background': '#FFE801'
  },
  'outline-btn:focus': {
    'color': '#E04343',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#E04343' }],
    'background': '#FFE801'
  },
  'weight-outline-btn': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }],
    'color': '#8C8C8C',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#8C8C8C' }],
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'weight-outline-btn:hover': {
    'color': '#424242',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#424242' }]
  },
  'outline-btn:focus': {
    'color': '#424242',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#424242' }]
  },
  // ==========================================================================Team==========================================================================
  'team img': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'ulsocial-buttons': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulsocial-buttons li': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'ulsocial-buttons li:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'social-btn': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'background': '#E04343',
    'display': 'inline-block',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center'
  },
  'social-btn:hover': {
    'background': 'rgba(255, 232, 0, 1)',
    'color': '#E04343'
  },
  'social-btn:focus': {
    'background': 'rgba(255, 232, 0, 1)',
    'color': '#E04343'
  },
  'social': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  // ==========================================================================Contact==========================================================================
  'up-btn': {
    'width': [{ 'unit': 'px', 'value': 55 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'background': 'rgba(255, 232, 1, 0.9)',
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'color': '#E04343',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 52 }],
    'textAlign': 'center',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -26 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'up-btn:hover': {
    'color': 'black',
    'background': '#FFE800'
  },
  'up-btn:focus': {
    'color': 'black',
    'background': '#FFE800'
  },
  'contact-details': {
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }]
  },
  'contact-details h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'contact-details h2 span': {
    'display': 'block',
    'color': '#545454',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'contact-wrap': {
    'position': 'relative'
  },
  '#googlemaps': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'left': [{ 'unit': 'px', 'value': 15 }],
    'bottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'contact': {
    'marginTop': [{ 'unit': 'px', 'value': -20 }]
  },
  'contact label': {
    'float': 'left'
  },
  'contact form-control': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cbcbcb' }],
    'height': [{ 'unit': 'px', 'value': 45 }]
  },
  'contact textareaform-control': {
    'height': [{ 'unit': 'px', 'value': 310 }]
  },
  // Inputs styles
  'contact form-control': {
    'borderRadius': '0!important',
    'WebkitBoxShadow': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'contact form-control:focus': {
    'WebkitBoxShadow': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#B0B0B0' }]
  },
  'btn-send': {
    'background': '#E04343',
    'color': 'white',
    'transition': 'all 0.4s',
    'borderRadius': '0',
    'float': 'right'
  },
  'btn-send:hover': {
    'background': '#FFE800',
    'color': '#E04343'
  },
  'button': {
    'outline': 'none!important'
  },
  'button:focus': {
    'outline': 'none!important'
  },
  'button:hover': {
    'outline': 'none!important'
  },
  'button:active': {
    'outline': 'none!important'
  },
  // ==========================================================================Footer==========================================================================
  'footer a': {
    'color': '#a1a9b0'
  },
  'footer': {
    'backgroundColor': '#f3f5f8',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer p': {
    'color': '#808080'
  },
  // ==========================================================================FlexSlider Custom CSS==========================================================================
  '#servicesSlider': {
    'marginTop': [{ 'unit': 'px', 'value': 70 }]
  },
  'ulslides li': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'features-slider': {
    'position': 'relative',
    'padding': [{ 'unit': '%V', 'value': 0.11 }, { 'unit': 'px', 'value': 100 }, { 'unit': '%V', 'value': 0.1 }, { 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'backgroundColor': '#3F6184'
  },
  'features-slider ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'features-slider ul li': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'features-slider li h1': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'color': '#fff',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'features-slider li p': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  '#clientSlider flex-control-nav': {
    'textAlign': 'left'
  },
  '#clientSlider flex-control-nav li:first-child': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#clientSlider small': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold'
  },
  'flex-control-paging li aflex-active': {
    'background': '#E04343',
    'borderColor': '#E04343'
  },
  'color-bg flex-control-paging li a': {
    'background': 'white',
    'borderColor': 'white'
  },
  'color-bg flex-control-paging li aflex-active': {
    'background': '#FFE800',
    'borderColor': '#FFE800'
  },
  // ==========================================================================Waypoints==========================================================================
  'wp1': {
    'visibility': 'hidden',
    'screen&&<w1024': {
      'backgroundPosition': '50px 0'
    },
    'screen&&<w1280': {
      'backgroundPosition': '50px 0'
    }
  },
  'wp2': {
    'visibility': 'hidden',
    'screen&&<w1024': {
      'backgroundPosition': '50px 0'
    },
    'screen&&<w1280': {
      'backgroundPosition': '50px 0'
    }
  },
  'wp3': {
    'visibility': 'hidden',
    'screen&&<w1024': {
      'backgroundPosition': '50px 0'
    },
    'screen&&<w1280': {
      'backgroundPosition': '50px 0'
    }
  },
  'wp4': {
    'visibility': 'hidden',
    'screen&&<w1024': {
      'backgroundPosition': '50px 0'
    },
    'screen&&<w1280': {
      'backgroundPosition': '50px 0'
    }
  },
  'wp5': {
    'visibility': 'hidden',
    'screen&&<w1024': {
      'backgroundPosition': '50px 0'
    },
    'screen&&<w1280': {
      'backgroundPosition': '50px 0'
    }
  },
  'wp6': {
    'visibility': 'hidden',
    'screen&&<w1024': {
      'backgroundPosition': '50px 0'
    },
    'screen&&<w1280': {
      'backgroundPosition': '50px 0'
    }
  },
  'bounceInLeft': {
    'visibility': 'visible'
  },
  'bounceInRight': {
    'visibility': 'visible'
  },
  'fadeInUp': {
    'visibility': 'visible'
  },
  'fadeInUpDelay': {
    'visibility': 'visible'
  },
  'fadeInDown': {
    'visibility': 'visible'
  },
  'fadeInUpD': {
    'visibility': 'visible'
  },
  'fadeInLeft': {
    'visibility': 'visible'
  },
  'fadeInRight': {
    'visibility': 'visible'
  },
  'delay-05s': {
    'animationDelay': '0.5s',
    'WebkitAnimationDelay': '0.5s'
  },
  'delay-1s': {
    'animationDelay': '1s',
    'WebkitAnimationDelay': '1s'
  },
  'wp3': {
    'background': 'url('../img/iphone-bg.png') no-repeat center center',
    'backgroundPosition': '200px 10px',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  // ==========================================================================Responsive==========================================================================
  // 320px (iPhone)
  // 480px (WVGA - Low End Windows Phone)
  // xGA iPad
  // 1200px (Small Desktop,Netbook)
  // Bootstrap 990px Breakpoint to 480px
  // * Responsive fixes *
});
