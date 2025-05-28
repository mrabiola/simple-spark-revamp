
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, PieChart as PieChartIcon, BarChart3, Calendar, DollarSign } from "lucide-react";

const incomeExpensesData = [
  { month: "Dec", income: 0, expenses: 0, savings: 0 },
  { month: "Jan", income: 0, expenses: 0, savings: 0 },
  { month: "Feb", income: 0, expenses: 0, savings: 0 },
  { month: "Mar", income: 0, expenses: 0, savings: 0 },
  { month: "Apr", income: 0, expenses: 0, savings: 0 },
  { month: "May", income: 5000, expenses: 415, savings: 4585 },
];

const spendingCategoryData = [
  { category: "Groceries", amount: 150, color: "hsl(262, 83%, 58%)" },
  { category: "Utilities", amount: 120, color: "hsl(221, 83%, 53%)" },
  { category: "Transport", amount: 60, color: "hsl(142, 76%, 36%)" },
  { category: "Entertainment", amount: 85, color: "hsl(271, 91%, 65%)" },
  { category: "Health", amount: 45, color: "hsl(12, 76%, 61%)" },
];

const monthlyData = [
  { month: "Dec 2024", income: "$0.00", expenses: "$0.00", netSavings: "$0.00", status: "neutral" },
  { month: "Jan 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00", status: "neutral" },
  { month: "Feb 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00", status: "neutral" },
  { month: "Mar 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00", status: "neutral" },
  { month: "Apr 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00", status: "neutral" },
  { month: "May 2025", income: "$5,000.00", expenses: "$415.00", netSavings: "$4,585.00", status: "positive" },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(142, 76%, 36%)",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(0, 84%, 60%)",
  },
  savings: {
    label: "Savings",
    color: "hsl(217, 91%, 60%)",
  },
};

const quickStats = [
  {
    title: "Total Income",
    value: "$5,000",
    change: "+100%",
    icon: DollarSign,
    trend: "up",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Total Expenses",
    value: "$415",
    change: "+8.3%",
    icon: TrendingUp,
    trend: "up",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Net Savings",
    value: "$4,585",
    change: "+91.7%",
    icon: PieChartIcon,
    trend: "up",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

export default function Reports() {
  return (
    <AppLayout>
      <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 min-h-screen">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Financial Reports
            </h1>
            <p className="text-slate-600 text-lg">Comprehensive analytics and insights for your financial journey</p>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <Calendar className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">May 2025</span>
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
                      {stat.change} from last month
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
          {/* Income vs Expenses Chart */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-800">Income vs Expenses</CardTitle>
                  <p className="text-sm text-slate-600 mt-1">Monthly financial flow overview</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={incomeExpensesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
                      dataKey="income" 
                      stroke="var(--color-income)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-income)", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "var(--color-income)", strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="var(--color-expenses)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-expenses)", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "var(--color-expenses)", strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="savings" 
                      stroke="var(--color-savings)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-savings)", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "var(--color-savings)", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Spending by Category Chart */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <PieChartIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-800">Spending Categories</CardTitle>
                  <p className="text-sm text-slate-600 mt-1">Current month breakdown</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={spendingCategoryData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                    <XAxis 
                      dataKey="category" 
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
                    <Bar 
                      dataKey="amount" 
                      fill="url(#colorGradient)"
                      radius={[8, 8, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(262, 83%, 58%)" />
                        <stop offset="100%" stopColor="hsl(262, 83%, 45%)" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Summary Table */}
        <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold text-slate-800">Monthly Summary</CardTitle>
                <p className="text-sm text-slate-600 mt-1">Detailed monthly financial overview</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
                    <TableHead className="font-semibold text-slate-700 py-4">Month</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Income</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Expenses</TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4">Net Savings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyData.map((row, index) => (
                    <TableRow 
                      key={index} 
                      className={`border-slate-200 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 ${
                        row.status === 'positive' ? 'bg-gradient-to-r from-emerald-50/30 to-blue-50/30' : ''
                      }`}
                    >
                      <TableCell className="font-medium text-slate-900 py-4">{row.month}</TableCell>
                      <TableCell className="text-emerald-600 font-semibold py-4">{row.income}</TableCell>
                      <TableCell className="text-red-500 font-semibold py-4">{row.expenses}</TableCell>
                      <TableCell className="text-blue-600 font-semibold py-4">{row.netSavings}</TableCell>
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
