import { TMovie } from "./TMovie";

export type TTMDBApiResponse = {
    page: number,
    results: TMovie[],
}