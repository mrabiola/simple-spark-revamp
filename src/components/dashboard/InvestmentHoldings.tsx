
import { TrendingUp, TrendingDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const investmentHoldings = [
  { symbol: "AAPL", name: "Apple Inc.", shares: 25, currentPrice: 185.50, value: 4637.50, gain: 12.5, status: "positive" },
  { symbol: "MSFT", name: "Microsoft Corp.", shares: 15, currentPrice: 340.20, value: 5103.00, gain: 8.3, status: "positive" },
  { symbol: "GOOGL", name: "Alphabet Inc.", shares: 8, currentPrice: 138.75, value: 1110.00, gain: -2.1, status: "negative" },
  { symbol: "TSLA", name: "Tesla Inc.", shares: 12, currentPrice: 245.80, value: 2949.60, gain: 15.7, status: "positive" },
  { symbol: "BTC", name: "Bitcoin", shares: 0.5, currentPrice: 43500, value: 21750.00, gain: 22.3, status: "positive" },
];

export function InvestmentHoldings() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Investment Holdings</h3>
          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
            <Eye className="w-4 h-4 mr-2" />
            View All
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Shares</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Gain/Loss</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {investmentHoldings.map((holding, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-slate-900">{holding.symbol}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-slate-900">{holding.name}</div>
                  <div className="text-xs text-slate-500">{holding.shares} shares</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {holding.shares}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm font-semibold text-slate-900">
                    ${holding.value.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">
                    ${holding.currentPrice.toFixed(2)}/share
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className={`inline-flex items-center text-sm font-semibold ${
                    holding.status === 'positive' ? 'text-emerald-600' : 'text-red-500'
                  }`}>
                    {holding.status === 'positive' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {holding.gain > 0 ? '+' : ''}{holding.gain}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
