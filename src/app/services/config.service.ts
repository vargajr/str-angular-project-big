import { Injectable } from '@angular/core';

export enum TableCellType {
  Number = 'number',
  String = 'string',
  Textarea = 'textarea',
  Check = 'check',
  Select = 'select',
  Input = 'input',
}

export interface ITableCol {
  key: string;
  title: string;
  type: TableCellType;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string = 'http://localhost:3000';

  tableColsAddressList: ITableCol[] = [
    {key: 'zip', title: 'ZIP Code', type: TableCellType.Input},
    {key: 'country', title: 'Country', type: TableCellType.Input},
    {key: 'city', title: 'City', type: TableCellType.Input},
    {key: 'street', title: 'Steet address', type: TableCellType.Textarea},
    {key: 'notes', title: 'Notes', type: TableCellType.Textarea},
  ];

  tableColsBillList: ITableCol[] = [
    {key: 'id', title: '#', type: TableCellType.Number},
    {key: 'orderID', title: 'Order ID', type: TableCellType.Number},
    {key: 'amount', title: 'Amount', type: TableCellType.Number},
    {key: 'status', title: 'Status', type: TableCellType.Select},
  ];

  tableColsCategoryList: ITableCol[] = [
    {key: 'id', title: '#', type: TableCellType.Number},
    {key: 'name', title: 'Category name', type: TableCellType.Input},
    {key: 'description', title: 'Category description', type: TableCellType.Textarea},
  ];

  tableColsCustomerList: ITableCol[] = [
    {key: 'id', title: '#', type: TableCellType.Number},
    {key: 'firstName', title: 'First name', type: TableCellType.Input},
    {key: 'lastName', title: 'Last name', type: TableCellType.Input},
    {key: 'email', title: 'E-mail address', type: TableCellType.Input},
    {key: 'active', title: 'Active', type: TableCellType.Check},
  ];

  tableColsOrderList: ITableCol[] = [
    {key: 'id', title: '#', type: TableCellType.Number},
    {key: 'customerID', title: 'Customer ID', type: TableCellType.Number},
    {key: 'productID', title: 'Product ID', type: TableCellType.Number},
    {key: 'amount', title: 'Order amount', type: TableCellType.Number},
    {key: 'status', title: 'Status', type: TableCellType.Select},
  ];

  tableColsProductList: ITableCol[] = [
    {key: 'id', title: '#', type: TableCellType.Number},
    {key: 'name', title: 'Product name', type: TableCellType.Input},
    {key: 'type', title: 'Product type', type: TableCellType.Input},
    {key: 'catID', title: 'Category ID', type: TableCellType.Number},
    {key: 'description', title: 'Description', type: TableCellType.Textarea},
    {key: 'price', title: 'Price', type: TableCellType.Number},
    {key: 'featured', title: 'Featured', type: TableCellType.Check},
    {key: 'active', title: 'Active', type: TableCellType.Check},
  ]

  constructor() { }
}
