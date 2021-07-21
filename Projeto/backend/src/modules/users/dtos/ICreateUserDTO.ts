interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  isAdmin?: boolean;
  id?: string;
}

export { ICreateUserDTO };
