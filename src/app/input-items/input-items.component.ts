import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import itemStockJSON from '../itemStockJSON.json'; // This import style requires "esModuleInterop", see "side notes"
// import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-input-items',
  templateUrl: './input-items.component.html',
  styleUrls: ['./input-items.component.css']
})

export class InputItemsComponent implements OnInit {

  constructor() {
      // console.log("READING ITEMSTOCKJSON" + "\n" + JSON.stringify(itemStockJSON))
     const allItemsTmp: Item[] = itemStockJSON
     this.allItems = allItemsTmp
      console.log(this.allItems)
   }

  ngOnInit(): void {
  }

  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Item[] = []
  // all items array
  /* allItems = [
    { description: 'eggs', quantity: 500, done: true },
    { description: 'potatoes', quantity: 4, done: false },
    { description: 'cauliflower', quantity: 2, done: false },
    { description: 'eggplant', quantity: 2, done: false },
  ]; */

  
  // exports as pretty text
  exportAsUserText(allItems: Array<Item>) {
    let stockJSON = JSON.stringify(allItems);
     
    var itemStock: string
    itemStock = ""
    for(let item of allItems) {
        itemStock = itemStock + item.quantity + " " + item.description + "\n"
    }
    console.log(itemStock)
    this.saveText2File(itemStock, "itemStockTxt.txt")
  }
  
  // exports as a JSON
  export2JSON(allItems: Array<Item>) {
    this.saveText2File(JSON.stringify(allItems, null, 2), "itemStockJSON.json")    
  }

  // facilitates both exports
  saveText2File(content: string, fileName: string) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([content], {
      type: "text/plain"
    }));
    a.setAttribute("download", fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  
  // add item
  addItem(description: string, quantity: string) {
    this.allItems.unshift({
      description,
      quantity: Number(quantity),
      done: false
    });
  }

  // removes item
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
  /* SaveDemo(allItems: Array<Item>) {
    let blob = new Blob([JSON.stringify(allItems)], {
        type: "text/plain"
      });
    FileSaver.saveAs(blob, "itemStockJSON.json");    
  } */
   
}

