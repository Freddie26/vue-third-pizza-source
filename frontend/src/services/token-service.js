const ID_TOKEN_KEY = "token";

class TokenService {
  get() {
    return localStorage.getItem(ID_TOKEN_KEY);
  }

  save(token) {
    localStorage.setItem(ID_TOKEN_KEY, token);
  }

  remove() {
    localStorage.removeItem(ID_TOKEN_KEY);
  }
}

export const tokenService = new TokenService();
