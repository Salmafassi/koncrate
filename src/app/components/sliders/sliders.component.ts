import { SlideService } from './../../services/slide.service';
import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/services/slider';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {
  Myslides : any[]=[];
  test: any[]=[];
  tes1:any[]=[];
  rowpost: number=2;
  constructor(private slideService: SlideService ) { }

  ngOnInit(): void {
    this.getAllslides();
  }
  getAllslides(){
   this.slideService.getAll(this.rowpost).subscribe((slides )=> {
    
    this.Myslides=(slides as any[]);
    console.log(this.Myslides);

this.test=Object.values(this.Myslides);
this.test.forEach((val)=>{
  val.forEach((element: any) => {
    this.tes1.push(element);
  });
  
})
console.log(this.tes1);
 
    
    }
  );  
    
  
  }

}
