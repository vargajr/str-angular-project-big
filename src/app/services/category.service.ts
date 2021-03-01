import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../model/category';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  categoryList$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) {
    super(http, config, 'categories');
    this.list$
      .pipe(
        //
      )
      .subscribe(list => this.categoryList$.next(list))
  }

}
