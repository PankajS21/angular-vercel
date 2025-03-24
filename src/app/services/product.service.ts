import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() {
  //   console.log("Inside Product Service")
  // }

  // getProductDetails() {
  //   return [
  //     { name: "Samsung", price: 2000 },
  //     { name: "Apple", price: 1970 },
  //     { name: "Redmi", price: 1000 },
  //   ]
  // }

  // constructor(private http: HttpClient) {
  // }
  // getData() {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   return this.http.get(url)
  // }


  constructor(private http: HttpClient) { }

  //Get Data

  getData(): Observable<User[]> {
    const url = "http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }


  //Post Data

  postData(incomingData: User): Observable<User> {
    const url = "http://localhost:3000/users";
    return this.http.post<User>(url, incomingData);
  }


  //Delete data

  deleteData(id: string): Observable<User[]> {
    const url = "http://localhost:3000/users";
    return this.http.delete<User[]>(`${url}/${id}`)
  }


  //Get Selected User

  getSelectedUser(id: string): Observable<User> {
    const url = "http://localhost:3000/users"
    return this.http.get<User>(`${url}/${id}`)
  }


  //Update User

  updateUser(user: User): Observable<User> {
    const url = "http://localhost:3000/users"
    return this.http.put<User>(`${url}/${user.id}`, user)
  }
}

