import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public currency;
  public countries;
  constructor(private route:ActivatedRoute,
    private service:RestserviceService ) { }

  ngOnInit() {
    this.currency = this.route.snapshot.paramMap.get('currency');
    console.log(this.currency);
    this.service.getbycurrency(this.currency).subscribe(
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
