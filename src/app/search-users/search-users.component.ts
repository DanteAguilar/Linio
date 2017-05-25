import { Component, OnInit, Input } from '@angular/core';
import { SearchUsersService } from '../search-users.service';
 
@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  user: string;
  results: any[] = [];
  selected: boolean = false; 
  selectedUser: any; 
  error_text: string = ""; 
 
  constructor(private searchService: SearchUsersService) {}
  ngOnInit() {}
 
search(user: string) {
    this.selected = false;
    this.error_text = "";
    this.user = user;
    this.searchService.getUsersByName(user).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Lo siento, este usuario no existe.";
          console.error(error);
        }
      )
  }

getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      details => {
        this.selectedUser = details;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
}

}