"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Users,
  BarChart3,
  LogOut,
  Key,
  ChevronRight,
  CheckCircle,
  XCircle,
  Loader2,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

interface Stats {
  totalUsers: number;
  totalAttempts: number;
  completedAttempts: number;
  passedAttempts: number;
  passRate: number;
  avgScore: number;
  scenarioStats: { scenarioId: number; count: number; avgScore: number }[];
}

interface UserData {
  id: number;
  email: string;
  name: string;
  school: string | null;
  studentId: string | null;
  createdAt: string;
  totalAttempts: number;
  passedCount: number;
}

interface Answer {
  questionId: string;
  questionDisplayId: string | null;
  isCorrect: boolean;
  retryCount: number;
}

interface Attempt {
  id: number;
  scenarioId: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  completedAt: string | null;
  answers: Answer[];
}

interface UserDetail {
  user: UserData;
  attempts: Attempt[];
}

const SCENARIO_NAMES: Record<number, string> = {
  1: "시나리오 1: 심소생",
  2: "시나리오 2: VF/pVT",
  3: "시나리오 3: 팀 심소생",
};

export default function AdminPage() {
  const { user, login, logout, isLoading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState<"stats" | "users" | "password">("stats");

  // 로그인 상태
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // 통계
  const [stats, setStats] = useState<Stats | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);

  // 사용자 목록
  const [users, setUsers] = useState<UserData[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDetail | null>(null);
  const [userDetailLoading, setUserDetailLoading] = useState(false);

  // 비밀번호 변경
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwSuccess, setPwSuccess] = useState("");
  const [pwLoading, setPwLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 관리자 계정 확인
  useEffect(() => {
    if (user) {
      checkAdmin();
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const checkAdmin = async () => {
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        setIsAdmin(true);
        const data = await res.json();
        setStats(data);
      } else {
        setIsAdmin(false);
      }
    } catch {
      setIsAdmin(false);
    }
  };

  // 관리자 초기화
  useEffect(() => {
    fetch("/api/admin/init", { method: "POST" });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "로그인에 실패했습니다.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setIsAdmin(false);
  };

  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setStatsLoading(false);
    }
  };

  const fetchUsers = async () => {
    setUsersLoading(true);
    try {
      const res = await fetch("/api/admin/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setUsersLoading(false);
    }
  };

  const fetchUserDetail = async (userId: number) => {
    setUserDetailLoading(true);
    try {
      const res = await fetch(`/api/admin/users?userId=${userId}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedUser(data);
      }
    } catch (error) {
      console.error("Failed to fetch user detail:", error);
    } finally {
      setUserDetailLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwError("");
    setPwSuccess("");

    if (newPw !== confirmPw) {
      setPwError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    if (newPw.length < 6) {
      setPwError("비밀번호는 6자 이상이어야 합니다.");
      return;
    }

    setPwLoading(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: currentPw, newPassword: newPw }),
      });

      const data = await res.json();
      if (res.ok) {
        setPwSuccess("비밀번호가 변경되었습니다.");
        setCurrentPw("");
        setNewPw("");
        setConfirmPw("");
      } else {
        setPwError(data.error || "비밀번호 변경에 실패했습니다.");
      }
    } catch {
      setPwError("비밀번호 변경 중 오류가 발생했습니다.");
    } finally {
      setPwLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      if (activeTab === "stats") fetchStats();
      else if (activeTab === "users") fetchUsers();
    }
  }, [activeTab, isAdmin]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  // 로그인 폼
  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white">관리자 로그인</h1>
          </div>
          <form onSubmit={handleLogin} className="bg-gray-800 rounded-xl p-6 space-y-4">
            {loginError && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded text-sm">
                {loginError}
              </div>
            )}
            <div>
              <label className="block text-sm text-gray-400 mb-1">아이디</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {loginLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "로그인"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 사용자 상세 보기
  if (selectedUser) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-4">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <button
              onClick={() => setSelectedUser(null)}
              className="p-2 hover:bg-gray-700 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold">{selectedUser.user.name}</h1>
              <p className="text-sm text-gray-400">{selectedUser.user.email}</p>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-4">
          {/* 사용자 정보 */}
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-400">학교</span>
                <p className="font-medium">{selectedUser.user.school || "-"}</p>
              </div>
              <div>
                <span className="text-gray-400">학번</span>
                <p className="font-medium">{selectedUser.user.studentId || "-"}</p>
              </div>
              <div>
                <span className="text-gray-400">가입일</span>
                <p className="font-medium">{formatDate(selectedUser.user.createdAt)}</p>
              </div>
              <div>
                <span className="text-gray-400">시험 횟수</span>
                <p className="font-medium">{selectedUser.attempts.length}회</p>
              </div>
            </div>
          </div>

          {/* 시험 이력 */}
          <h2 className="text-lg font-bold mb-3">시험 이력</h2>
          {userDetailLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
            </div>
          ) : selectedUser.attempts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">시험 이력이 없습니다.</p>
          ) : (
            <div className="space-y-3">
              {selectedUser.attempts.map((attempt) => (
                <div key={attempt.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          attempt.passed ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {attempt.passed ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-medium">{SCENARIO_NAMES[attempt.scenarioId]}</p>
                        <p className="text-sm text-gray-400">{formatDate(attempt.completedAt)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{Math.round(attempt.percentage)}%</p>
                      <p className="text-sm text-gray-400">
                        {attempt.score}/{attempt.totalQuestions}
                      </p>
                    </div>
                  </div>

                  {attempt.answers.length > 0 && (
                    <div className="grid grid-cols-8 sm:grid-cols-12 gap-1 mt-3">
                      {attempt.answers.map((answer, idx) => (
                        <div
                          key={idx}
                          className={`aspect-square rounded flex items-center justify-center text-xs font-medium ${
                            answer.isCorrect ? "bg-green-500/30 text-green-400" : "bg-red-500/30 text-red-400"
                          }`}
                          title={`Q${answer.questionDisplayId || answer.questionId}`}
                        >
                          {answer.questionDisplayId || idx + 1}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  }

  // 관리자 대시보드
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 헤더 */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">관리자</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
          >
            <LogOut className="w-4 h-4" />
            로그아웃
          </button>
        </div>
      </header>

      {/* 탭 */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex">
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
              activeTab === "stats"
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            통계
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
              activeTab === "users"
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            사용자
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
              activeTab === "password"
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            <Key className="w-4 h-4" />
            비밀번호
          </button>
        </div>
      </div>

      {/* 콘텐츠 */}
      <main className="max-w-6xl mx-auto p-4">
        {/* 통계 탭 */}
        {activeTab === "stats" && (
          <div>
            {statsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
              </div>
            ) : stats ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm text-gray-400">총 사용자</p>
                    <p className="text-3xl font-bold">{stats.totalUsers}</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm text-gray-400">총 시험</p>
                    <p className="text-3xl font-bold">{stats.completedAttempts}</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm text-gray-400">통과율</p>
                    <p className="text-3xl font-bold text-green-400">{stats.passRate}%</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm text-gray-400">평균 점수</p>
                    <p className="text-3xl font-bold text-blue-400">{stats.avgScore}%</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3">시나리오별 통계</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {stats.scenarioStats.map((s) => (
                    <div key={s.scenarioId} className="bg-gray-800 rounded-xl p-4">
                      <p className="text-sm text-gray-400">{SCENARIO_NAMES[s.scenarioId]}</p>
                      <div className="flex items-end justify-between mt-2">
                        <div>
                          <p className="text-2xl font-bold">{s.count}회</p>
                          <p className="text-sm text-gray-400">시험 횟수</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-blue-400">
                            {Math.round(Number(s.avgScore))}%
                          </p>
                          <p className="text-sm text-gray-400">평균 점수</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-400 text-center py-8">통계를 불러올 수 없습니다.</p>
            )}
          </div>
        )}

        {/* 사용자 탭 */}
        {activeTab === "users" && (
          <div>
            {usersLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
              </div>
            ) : users.length === 0 ? (
              <p className="text-gray-400 text-center py-8">등록된 사용자가 없습니다.</p>
            ) : (
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">이름</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 hidden sm:table-cell">이메일</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 hidden md:table-cell">학교</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-300">시험</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-300">통과</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-700/50">
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium">{u.name}</p>
                            <p className="text-sm text-gray-400 sm:hidden">{u.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-300 hidden sm:table-cell">{u.email}</td>
                        <td className="px-4 py-3 text-gray-300 hidden md:table-cell">{u.school || "-"}</td>
                        <td className="px-4 py-3 text-center">{u.totalAttempts}</td>
                        <td className="px-4 py-3 text-center text-green-400">{u.passedCount}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => fetchUserDetail(u.id)}
                            className="p-2 hover:bg-gray-600 rounded-lg"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 비밀번호 변경 탭 */}
        {activeTab === "password" && (
          <div className="max-w-md">
            <form onSubmit={handleChangePassword} className="bg-gray-800 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold mb-4">비밀번호 변경</h3>

              {pwError && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded text-sm">
                  {pwError}
                </div>
              )}
              {pwSuccess && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded text-sm">
                  {pwSuccess}
                </div>
              )}

              <div>
                <label className="block text-sm text-gray-400 mb-1">현재 비밀번호</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">새 비밀번호</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                  minLength={6}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">새 비밀번호 확인</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPw}
                  onChange={(e) => setConfirmPw(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={pwLoading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg font-medium flex items-center justify-center gap-2"
              >
                {pwLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "비밀번호 변경"}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
