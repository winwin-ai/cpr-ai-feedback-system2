"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth, User } from "@/contexts/AuthContext";
import { User as UserIcon, LogOut, History, ChevronDown } from "lucide-react";
import Link from "next/link";

interface UserMenuProps {
  user: User;
}

export function UserMenu({ user }: UserMenuProps) {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsOpen(false);
    await logout();
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <UserIcon className="w-4 h-4" />
        </div>
        <span className="font-medium hidden sm:inline">{user.name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* 사용자 정보 */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            {user.school && (
              <p className="text-xs text-gray-400 mt-1">
                {user.school} {user.studentId && `/ ${user.studentId}`}
              </p>
            )}
          </div>

          {/* 메뉴 항목 */}
          <div className="py-1">
            <Link
              href="/history"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <History className="w-4 h-4" />
              <span>시험 이력</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
