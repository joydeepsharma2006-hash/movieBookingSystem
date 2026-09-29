import apiClient from './axios';
import { User } from '@/types';

interface AuthResponse {
  accessToken: string;
  user: User;
}

export async function loginApi(email: string, password: string): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/auth/login', {
    email,
    password,
  });
  return data;
}

export async function signupApi(
  name: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/auth/signup', {
    name,
    email,
    password,
  });
  return data;
}

export async function getProfileApi(): Promise<User> {
  const { data } = await apiClient.get<User>('/auth/profile');
  return data;
}
