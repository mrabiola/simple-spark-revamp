
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

const incomeExpensesData = [
  { month: "Dec 2024", income: 0, expenses: 0, savings: 0 },
  { month: "Jan 2025", income: 0, expenses: 0, savings: 0 },
  { month: "Feb 2025", income: 0, expenses: 0, savings: 0 },
  { month: "Mar 2025", income: 0, expenses: 0, savings: 0 },
  { month: "Apr 2025", income: 0, expenses: 0, savings: 0 },
  { month: "May 2025", income: 5000, expenses: 415, savings: 4585 },
];

const spendingCategoryData = [
  { category: "Groceries", amount: 150 },
  { category: "Utilities", amount: 120 },
  { category: "Transport", amount: 60 },
  { category: "Entertainment", amount: 85 },
  { category: "Savings", amount: 0 },
];

const monthlyData = [
  { month: "Dec 2024", income: "$0.00", expenses: "$0.00", netSavings: "$0.00" },
  { month: "Jan 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00" },
  { month: "Feb 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00" },
  { month: "Mar 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00" },
  { month: "Apr 2025", income: "$0.00", expenses: "$0.00", netSavings: "$0.00" },
  { month: "May 2025", income: "$5000.00", expenses: "$415.00", netSavings: "$4585.00" },
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

export default function Reports() {
  return (
    <AppLayout>
      <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
            <p className="text-slate-600 mt-1">Comprehensive financial analytics and insights</p>
          </div>
        </div>

        {/* Income vs Expenses Chart */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-slate-800">Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incomeExpensesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#64748b"
                    fontSize={12}
                    tickMargin={10}
                  />
                  <YAxis 
                    stroke="#64748b"
                    fontSize={12}
                    tickMargin={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="income" 
                    stroke="var(--color-income)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-income)", strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="var(--color-expenses)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-expenses)", strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="savings" 
                    stroke="var(--color-savings)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-savings)", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Spending by Category Chart */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-slate-800">Spending by Category (Current Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendingCategoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="category" 
                    stroke="#64748b"
                    fontSize={12}
                    tickMargin={10}
                  />
                  <YAxis 
                    stroke="#64748b"
                    fontSize={12}
                    tickMargin={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="amount" 
                    fill="hsl(262, 83%, 58%)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Monthly Summary Table */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-slate-800">Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200">
                  <TableHead className="font-semibold text-slate-700">Month</TableHead>
                  <TableHead className="font-semibold text-slate-700">Income</TableHead>
                  <TableHead className="font-semibold text-slate-700">Expenses</TableHead>
                  <TableHead className="font-semibold text-slate-700">Net Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyData.map((row, index) => (
                  <TableRow key={index} className="border-slate-200 hover:bg-slate-50">
                    <TableCell className="font-medium text-slate-900">{row.month}</TableCell>
                    <TableCell className="text-green-600 font-medium">{row.income}</TableCell>
                    <TableCell className="text-red-600 font-medium">{row.expenses}</TableCell>
                    <TableCell className="text-blue-600 font-medium">{row.netSavings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
