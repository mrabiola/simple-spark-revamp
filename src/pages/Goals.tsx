
import { Plus, Target, Calendar } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    saved: 3500,
    target: 10000,
    targetDate: "12/30/2025",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700"
  },
  {
    id: 2,
    name: "Vacation to Bali",
    saved: 1200,
    target: 5000,
    targetDate: "6/20/2026",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700"
  }
];

export default function Goals() {
  return (
    <AppLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Financial Goals</h1>
            <p className="text-slate-600 mt-1">Track your progress towards your financial objectives</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Goal
          </Button>
        </div>

        {/* Goals Grid */}
        <div className="space-y-6">
          {goals.map((goal) => {
            const percentage = (goal.saved / goal.target) * 100;
            const remaining = goal.target - goal.saved;
            
            return (
              <div key={goal.id} className="bg-white rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl ${goal.color} flex items-center justify-center`}>
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{goal.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-600">Target date: {goal.targetDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-900">{percentage.toFixed(1)}%</p>
                      <p className="text-sm text-slate-600">complete</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className={`rounded-xl p-4 ${goal.lightColor}`}>
                      <p className="text-sm font-medium text-slate-600 mb-1">Saved</p>
                      <p className={`text-2xl font-bold ${goal.textColor}`}>
                        ${goal.saved.toLocaleString()}
                      </p>
                    </div>
                    <div className="rounded-xl p-4 bg-slate-50">
                      <p className="text-sm font-medium text-slate-600 mb-1">Target</p>
                      <p className="text-2xl font-bold text-slate-900">
                        ${goal.target.toLocaleString()}
                      </p>
                    </div>
                    <div className="rounded-xl p-4 bg-slate-50">
                      <p className="text-sm font-medium text-slate-600 mb-1">Remaining</p>
                      <p className="text-2xl font-bold text-slate-900">
                        ${remaining.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${goal.color} rounded-full transition-all duration-300`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Update Progress
                        </label>
                        <Input 
                          type="number" 
                          placeholder="New amount" 
                          className="border-slate-200 focus:border-blue-500"
                        />
                      </div>
                      <Button 
                        className={`mt-6 ${goal.color} hover:opacity-90`}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
