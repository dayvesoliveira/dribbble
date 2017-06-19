import angular from 'angular';
import 'angular-route';

import ShotsController from './controllers/shots-ctrl';
import ViewShotsController from './controllers/view-shots-ctrl';
import ChangeWidthController from './controllers/change-width-ctrl';
import MenuNavController from './controllers/menu-nav-ctrl';
import ButtonNavDirective from './directives/button-nav-directive';
import ShotsMenuHeaderDirective from './directives/shots-menu-header-directive';
import ScreenshotModule from './screenshotModule';
import ServicesModule from './servicesModule';
import ShotFactory from './services/shot-factory';
import ShotFilter from './filters/shot-filter';

import AppRoutes from './routes';

angular.module('AppDribble', ['ngRoute','ServicesModule','ScreenshotModule'])
       .config( AppRoutes )
       .controller('ShotsController', ShotsController)
       .controller('ViewShotsController', ViewShotsController)
       .controller('MenuNavController', MenuNavController)
       .controller('ChangeWidthController', ChangeWidthController)
       .directive('shotsMenuHeader', ShotsMenuHeaderDirective)
       .directive('buttonNav', ButtonNavDirective)
       .filter('shotFilter', ShotFilter);