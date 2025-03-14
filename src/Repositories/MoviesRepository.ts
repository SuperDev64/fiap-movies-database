import { TMovie } from "../Types/TMovie";
import { TTMDBApiResponse } from "../Types/TTMDBApiResponse";

export class MoviesRepository {
  private baseUrl = "https://api.themoviedb.org/3";
  private authToken = process.env.TMDB_API_TOKEN ?? "";

  async request<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, options);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  getRequestHeaders() {
    return {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.authToken}`,
      },
    } as RequestInit;
  }

  async getMovie(id: string | number) {
    const movies = await this.request<TMovie>(
      `/movie/${id}?language=pt-BR`,
      this.getRequestHeaders()
    );

    return movies;
  }

  async searchMovie(query: string) {
    const movies = await this.request<TTMDBApiResponse>(
      `/search/movie?query=${query}&language=pt-BR`,
      this.getRequestHeaders()
    );

    return movies;
  }

  async getFeaturedMovies() {
    const movies = await this.request<TTMDBApiResponse>(
      `/movie/popular?language=pt-BR`,
      this.getRequestHeaders()
    );

    return movies;
  }

  async getTopRatedMovies() {
    const movies = await this.request<TTMDBApiResponse>(
      `/movie/top_rated?language=pt-BR`,
      this.getRequestHeaders()
    );

    return movies;
  }
}
