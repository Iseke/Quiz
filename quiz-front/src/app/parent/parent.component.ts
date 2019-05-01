import { Component, OnInit } from '@angular/core';
import {IPost} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public postss: IPost[] = [];
  public like = 0;
  public username: any = '';
  public password: any = '';
  public title: any = '';
  public  body: any = '';
  public logged = false;
  public getpost : IPost;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }
    if(this.logged){
      this.provider.getPosts().then(res =>{
        this.postss = res;
      });
    }

  }
  getPosts(){
    this.provider.getPosts().then(res=>{
      this.postss = res;
    });
  }
  createPost(){
    this.provider.createPost(this.title, this.body).then(res=>{
      this.postss.push(res);
    });
  }
  getPost(post: IPost){
    this.provider.getPost(post.id).then(res=>{
      this.getpost =res;
    });
  }
  updatePost(post: IPost){
    this.provider.updatePost(post.id,post.title,post.body).then(res=>{
      this.provider.getPosts().then(r=>{
        this.postss = r;
      });
    });
  }
  deletePost(post:IPost){
    this.provider.deletePost(post.id).then(res=>{
      this.provider.getPosts().then(r=>{
        this.postss = r;
      });
    });
  }
  login(){
    if(this.username!=='' && this.password!==''){
      this.provider.login(this.username,this.password).then(res=>{
        localStorage.setItem('token',res.token);
        this.logged =true;
        this.provider.getPosts().then(r=>{
          this.postss=r;
        })
      })
    }
  }
  logout(){
    this.provider.logout().then(res=>{
      localStorage.clear();
      this.username='';
      this.password='';
      this.logged = false;
    });
  }

}
