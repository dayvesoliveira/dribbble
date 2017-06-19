import angular from 'angular';

import ScreenshotDirective from './directives/screenshot/screenshot-directive';
import ScreenshotItemDirective from './directives/screenshot/screenshot-item-directive';
import ScreenshotImgDirective from './directives/screenshot/screenshot-img-directive';
import ScreenshotAttribDirective from './directives/screenshot/screenshot-attrib-directive';
import ScreenshotToolsDirective from './directives/screenshot/screenshot-tools-directive';
import ScreenshotExtrasDirective from './directives/screenshot/screenshot-extras-directive';

var ScreenshotModule = 
angular.module('ScreenshotModule', [])
       .directive('screenshot', ScreenshotDirective)
       .directive('screenshotItem', ScreenshotItemDirective)
       .directive('screenshotImg', ScreenshotImgDirective)
       .directive('screenshotAttrib', ScreenshotAttribDirective)
       .directive('screenshotTools', ScreenshotToolsDirective)
       .directive('screenshotExtras', ScreenshotExtrasDirective);

export default ScreenshotModule;