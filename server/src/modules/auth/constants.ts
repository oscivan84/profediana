
export const jwtOptions = {
  expiresIn: '60s',
};

export interface jwtAuthInput {
  username: string
  password: string
}