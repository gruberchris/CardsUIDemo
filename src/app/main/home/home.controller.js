export class HomeController {
  constructor (toastr) {
    'ngInject';

    this.toastr = toastr;

    this.tileViewSelected = true;
  }

  get TileViewSelected() {
    return this.tileViewSelected;
  }

  set TileViewSelected(value) {
    this.tileViewSelected = value;
  }

  get Toastr() {
    return this.toastr;
  }

  onTileSelect() {
    this.TileViewSelected = true;
  }

  onListSelect() {
    this.TileViewSelected = false;
  }

  onAddItem() {
    this.Toastr.success('Successfully saved!', 'Add New Item');
  }
  
  onCardSelect(cardId) {
    
  }
  
  onCardRemove(cardId) {
    
  }
}
