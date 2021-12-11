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
    /* if (!description) return;
    this.editable = false;
    this.item.description = description;
    if (!quantity) return;
    this.item.quantity = Number(quantity); */

    const data = { "description": description, "quantity": quantity };
    console.log("Updated " + description + " to quantity: " + quantity);
    async function sendUpdateData(req_data: any, callback:() => void) {
      try {
          const response = await fetch('http://localhost:5000/items/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify(req_data)
          });
        console.log("Sent Update request. Calling callback function");
        callback();
      } catch (err) {
        console.log("Error: " + err)
      }
    };
    sendUpdateData(data, () => {});
    window.location.reload();
  }

  deleteItem(description: string) {
    const data = { "description": description };
    console.log("Deleted " + description + ".");
    async function sendDeleteData(req_data: any, callback:() => void) {
      try {
          const response = await fetch('http://localhost:5000/items/delete/:id', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify(req_data)
          });
        console.log("Sent Delete request. Calling callback function");
        callback();
      } catch (err) {
        console.log("Error: " + err)
      }
    };
    sendDeleteData(data, () => {});
    this.remove.emit();
  }
}
