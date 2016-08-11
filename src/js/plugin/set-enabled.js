'use strict';

var cls = require('../lib/class')
  , instances = require('./instances');

// Handlers
var clickRailHandler = require('./handler/click-rail')
  , dragScrollbarHandler = require('./handler/drag-scrollbar')
  , keyboardHandler = require('./handler/keyboard')
  , mouseWheelHandler = require('./handler/mouse-wheel')
  , nativeScrollHandler = require('./handler/native-scroll')
  , selectionHandler = require('./handler/selection')
  , touchHandler = require('./handler/touch');

module.exports = function (element, enabled) {
    var i = instances.get(element),
        disabledCls = 'ps-disabled';

    if (enabled === true && i.enabled === false) {
        clickRailHandler(element);
        dragScrollbarHandler(element);
        mouseWheelHandler(element);
        nativeScrollHandler(element);
        selectionHandler(element);

        cls.remove(i.scrollbarXRail, disabledCls);
        cls.remove(i.scrollbarYRail, disabledCls);
    } else if (enabled === false && (i.enabled === true || i.enabled === undefined)){
        i.event.unbindAll();
        cls.add(i.scrollbarXRail, disabledCls);
        cls.add(i.scrollbarYRail, disabledCls);
    }

    i.enabled = enabled;

};
