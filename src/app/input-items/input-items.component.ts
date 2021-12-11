import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-input-items',
  templateUrl: './input-items.component.html',
  styleUrls: ['./input-items.component.css']
})

export class InputItemsComponent implements OnInit {
  title = 'todo';
  filter: 'all' | 'active' | 'done' = 'all';
  isUpdateNeeded : boolean = false;
  allItems: Item[] = [];

  constructor() {
    this.getLatestItemListFromApi();
  }

  ngOnInit(): void {
  }

  /**
   * Returns the item list 
   */
  get items() {
    return this.allItems;
  }
  
  /**
   * Retrieves all the item list using a GET request.
   */
  getLatestItemListFromApi() {
    async function getJsonData(allItems: Item[]) {
      try {
        const response = await fetch('http://localhost:5000/items');
        const data = await response.json() as Array<Item>;
        const jsonData = JSON.stringify(data)
        for (var i in data)
          allItems.push(data[i]);
        console.log("Json Data : " + JSON.stringify(allItems))
      } catch (err) {
        console.log("Error: " + err)
      }
    };
    this.allItems = []
    getJsonData(this.allItems);
  }

  

  /**
   * Sends a POST request to the backend API to add a single grocery item into the system
   * @param  {string} description
   * @param  {string} quantity
   */
  addItem(description: string, quantity: string) {
    const data = { "description": description, "quantity": quantity };
    console.log("This works" + description + quantity)
    //POST request with body equal on data in JSON format
    async function sendPostData(req_data: any, callback:() => void) {
      try {
        const response = await fetch('http://localhost:5000/items/create',  {
                                     method: 'POST',
                                     headers: {
                                              'Content-Type': 'application/json',
                                              },
                                     body: JSON.stringify(req_data)
                                    });
        console.log("Sent Post request. Calling callback function");
        callback();
      } catch (err) {
        console.log("Error: " + err)
      }
    };
    sendPostData(data, () => {this.getLatestItemListFromApi()});
    this.isUpdateNeeded = true
  }

  // removes item
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  // exports as pretty text
  exportAsUserText(allItems: Array<Item>) {
    let stockJSON = JSON.stringify(allItems);

    var itemStock: string
    itemStock = ""
    for (let item of allItems) {
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
}