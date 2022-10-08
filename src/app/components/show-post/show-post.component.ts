import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  slug: string='';
  post: any;
  post1: any;
    constructor(private postService:PostService,private route: ActivatedRoute) { 
  
    }
  
    ngOnInit(): void {
        this.slug=<string>this.route.snapshot.paramMap.get('slug');
     this.getPost(this.slug); 
     console.log(this.post);
    }
    getPost(slug: string){
      this.postService.getOne(slug).subscribe((post)=>{
        this.post1=Object.values(post);
        this.post1.forEach((element: any) => {
          this.post=element;
        });
  
      });
      
    }
  
}
