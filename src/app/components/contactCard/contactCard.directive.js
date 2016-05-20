export function ContactCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/contactCard/contactCard.html',
    scope: {
      cardSelect: "&",
      cardRemove: "&",
      cardId: "=",
      cardTitle: "="
    },
    transclude: true,
    controllerAs: 'vm',
    bindToController: true,
    controller: ContactCardController,
    link: function(scope, element, attr, ctrl, transclude) {

    }
  };

  return directive;
}

class ContactCardController {
  constructor () {
    'ngInject';

  }

  selectCard() {
    this.cardSelect();
  }

  removeCard() {
    this.cardRemove();
  }
}
