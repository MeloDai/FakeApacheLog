				options = {
			      minRows: 8                   // specify the minimum rows before creating a new
			                                   // column
			    , maxRows: 25                  // specify the maximum rows in a column
			    , targetColumnSize: 2          // specify the default target column size (it will
			                                   // attempt to create
			                                   // this many columns by default, unless the min/max
			                                   // row rules are not being met)
			    , openFx: "slideDown"          // the fx to use for showing the root menu
			    , openSpeed: 250               // the speed of the openFx
			    , closeFx: "slideUp"           // the fx to use for hiding the root menu
			    , closeSpeed: 250              // the speed of the closeFx
			    , hoverOverDelay: 200          // the delay before opening a submenu
			    , hoverOutDelay: 0             // the delay before closing a submenu
			    , showFx: "show"               // the fx to use when showing a submenu
			    , showSpeed: 0                 // the speed of the showFx
			    , hideFx: "hide"               // the fx to use when closing a submenu
			    , hideSpeed: 0                 // the speed of the hideFx
			    , dropShadow: true             // determine whether drop shadows should be shown
			                                   // on the submenus
			    , autoHeight: true             // always uses the lineHeight options (much faster
			                                   // than calculating height)
			    , lineHeight: 19               // the base height of each list item (li) this is
			                                   // normally calculated
			                                   // automatically, but in some cases the value can
			                                   // not be determined and
			                                   // you will need to set it manually
			    , screenPadding: 10            // the padding to use around the border of the
			                                   // screen -- this is used to make sure items stay
			                                   // on the screen
			    , allowParentSelect: false     // determines if parent items are allowed to be
			                                   // selected (by default
			                                   // only end nodes can be selected)
			    , delim: "|"                   // the delimited to use when showing the display
			                                   // string (must be single character)
			    , showACOnEmptyFocus: false    // show the autocomplete box on focus when input is
			                                   // empty
			    , valueAttr: "rel"             // the attribute that contains the value to use in
			                                   // the hidden field
			    , click: null                  // callback that occurs when the user clicks on a
			                                   // menu item
			    , select: null                 // callback that occurs when a value is selected
			    , init: null                   // callback that occurs when the control is fully
			                                   // initialized
			}
			$(document).ready(function (){
				$("#regularpath").mcDropdown("#regularpathmenu", options);
			});