import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Favorite Photos";
  image1 =
    "https://www.akc.org/wp-content/uploads/2017/11/Labrador-Retriever-MP-500x486.jpg";
  image2 =
    "https://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg";
  image3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4YXHU5CzMxbh3ZV4tyNJ2UqcD5wxmObunw&usqp=CAU";

  constructor() {}

  ngOnInit() {}
}
