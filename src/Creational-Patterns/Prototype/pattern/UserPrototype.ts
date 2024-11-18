export enum Role {
  VIEWER = 'VIEWER',
  EDITOR = 'EDITOR',
  ADMIN = 'ADMIN',
}

export interface User {
  name: string;
  role: Role;
}

export class UserPrototype {
  name: string;
  role: Role;

  constructor(name: string = 'Unknown User', role: Role = Role.VIEWER) {
    this.name = name;
    this.role = role;
  }

  clone(): User {
    return new UserPrototype(this.name, this.role);
  }
}