
import { Edit } from "lucide-react";

const budgetCategories = [
  { name: "Groceries", spent: 150, budget: 500, color: "bg-green-500" },
  { name: "Utilities", spent: 120, budget: 200, color: "bg-blue-500" },
  { name: "Transport", spent: 60, budget: 150, color: "bg-purple-500" },
  { name: "Entertainment", spent: 85, budget: 200, color: "bg-pink-500" },
];

export function BudgetSnapshot() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/50 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Budget Flows Snapshot</h3>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <Edit className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {budgetCategories.map((category) => {
          const percentage = (category.spent / category.budget) * 100;
          return (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{category.name}</span>
                <span className="text-slate-600">
                  ${category.spent} / ${category.budget}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full ${category.color} rounded-full transition-all duration-300`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              <div className="text-xs text-slate-500">
                {percentage.toFixed(1)}% of budget used
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
