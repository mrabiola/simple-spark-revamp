
import { TrendingUp, DollarSign, PiggyBank, Wallet } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { BudgetSnapshot } from "@/components/dashboard/BudgetSnapshot";
import { GoalProgress } from "@/components/dashboard/GoalProgress";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome back! Here's your financial overview.</p>
          </div>
          <div className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Income"
            value="$5,000.00"
            icon={TrendingUp}
            trend={{ value: "12.5%", isPositive: true }}
            gradient="bg-gradient-to-r from-green-500 to-emerald-600"
          />
          <StatsCard
            title="Total Expenses"
            value="$415.00"
            icon={DollarSign}
            trend={{ value: "8.2%", isPositive: false }}
            gradient="bg-gradient-to-r from-red-500 to-pink-600"
          />
          <StatsCard
            title="Net Savings"
            value="$4,585.00"
            icon={PiggyBank}
            trend={{ value: "15.7%", isPositive: true }}
            gradient="bg-gradient-to-r from-blue-500 to-purple-600"
          />
          <StatsCard
            title="Available Budget"
            value="$3,200.00"
            icon={Wallet}
            gradient="bg-gradient-to-r from-orange-500 to-yellow-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <BudgetSnapshot />
            <GoalProgress />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
