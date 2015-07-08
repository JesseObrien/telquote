(function() {
  'use strict';

  angular
    .module('telquote')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
