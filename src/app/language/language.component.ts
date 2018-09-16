import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  public language;
  public countries;
  constructor(private route:ActivatedRoute,
    private service:RestserviceService) { }

  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get('language');
    console.log(this.language);
    this.service.getbylanguage(this.language).subscribe(
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
