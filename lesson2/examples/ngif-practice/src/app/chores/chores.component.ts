import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = [];
  finishedChores = [
    "Complete LaunchCode prep work",
    "Buy groceries",
    "Empty dishwasher",
  ];

  targetImage =
    "https://freeiconshop.com/wp-content/uploads/edd/bullseye-outline.png";

  constructor() {}

  ngOnInit() {}
}
