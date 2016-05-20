export class ContactController {
  constructor ($stateParams) {
    'ngInject';

    this.contactId = $stateParams.contactId;
  }
}
