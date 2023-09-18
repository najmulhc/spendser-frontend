export interface IconProps {
  width: number;
  height: number;
  className?: string;
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
  username: string;
  email: string;
}

export interface Account {
  balence: number;
  deposit: number;
  withdraw: number;
}

export interface PostTransactionType {
  token: string;
  amount: number | string;
  type: "add" | "spend";
}
