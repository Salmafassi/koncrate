import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: any[]=[];
  services1:any[]=[];
  @Input() rowservice: any;
    constructor(private service: ServiceService) { }
  
    ngOnInit(): void {
      this.getAllservices();
    }
  
    getAllservices(){
      this.service.getAll(this.rowservice).subscribe((service )=> {
     this.services=Object.values(service);
      this.services.forEach((val)=>{
     val.forEach((element: any) => {
       this.services1.push(element);
     });
    
   })
  });
  console.log(this.services1);
    }  
}
