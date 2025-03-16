import { Suit } from "./suit";

export interface PagedSuits {
    content: Suit[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
}