export interface UserType {
  name: string;
  address: {
    streetName: string;
    houseNumber: number;
    city: string;
    stateOrProvince: string;
  };
  phoneNumber: string;
  email: string;
}
