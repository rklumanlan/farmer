(function() {
  'use strict';

  angular
  .module('app.farmer')
  .controller('Inventory', Inventory);

  Inventory.$inject = ['logger', 'viewContentLoaded','strapModal'];

  /* @ngInject */
  function Inventory(logger, viewContentLoaded,strapModal) {
    var vm = this;
    vm.add_inventory=add_inventory;
    vm.add_item_link=add_item_link;

    function add_inventory(){
      console.log('click');
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_inventory.html');
    }
    function add_item_link(){
      console.log('clickssss');
      strapModal.show('am-fade-and-scale', 'center', 'commons/add_item.html');
    }

  }
})();
