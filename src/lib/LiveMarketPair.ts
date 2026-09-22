import { LiveMarketPair } from "@/types";

export const PAIRS_TO_FETCH: Pick<LiveMarketPair, 'id' | 'symbol' | 'base' | 'quote'>[] = [
  { id: "usd-idr", symbol: "USD/IDR", base: "USD", quote: "IDR" },
  { id: "eur-idr", symbol: "EUR/IDR", base: "EUR", quote: "IDR" },
  { id: "sgd-idr", symbol: "SGD/IDR", base: "SGD", quote: "IDR" },
  { id: "jpy-idr", symbol: "JPY/IDR", base: "JPY", quote: "IDR" },
  { id: "gbp-idr", symbol: "GBP/IDR", base: "GBP", quote: "IDR" },
  { id: "aud-idr", symbol: "AUD/IDR", base: "AUD", quote: "IDR" },
  { id: "myr-idr", symbol: "MYR/IDR", base: "MYR", quote: "IDR" },
  { id: "cny-idr", symbol: "CNY/IDR", base: "CNY", quote: "IDR" },
  { id: "sar-idr", symbol: "SAR/IDR", base: "SAR", quote: "IDR" },
];