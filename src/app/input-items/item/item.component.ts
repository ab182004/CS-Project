import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  editable = false;

  @Input()
  item!: Item;
  @Input() newItem: string | undefined;
  @Output() remove = new EventEmitter<Item>();

  saveItemDescription(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }

  saveItemQuantity(quantity: string) {
    if (!quantity) return;
    this.editable = false;
    this.item.quantity = Number(quantity);
  }

  saveItem(description: string, quantity: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    if (!quantity) return;
    this.item.quantity = Number(quantity);
  }
}
