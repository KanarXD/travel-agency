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
