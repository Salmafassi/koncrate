import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
slug: string='about1';
page1: any;
page: any;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.getPage(this.slug);
  }
  getPage(slug: string){
    this.service.getOnePage(slug).subscribe((page)=>{
      this.page1=Object.values(page);
      this.page1.forEach((element: any) => {
        this.page=element;
      });

    });
  }

}
