"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";
import Link from "next/link";

interface Answer {
  questionId: string;
  questionDisplayId: string | null;
  selectedOptionId: string;
  correctOptionId: string;
  isCorrect: boolean;
  retryCount: number;
}

interface ExamAttempt {
  id: number;
  scenarioId: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  startedAt: string | null;
  completedAt: string | null;
  answers: Answer[];
}

const SCENARIO_NAMES: Record<number, string> = {
  1: "심소생 (심정지 환자)",
  2: "심소생 (VF/pVT 환자)",
  3: "전문심장소생술 팀",
};

export default function HistoryPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login?redirect=/history");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user]);

  const fetchHistory = async () => {
    try {
      const res = await fetch("/api/exam/history");
      if (res.ok) {
        const data = await res.json();
        setAttempts(data.attempts || []);
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (authLoading || (!user && !authLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold">시험 이력</h1>
        </div>
      </header>

      {/* 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : attempts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              시험 이력이 없습니다
            </h2>
            <p className="text-gray-500 mb-6">
              시나리오를 완료하면 이력이 저장됩니다.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              학습 시작하기
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {attempts.map((attempt) => (
              <div
                key={attempt.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                {/* 요약 */}
                <div
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedId(expandedId === attempt.id ? null : attempt.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          attempt.passed
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {attempt.passed ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <XCircle className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          시나리오 {attempt.scenarioId}:{" "}
                          {SCENARIO_NAMES[attempt.scenarioId] || "알 수 없음"}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatDate(attempt.completedAt)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {Math.round(attempt.percentage)}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {attempt.score}/{attempt.totalQuestions}
                        </div>
                      </div>
                      {expandedId === attempt.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* 상세 (펼침) */}
                {expandedId === attempt.id && attempt.answers.length > 0 && (
                  <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <h4 className="font-medium text-gray-700 mb-3">
                      문항별 결과
                    </h4>
                    <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                      {attempt.answers.map((answer, idx) => (
                        <div
                          key={idx}
                          className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium ${
                            answer.isCorrect
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                          title={`Q${answer.questionDisplayId || answer.questionId}: ${
                            answer.isCorrect ? "정답" : "오답"
                          }${answer.retryCount > 0 ? ` (재시도 ${answer.retryCount}회)` : ""}`}
                        >
                          {answer.questionDisplayId || `Q${idx + 1}`}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded bg-green-100"></div>
                        <span>
                          정답 ({attempt.answers.filter((a) => a.isCorrect).length})
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded bg-red-100"></div>
                        <span>
                          오답 ({attempt.answers.filter((a) => !a.isCorrect).length})
                        </span>
                      </div>
                    </div>
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
