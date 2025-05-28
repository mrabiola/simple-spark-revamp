
import { Plus, Edit } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";

const budgetCategories = [
  { 
    name: "Groceries", 
    planned: 500, 
    spent: 150, 
    remaining: 350, 
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-700"
  },
  { 
    name: "Utilities", 
    planned: 200, 
    spent: 120, 
    remaining: 80, 
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700"
  },
  { 
    name: "Transport", 
    planned: 150, 
    spent: 60, 
    remaining: 90, 
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700"
  },
  { 
    name: "Entertainment", 
    planned: 200, 
    spent: 85, 
    remaining: 115, 
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-700"
  },
  { 
    name: "Savings", 
    planned: 1000, 
    spent: 0, 
    remaining: 1000, 
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700"
  },
];

export default function BudgetFlows() {
  return (
    <AppLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Budget Flows</h1>
            <p className="text-slate-600 mt-1">Track your spending across categories</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Budget Categories */}
        <div className="space-y-6">
          {budgetCategories.map((category) => {
            const percentage = (category.spent / category.planned) * 100;
            const isOverBudget = percentage > 100;
            
            return (
              <div key={category.name} className="bg-white rounded-2xl border border-slate-200/50 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className={`rounded-xl p-4 ${category.lightColor}`}>
                    <p className="text-sm font-medium text-slate-600 mb-1">Planned</p>
                    <p className={`text-2xl font-bold ${category.textColor}`}>
                      ${category.planned.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-xl p-4 bg-slate-50">
                    <p className="text-sm font-medium text-slate-600 mb-1">Spent</p>
                    <p className="text-2xl font-bold text-slate-900">
                      ${category.spent.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-xl p-4 bg-slate-50">
                    <p className="text-sm font-medium text-slate-600 mb-1">Remaining</p>
                    <p className={`text-2xl font-bold ${
                      isOverBudget ? 'text-red-600' : 'text-green-600'
                    }`}>
                      ${category.remaining.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">Progress</span>
                    <span className={`font-semibold ${
                      isOverBudget ? 'text-red-600' : category.textColor
                    }`}>
                      {percentage.toFixed(1)}% of budget used
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isOverBudget ? 'bg-red-500' : category.color
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  {isOverBudget && (
                    <p className="text-sm text-red-600 font-medium">
                      ⚠️ Over budget by ${(category.spent - category.planned).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
