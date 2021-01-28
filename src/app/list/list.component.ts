import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from "../httpservice.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  chars: any[];
  status: string;

  constructor(
    private _http: HttpserviceService
  ) { }

  ngOnInit(): void {
    this._http.getChars().subscribe(data => {
      this.chars = data['results'];
      console.log(this.chars)
    });

  }

}
