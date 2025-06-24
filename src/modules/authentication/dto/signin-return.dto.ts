
export class SignInReturnDto {
  success: boolean;
  message: string;
  token?: string; // Optional, if you want to return a JWT token or similar
  user?: string;
}