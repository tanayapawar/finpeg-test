import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-fund',
  templateUrl: './card-fund.component.html',
  styleUrls: ['./card-fund.component.scss']
})
export class CardFundComponent implements OnInit {
  products: any = [];
  funds:any =[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/funds.json").subscribe(data => {
       this.products = data;
        this.funds = this.products.result.funds.slice(0 ,30);
       console.log(this.funds)
     
    
    //   this.products = data;
    //  // this.products = this.products.slice(0, 20);
    //   console.log(data);
    })
    
  }

}
