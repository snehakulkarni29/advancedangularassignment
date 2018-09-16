import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../restservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
public country;
public country_details;
  constructor(private service : RestserviceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.country = this.route.snapshot.paramMap.get('country');
    console.log(this.country);
    this.service.getbycountry(this.country).subscribe(
      data => {
        this.country_details = data;
        console.log("this.country_details => ");
        console.log(this.country_details);        
      },
      error => {
          console.log("Error extracting json");
      }
    )
  }

}
