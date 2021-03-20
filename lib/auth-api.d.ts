export function useLogin(): { isLogin: boolean; login: (name: string, password: string) => void };
export function useRegister(): {
  isRegister: boolean;
  error: string;
  register: (name: string, password: string, email: string) => void;
};
