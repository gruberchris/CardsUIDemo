/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { AboutController } from './main/about/about.controller';
import { HomeController } from './main/home/home.controller';

angular.module('cardsUidemo', ['ngAnimate', 'ngTouch', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .directive('acmeNavbar', NavbarDirective);
