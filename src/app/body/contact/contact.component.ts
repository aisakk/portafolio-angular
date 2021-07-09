import { Component, OnInit, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  load: boolean = false;
  success: boolean = false;
  error: boolean = false;
  send:boolean = true;

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
  }
  

  sendMessage(){
    let url = `http://localhost:80/portfolio/contacto.php`
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let json = {
      name: this.name,
      email: this.email,
      title: this.title,
      message: this.message
    }
    this.load = true
    this.http.post(url, JSON.stringify(json), {headers}).subscribe(
      (data) => {
        console.log(data);
     },
    response => {

        if(response.status <= 299 && response.status >= 200){
          setTimeout(()=>{
            this.load = false
            this.success = true 
          }, 2000);
          setTimeout(()=>{
            this.success = false
          }, 4000)
        
        }else{
          this.load = true
          setTimeout(()=>{
            this.error = true
            this.load = false
          }, 3000)
          setTimeout(()=>{
            this.error = false
          }, 4000)
        }
    })
  }

  sendDisabled(){
    if(this.name != '' && this.email != '' && this.title != '' && this.message != ''){
     return this.send = false
    }else{
      return this.send = true
    }
  }

}
