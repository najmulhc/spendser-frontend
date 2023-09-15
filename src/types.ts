export interface IconProps {
  width: number;
  height: number;
  color?: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

export type RegisterInfo = {
  username: string;
  email: string;
  password: string;
};


export interface User {
  username: string, 
  email:string,
}