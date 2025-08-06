import axios, { AxiosError } from "axios";

export class ApiService {
  get(url) {
    return this.wrapper1(axios.get, url)();
  }

  post(url, payload) {
    return this.wrapper2(axios.post, url, payload)();
  }

  put(url, payload) {
    return this.wrapper2(axios.put, url, payload)();
  }

  delete(url) {
    return this.wrapper1(axios.delete, url)();
  }

  /* Функция для запросов без тела: GET, DELETE */
  wrapper1(method, url) {
    return async () => {
      try {
        const response = await method(url);
        return {
          __state: "success",
          ...response,
        };
      } catch (e) {
        return {
          __state: "error",
          data: this.getError(e),
        };
      }
    };
  }

  /* Функция для запросов с телом: POST, PUT */
  wrapper2(method, url, payload) {
    return async () => {
      try {
        const response = await method(url, payload);
        return {
          __state: "success",
          ...response,
        };
      } catch (e) {
        return {
          __state: "error",
          data: this.getError(e),
        };
      }
    };
  }

  getError(e) {
    if (e instanceof AxiosError) {
      /* Возвращаем ошибку, содержащую сообщение об ошибке и ответ сервера */
      /* Если имеем дело с ошибкой Axios, пытаемся получить сообщение, которое отправил бэкенд */
      return new ApiError(
        e.response.data?.error?.message ?? e.message,
        e.response,
      );
    } else {
      /* Возвращаем ошибку, содержащую сообщение об ошибке и ответ сервера */
      return new ApiError(e.message, e.response);
    }
  }
}

class ApiError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}
