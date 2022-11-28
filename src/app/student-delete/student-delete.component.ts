import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {

  id=""
readValues=()=>
{
  let data:any={"id":this.id}
  console.log(data)
}  

}
