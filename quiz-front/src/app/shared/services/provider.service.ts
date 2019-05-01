import { Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {IAuthResponce, IPost} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }
  getPosts(): Promise<IPost> {
    return this.get('http://localhost:8000/posts/', {});
  }
  createPost(ntitle: string, nbody: string): Promise<IPost> {
    return this.post('http://localhost:8000/posts/', {
      title: ntitle,
      body: nbody,

    });
  }
  getPost(id: number): Promise<IPost> {
    return this.get(`http://locahost:8000/posts/${id}/`, {});
  }
  updatePost(id: number, ntitle: string, nbody: string): Promise<IPost> {
    return this.put(`http://localhost:8000/posts/${id}/`, {
      title : ntitle,
      body: nbody,
    });
  }
  deletePost(id: number): Promise<IPost> {
    return this.delet(`http://localhost:8000/posts/${id}/`, {});
  }
  login(uname: any, pswd: any): Promise<IAuthResponce> {
    return this.post('http://localhost:8000/login/', {
      username: uname,
      password: pswd,
    });
  }
  logout(): Promise<any> {
    return this.post('http://localhost:8000/logout/', {} );
  }
  putLike(id: number, ttitle: string, bbody: string, like: number): Promise<IPost> {
    return this.post(`http://localhost:8000/posts/${id}/like/`, {
      title: ttitle,
      body: bbody,
      like_count: like
    });
  }

}
