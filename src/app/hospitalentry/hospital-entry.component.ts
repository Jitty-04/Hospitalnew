import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-entry',
  templateUrl: './hospital-entry.component.html',
  styleUrls: ['./hospital-entry.component.css']
})
export class HospitalEntryComponent {
  name=""
  address=""
  mobileNumber=""
  dateOfAppointment=""
  image=""
  doctorsName=""
readValues=()=>
{
  let data:any={"name":this.name,"address":this.address,"mobileNumber":this.mobileNumber,"dateOfAppointment":this.dateOfAppointment,"image":this.image,"doctorsName":this.doctorsName}
console.log(data)
}

}
