import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
id=""
readValues=()=>
{
  let data:any={"id":this.id}
  console.log(data)
}  

}
