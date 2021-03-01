import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categoryList$: Observable<Category[]> = this.categoryService.categoryList$;
  length$: Observable<number> = this.categoryService.dataLength$;

  constructor(
    private categoryService: CategoryService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll()
  }

}
