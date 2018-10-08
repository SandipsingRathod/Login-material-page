import { Component } from "@angular/core";

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
    
  }

@Component({
    selector:'home-selector',
    templateUrl:'./home.html',
    styleUrls:['home.css']
})

export class HomeClass{
      tiles: Tile[] = [
        {text: '', cols:12, rows: 1, color: 'white'},
        
        ];

        tiles4: Tile[] = [
            {text: 'Footer Notes Here. All rights reserved. Website Developed By - Arnav Technosys', cols:12, rows: 1, color: 'black'},
            
            ];
}