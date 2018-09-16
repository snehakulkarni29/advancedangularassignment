import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../restservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  public region;
  public countries;
  constructor(private service : RestserviceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.region = this.route.snapshot.paramMap.get('region');
    console.log(this.region);
    this.service.getbyregion(this.region).subscribe(
      data => {
        this.countries = data;
        console.log("this.countries => ");
        console.log(this.countries);        
      },
      error => {
          console.log("Error extracting json");
      }
    )
  }

}
