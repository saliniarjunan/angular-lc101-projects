import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean[] = [false,false,false];

   constructor() { }

   ngOnInit() { }
   buttonActive()
   {
      for (let i=0; i<this.inactive.length; i++)
      {
         this.inactive[i] = false;
      }
   }

}
