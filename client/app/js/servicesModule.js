import angular from 'angular';

import ShotFactory from './services/shot-factory';
import ViewShotFactory from './services/view-shot-factory';
import MenuFactory from './services/menu-factory';

var ServicesModule = 
        angular.module('ServicesModule', [])
            .factory('ShotFactory', ShotFactory)
            .factory('ViewShotFactory', ViewShotFactory)
            .factory('MenuFactory', MenuFactory);

export default ServicesModule;