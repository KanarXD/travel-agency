import {DataGridRowConfig} from "../../data-grid/data-grid.models";

export interface Item {
  id: number;
  name: string;

  [key: string]: any;
}

export interface PagePrivileges {
  read?: string;
  update?: string;
  delete?: string;
}

export class PageComponentPattern<T extends string> {
  dataGridConfig!: DataGridRowConfig<T>[];
  pagePrivileges!: PagePrivileges;
}
