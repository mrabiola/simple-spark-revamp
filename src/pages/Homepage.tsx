
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, PieChart, Target, Wallet, BarChart3 } from "lucide-react";

export default function Homepage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just navigate to dashboard
    navigate("/dashboard");
  };

  const features = [
    {
      icon: BarChart3,
      title: "Track Net Worth",
      description: "Monitor your financial growth over time with detailed analytics"
    },
    {
      icon: PieChart,
      title: "Investment Portfolio",
      description: "Manage and track your investment holdings in one place"
    },
    {
      icon: Target,
      title: "Financial Goals",
      description: "Set and achieve your financial milestones with progress tracking"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is protected with bank-level security"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-slate-900">MoneyMate</h1>
          </div>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-slate-900 leading-tight">
                Take Control of Your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}Financial Future
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                MoneyMate helps you track expenses, manage investments, and achieve your financial goals with powerful analytics and intuitive design.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white/50 border border-slate-200/50">
                  <feature.icon className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">10k+</div>
                <div className="text-sm text-slate-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">$2.5M+</div>
                <div className="text-sm text-slate-600">Assets Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">95%</div>
                <div className="text-sm text-slate-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Sign In Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold text-slate-900">Welcome Back</CardTitle>
                <CardDescription className="text-slate-600">
                  Sign in to access your financial dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                  >
                    Sign In
                  </Button>
                </form>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">Don't have an account?</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() => navigate("/dashboard")}
                >
                  Create Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">Ready to Transform Your Finances?</h3>
            <p className="text-xl text-purple-100">
              Join thousands of users who have taken control of their financial future with MoneyMate.
            </p>
            <div className="flex items-center justify-center space-x-2 pt-4">
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg font-semibold">Start your journey today</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
