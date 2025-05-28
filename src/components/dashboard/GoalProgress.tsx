
import { Target, TrendingUp } from "lucide-react";

export function GoalProgress() {
  const emergencyFundProgress = 35;
  const emergencyFundSaved = 3500;
  const emergencyFundTarget = 10000;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/50 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Top Goal Progress</h3>
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Target className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-slate-900">Emergency Fund</h4>
          <span className="text-sm font-medium text-blue-600">{emergencyFundProgress}%</span>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${emergencyFundProgress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">
            ${emergencyFundSaved.toLocaleString()} saved
          </span>
          <span className="text-slate-600">
            ${emergencyFundTarget.toLocaleString()} target
          </span>
        </div>

        <div className="flex items-center space-x-2 mt-4 p-3 bg-green-50 rounded-lg">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm text-green-700">
            On track to reach goal by December 2025
          </span>
        </div>
      </div>
    </div>
  );
}
