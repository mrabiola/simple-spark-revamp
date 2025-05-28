
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, PieChart as PieChartIcon, BarChart3, Plus, Eye, Calendar } from "lucide-react";

const netWorthData = [
  { month: "Dec", netWorth: 15000, investments: 8000, cash: 7000 },
  { month: "Jan", netWorth: 16200, investments: 8800, cash: 7400 },
  { month: "Feb", netWorth: 17500, investments: 9500, cash: 8000 },
  { month: "Mar", netWorth: 18200, investments: 10200, cash: 8000 },
  { month: "Apr", netWorth: 19800, investments: 11300, cash: 8500 },
  { month: "May", netWorth: 24385, investments: 15800, cash: 8585 },
];

const portfolioData = [
  { name: "Stocks", value: 8500, color: "hsl(262, 83%, 58%)", percentage: 53.8 },
  { name: "Bonds", value: 3200, color: "hsl(221, 83%, 53%)", percentage: 20.3 },
  { name: "ETFs", value: 2600, color: "hsl(142, 76%, 36%)", percentage: 16.5 },
  { name: "Crypto", value: 1500, color: "hsl(271, 91%, 65%)", percentage: 9.5 },
];

const investmentHoldings = [
  { symbol: "AAPL", name: "Apple Inc.", shares: 25, currentPrice: 185.50, value: 4637.50, gain: 12.5, status: "positive" },
  { symbol: "MSFT", name: "Microsoft Corp.", shares: 15, currentPrice: 340.20, value: 5103.00, gain: 8.3, status: "positive" },
  { symbol: "GOOGL", name: "Alphabet Inc.", shares: 8, currentPrice: 138.75, value: 1110.00, gain: -2.1, status: "negative" },
  { symbol: "TSLA", name: "Tesla Inc.", shares: 12, currentPrice: 245.80, value: 2949.60, gain: 15.7, status: "positive" },
  { symbol: "BTC", name: "Bitcoin", shares: 0.5, currentPrice: 43500, value: 21750.00, gain: 22.3, status: "positive" },
];

const chartConfig = {
  netWorth: {
    label: "Net Worth",
    color: "hsl(217, 91%, 60%)",
  },
  investments: {
    label: "Investments",
    color: "hsl(262, 83%, 58%)",
  },
  cash: {
    label: "Cash",
    color: "hsl(142, 76%, 36%)",
  },
};

const quickStats = [
  {
    title: "Total Portfolio",
    value: "$15,800",
    change: "+18.2%",
    icon: DollarSign,
    trend: "up",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Today's Gain/Loss",
    value: "+$342.50",
    change: "+2.2%",
    icon: TrendingUp,
    trend: "up",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Total Return",
    value: "+$2,850",
    change: "+22.0%",
    icon: BarChart3,
    trend: "up",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

export default function Investments() {
  return (
    <AppLayout>
      <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 min-h-screen">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
              Investment Portfolio
            </h1>
            <p className="text-slate-600 text-lg">Track your investments and monitor portfolio performance</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Add Investment</span>
            </button>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
              <Calendar className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">May 2025</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className={`text-sm font-medium ${stat.color} flex items-center mt-2`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change} from yesterday
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Net Worth Over Time Chart */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-800">Net Worth Growth</CardTitle>
                  <p className="text-sm text-slate-600 mt-1">Portfolio performance over time</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={netWorthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#64748b"
                      fontSize={12}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#64748b"
                      fontSize={12}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="netWorth" 
                      stroke="var(--color-netWorth)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-netWorth)", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "var(--color-netWorth)", strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="investments" 
                      stroke="var(--color-investments)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-investments)", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "var(--color-investments)", strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="cash" 
                      stroke="var(--color-cash)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-cash)", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "var(--color-cash)", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Portfolio Allocation Chart */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <PieChartIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-800">Portfolio Allocation</CardTitle>
                  <p className="text-sm text-slate-600 mt-1">Asset distribution breakdown</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percentage }) => `${name} ${percentage}%`}
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Holdings Table */}
        <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-4 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-800">Holdings</CardTitle>
                  <p className="text-sm text-slate-600 mt-1">Your current investment positions</p>
                </div>
              </div>
              <button className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                View All
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
                    <TableHead className="font-semibold text-slate-700 py-4">Symbol</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Company</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Shares</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Price</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Value</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Gain/Loss</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investmentHoldings.map((holding, index) => (
                    <TableRow 
                      key={index} 
                      className="border-slate-200 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200"
                    >
                      <TableCell className="font-bold text-slate-900 py-4">{holding.symbol}</TableCell>
                      <TableCell className="text-slate-700 py-4">{holding.name}</TableCell>
                      <TableCell className="text-slate-700 py-4">{holding.shares}</TableCell>
                      <TableCell className="text-slate-700 py-4">${holding.currentPrice.toFixed(2)}</TableCell>
                      <TableCell className="font-semibold text-slate-900 py-4">${holding.value.toLocaleString()}</TableCell>
                      <TableCell className={`font-semibold py-4 flex items-center ${
                        holding.status === 'positive' ? 'text-emerald-600' : 'text-red-500'
                      }`}>
                        {holding.status === 'positive' ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {holding.gain > 0 ? '+' : ''}{holding.gain}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
