import { Component } from '@angular/core';
import { Weather1Service } from '../weather1.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {
//  data:any[]=[];
// myWeather:any;
cityName = 'mumbai';
units = 'imperial';

data ={
  temp:'',
  feels_like:'',
  pressure:'',
  humidity:'',
  city:'',
  main:'',
  imageURL:''
}

constructor(private weatherService:Weather1Service){}
ngOnInit(): void {
    this.loadData();
}

loadData(){
     if(this.cityName){
         this.weatherService.fetchData(this.cityName,this.units).subscribe({
             next:(data : any)=>{
                 console.log(data);
                 this.data.temp = data.main.temp;
                 this.data.feels_like = data.main.feels_like;
                 this.data.pressure = data.main.pressure;
                 this.data.humidity = data.main.humidity;
                 this.data.city= data.name;

                 this.data.imageURL=data.weather[0].icon;
                 this.data.main=data.weather[0].main;


             },
             error:(err)=>{
                 console.log('error in fetching data');
             },
         });
     }
    // this.http.get('URL').subscribe((data:any)=>{
    //   console.log(data);
    //   this.data=data;

    // })
}

}
