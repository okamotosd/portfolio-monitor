// Portfolio related types
export interface Portfolio {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  totalValue: number;
  dayChange: number;
  dayChangePercent: number;
}

export interface Holding {
  id: string;
  portfolioId: string;
  symbol: string;
  name: string;
  shares: number;
  averageCost: number;
  currentPrice: number;
  marketValue: number;
  dayChange: number;
  dayChangePercent: number;
  totalReturn: number;
  totalReturnPercent: number;
}

export interface ImportData {
  portfolioName: string;
  holdings: {
    symbol: string;
    name: string;
    shares: number;
    averageCost: number;
  }[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PriceData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: Date;
}