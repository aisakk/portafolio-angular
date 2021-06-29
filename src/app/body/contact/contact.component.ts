import { Component, OnInit, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  title: string = '';
  message: string = '';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  sendMessage(){
    let url = 'localhost:8080/contact.php'
    let formData = new FormData();
    formData.append('name', this.name)
    formData.append('email', this.email)
    formData.append('title', this.title)
    formData.append('message', this.message)
    this.http.post(url, formData).toPromise().then((data:any) =>console.log(data))
  }

}
