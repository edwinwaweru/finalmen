import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {



  constructor(private router: Router) {

  }

  pdfs() {
    this.router.navigate(['/pdfs']);
  }
  audio() {
    this.router.navigate(['/audio']);
  }
  videomedia() {
    this.router.navigate(['/videomedia']);
  }
  blogs() {
    this.router.navigate(['/blogs']);
  }
  ngOnInit() {
  }

}
