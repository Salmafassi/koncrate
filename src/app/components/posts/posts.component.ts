import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[]=[];
  posts1:any[]=[];
 @Input() rowpost: any;
    constructor(private service: PostService) { }
  
    ngOnInit(): void {
      this.getAllservices();
    }
  
    getAllservices(){
      this.service.getAll(this.rowpost).subscribe((service )=> {
     this.posts=Object.values(service);
      this.posts.forEach((val)=>{
     val.forEach((element: any) => {
       this.posts1.push(element);
     });
    
   })
  });
  console.log(this.posts1);
    }  
}
