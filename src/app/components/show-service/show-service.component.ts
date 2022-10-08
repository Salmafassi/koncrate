import { ServiceService } from 'src/app/services/service.service';
import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent implements OnInit {
slug: string='';
service: any;
service1: any;
  constructor(private serviceC:ServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug=<string>this.route.snapshot.paramMap.get('slug');
   this.getPost(this.slug);
  }
  getPost(slug: string){
    this.serviceC.getOne(slug).subscribe((post)=>{
      this.service1=Object.values(post);
      this.service1.forEach((element: any) => {
        this.service=element;
      });

    });
    console.log(this.service);
  }


}
