"use client";

import React, { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Layout } from "../components/Layout";
import { Dashboard } from "../components/Dashboard";
import { SessionPlayer } from "../components/SessionPlayer";
import { ResultScreen } from "../components/ResultScreen";
import { Scenario } from "../components/Scenario";
import { ViewState } from "./types";
import { Pause, Play, SkipForward } from "lucide-react";
import {
  scenario1Questions,
  scenario1,
  scenario2Questions,
  scenario2,
  scenario3Questions,
  scenario3,
} from "@/app/data";

// 시나리오별 인트로 영상 URL
const SCENARIO_INTRO_VIDEOS: Record<number, string> = {
  1: "https://res.cloudinary.com/dn3cicucf/video/upload/v1767390718/cpr-videos/q1000_question.mp4",
  2: "https://res.cloudinary.com/dn3cicucf/video/upload/v1767390721/cpr-videos/q2000_question.mp4",
  3: "https://res.cloudinary.com/dn3cicucf/video/upload/v1767390727/cpr-videos/q3000_question.mp4",
};

// Scenario Intro Data
const SCENARIO_DATA = {
  1: {
    title: "Scenario 1: 심소생 (심정지 환자)",
    description: (
      <div className="space-y-6 text-sm md:text-base">
        {/* 사례 요약 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            1. 사례 요약
          </h4>
          <p className="text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
            상기 환자는 Epilepsy 환자로 간헐적 발작 증세를 보여 병동에 입원 관찰
            중이다. 기저질환으로는 고혈압, 당뇨가 있고, 입원 3일 동안 새로운
            발작 증세는 보이지 않으며, 활력징후는 정상이다. 입원 당시 진행한
            Brain MRI도 정상이다.
          </p>
        </section>

        {/* 대상자 정보 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            2. 대상자 정보
          </h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-700 bg-white p-4 rounded-lg border border-slate-200">
            <li>
              <span className="font-semibold text-slate-500 w-16 inline-block">
                이름:
              </span>{" "}
              심소생
            </li>
            <li>
              <span className="font-semibold text-slate-500 w-16 inline-block">
                성별:
              </span>{" "}
              여
            </li>
            <li>
              <span className="font-semibold text-slate-500 w-16 inline-block">
                연령:
              </span>{" "}
              56세
            </li>
          </ul>
        </section>

        {/* 검사 정보 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            3. 검사 정보
          </h4>
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-blue-600">[영상검사]</span> 3일 전
              MRI Brain - Normal
            </div>

            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 text-sm border-b border-slate-200">
                [혈액검사] 당일 검사 결과
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-3 py-2">검사항목</th>
                      <th className="px-3 py-2">결과</th>
                      <th className="px-3 py-2">정상범위</th>
                      <th className="px-3 py-2 border-l border-slate-100">
                        검사항목
                      </th>
                      <th className="px-3 py-2">결과</th>
                      <th className="px-3 py-2">정상범위</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 font-medium">WBC</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        11.0 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">4-10</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Glucose
                      </td>
                      <td className="px-3 py-2">62</td>
                      <td className="px-3 py-2 text-slate-400">60-100</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">RBC</td>
                      <td className="px-3 py-2">5.45</td>
                      <td className="px-3 py-2 text-slate-400">4.5-6.1</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Amylase
                      </td>
                      <td className="px-3 py-2">45</td>
                      <td className="px-3 py-2 text-slate-400">40-126</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Hgb</td>
                      <td className="px-3 py-2 text-blue-500 font-bold">
                        10.2 ▼
                      </td>
                      <td className="px-3 py-2 text-slate-400">13-17</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Lipase
                      </td>
                      <td className="px-3 py-2">20</td>
                      <td className="px-3 py-2 text-slate-400">13-55</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">PLT</td>
                      <td className="px-3 py-2">229</td>
                      <td className="px-3 py-2 text-slate-400">150-400</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Osmolality
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        296 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">275-295</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">AST</td>
                      <td className="px-3 py-2">36</td>
                      <td className="px-3 py-2 text-slate-400">5-37</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        CRP
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        2.1 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">0.0-0.5</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">ALT</td>
                      <td className="px-3 py-2">40</td>
                      <td className="px-3 py-2 text-slate-400">5-41</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        CK-MB
                      </td>
                      <td className="px-3 py-2">2.7</td>
                      <td className="px-3 py-2 text-slate-400">0-5.2</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">BUN</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        27.0 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">8-22</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        NT proBNP
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        1712 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">&lt;125/450</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Cr</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        2.2 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">0.8-1.2</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Myoglobin
                      </td>
                      <td className="px-3 py-2">150.2</td>
                      <td className="px-3 py-2 text-slate-400">0-155</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Albumin</td>
                      <td className="px-3 py-2">3.9</td>
                      <td className="px-3 py-2 text-slate-400">3.8-5.3</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        hs TnI
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        0.031 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">&lt;0.026</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Na</td>
                      <td className="px-3 py-2">142</td>
                      <td className="px-3 py-2 text-slate-400">136-146</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Ammonia
                      </td>
                      <td className="px-3 py-2">78</td>
                      <td className="px-3 py-2 text-slate-400">10-80</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">K</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        6.5 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">3.5-5.0</td>
                      <td className="px-3 py-2 border-l border-slate-100"></td>
                      <td className="px-3 py-2"></td>
                      <td className="px-3 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 기타 정보 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">4. 진단명</h4>
            <p className="text-slate-700">Epilepsy, HTN, DM</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">
              5. 마지막 활력징후
            </h4>
            <p className="text-slate-700">
              BP: 135/82, P: 88, R: 18, T: 36.8, SpO₂: 98%
            </p>
          </div>
        </section>

        <section className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-2">6. 투약 처방</h4>
          <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
            <li>항경련제: Valproic acid 500 mg PO BID</li>
            <li>항고혈압제: Amlodipine 5 mg PO QD</li>
            <li>당뇨약: Metformin 500 mg PO BID</li>
            <li>
              <span className="font-bold">PRN:</span> Diazepam 5 mg IV (발작 3분
              이상 지속 시)
            </li>
            <li>Fluid: Normal saline IV 80 mL/hr 유지</li>
          </ul>
        </section>
      </div>
    ),
    patientInfo: {
      status: "Epilepsy, HTN, DM",
      history: "고위험군 (Lab Abnormal)",
    },
    eventInfo: {
      title: "응급 상황 발생 (입원 3일째)",
      description: (
        <>
          환자는 점심식사 후 보호자 동반하에 화장실을 갔다가 대변을 본 뒤
          일어서다 쓰러졌습니다.
          <br />
          <br />
          보호자가 <span className="font-bold">&quot;환자가 쓰러졌어요&quot;</span>
          라고 해서 화장실에 갔을 때 환자는 바닥에 쓰러져 있었습니다. 눈을 감은
          채로 사지에{" "}
          <span className="font-bold decoration-red-300 underline underline-offset-4">
            미세한 떨림
          </span>
          을 보이고 있었습니다.
        </>
      ),
    },
  },
  2: {
    title: "Scenario 2: 김여린 (실신/정상호흡)",
    description: (
      <div className="space-y-6 text-sm md:text-base">
        {/* 사례 요약 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            1. 사례 요약
          </h4>
          <p className="text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
            43세 여성 환자가 자궁절제술 후 회복중이다. 기저질환으로
            기립성저혈압이 있으며, 수술 후 Hemoglobin 수치 저하되어 수혈이
            시행되었다. 활력징후는 안정적이며, 통증 호소는 없다. 입원 2일째,
            환자는 자고 있다가 X-ray 검사를 위해 침상에서 일어나던 중 갑자기
            어지러움을 호소하며 바닥으로 쓰러졌다.
          </p>
        </section>

        {/* 대상자 정보 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            2. 대상자 정보
          </h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-700 bg-white p-4 rounded-lg border border-slate-200">
            <li>
              <span className="font-semibold text-slate-500 w-16 inline-block">
                이름:
              </span>{" "}
              김여린
            </li>
            <li>
              <span className="font-semibold text-slate-500 w-16 inline-block">
                성별:
              </span>{" "}
              여
            </li>
            <li>
              <span className="font-semibold text-slate-500 w-16 inline-block">
                연령:
              </span>{" "}
              43세
            </li>
          </ul>
        </section>

        {/* 검사 정보 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            3. 검사 정보
          </h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 text-sm border-b border-slate-200">
                [혈액검사] 당일 검사 결과
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-3 py-2">검사항목</th>
                      <th className="px-3 py-2">결과</th>
                      <th className="px-3 py-2">정상범위</th>
                      <th className="px-3 py-2 border-l border-slate-100">
                        검사항목
                      </th>
                      <th className="px-3 py-2">결과</th>
                      <th className="px-3 py-2">정상범위</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 font-medium">WBC</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        13.0 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">4-10</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Glucose
                      </td>
                      <td className="px-3 py-2">62</td>
                      <td className="px-3 py-2 text-slate-400">60-100</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">RBC</td>
                      <td className="px-3 py-2">5.45</td>
                      <td className="px-3 py-2 text-slate-400">4.5-6.1</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Amylase
                      </td>
                      <td className="px-3 py-2">45</td>
                      <td className="px-3 py-2 text-slate-400">40-126</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Hgb</td>
                      <td className="px-3 py-2 text-blue-500 font-bold">
                        8.2 ▼
                      </td>
                      <td className="px-3 py-2 text-slate-400">13-17</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Lipase
                      </td>
                      <td className="px-3 py-2">20</td>
                      <td className="px-3 py-2 text-slate-400">13-55</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">PLT</td>
                      <td className="px-3 py-2">229</td>
                      <td className="px-3 py-2 text-slate-400">150-400</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Osmolality
                      </td>
                      <td className="px-3 py-2">280</td>
                      <td className="px-3 py-2 text-slate-400">275-295</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">AST</td>
                      <td className="px-3 py-2">36</td>
                      <td className="px-3 py-2 text-slate-400">5-37</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        CRP
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        1.1 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">0.0-0.5</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">ALT</td>
                      <td className="px-3 py-2">40</td>
                      <td className="px-3 py-2 text-slate-400">5-41</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        BUN
                      </td>
                      <td className="px-3 py-2">21.0</td>
                      <td className="px-3 py-2 text-slate-400">8-22</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Cr</td>
                      <td className="px-3 py-2">1.1</td>
                      <td className="px-3 py-2 text-slate-400">0.8-1.2</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Albumin
                      </td>
                      <td className="px-3 py-2">3.9</td>
                      <td className="px-3 py-2 text-slate-400">3.8-5.3</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Na</td>
                      <td className="px-3 py-2">142</td>
                      <td className="px-3 py-2 text-slate-400">136-146</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        K
                      </td>
                      <td className="px-3 py-2">4.3</td>
                      <td className="px-3 py-2 text-slate-400">3.5-5.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 기타 정보 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">4. 진단명</h4>
            <p className="text-slate-700">기립성저혈압, 빈혈, 실신</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">
              5. 마지막 활력징후
            </h4>
            <p className="text-slate-700">
              BP: 88/52, P: 110, R: 20, T: 36.8, SpO₂: 97%
            </p>
          </div>
        </section>

        <section className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-2">
            6. 투약 처방 (수술 후)
          </h4>
          <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
            <li>Cefazolin 1g IV q8hr (항생제)</li>
            <li>Normal Saline 1000ml/day IV</li>
            <li>
              <span className="font-bold">PRN:</span> Tramadol 50mg PO (중등도
              통증)
            </li>
            <li>
              <span className="font-bold">PRN:</span> Acetaminophen 650mg PO
              (경증/발열)
            </li>
          </ul>
        </section>
      </div>
    ),
    patientInfo: {
      status: "Syncope, Anemia",
      history: "기립성저혈압 (Orthostatic Hypotension)",
    },
    eventInfo: {
      title: "응급 상황 발생 (입원 2일째)",
      description: (
        <>
          환자는 자고 있다가 X-ray 검사를 위해 침상에서 일어나던 중 갑자기
          어지러움을 호소하며 바닥으로 쓰러졌습니다.
          <br />
          <br />
          라운딩을 하던 간호사가 바닥에{" "}
          <span className="font-bold">의식 없는 상태</span>로 누워있는 환자를
          발견했습니다.
        </>
      ),
    },
  },
  3: {
    title: "Scenario 3: 장소중 (팀 기반 CPR)",
    description: (
      <div className="space-y-6 text-sm md:text-base">
        {/* 사례 요약 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            1. 사례 요약
          </h4>
          <p className="text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
            상기 환자는 LC, HTN, DM 기왕력 있는 자로 내원 전 2차례의
            Hematochezia가 있어 119 통해 응급실 내원하였다. 내원 시 BP 70대로
            C-line insert하였고, Hgb 8.0으로 PRC 2pint 수혈하면서 응급내시경
            지혈술을 시행하였다. 지혈술 후에 환자 활력징후는 정상으로 재출혈
            관찰 위해 입원하였다. 입원 3일째, 환자 복통과 오심 호소하다가 800cc
            가량의 Hematemesis를 하였다. 환자 식은땀 흘리고 있으며 모니터링상
            BP:80/50mmHg, P:120회/분 측정되었다. Rebleeding 의심되어
            응급내시경지혈술을 위해 준비 중 어지럼증을 호소한다.
          </p>
        </section>

        {/* 대상자 정보 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            2. 대상자 정보
          </h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-700 bg-white p-4 rounded-lg border border-slate-200">
            <li>
              <span className="font-semibold text-slate-500 w-24 inline-block">
                이름:
              </span>{" "}
              장소중
            </li>
            <li>
              <span className="font-semibold text-slate-500 w-24 inline-block">
                성별/연령:
              </span>{" "}
              남 / 61세
            </li>
            <li>
              <span className="font-semibold text-slate-500 w-24 inline-block">
                몸무게:
              </span>{" "}
              72kg
            </li>
          </ul>
        </section>

        {/* 검사 정보 */}
        <section>
          <h4 className="font-bold text-slate-800 text-lg mb-2">
            3. 검사 정보
          </h4>
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg border border-slate-200 text-sm space-y-2">
              <div>
                <span className="font-bold text-blue-600">
                  [영상검사] 내원 시 Abdomen CT:
                </span>{" "}
                R/O Acute hematoma in gastric lumen
              </div>
              <div className="border-t border-slate-100 pt-2">
                <span className="font-bold text-blue-600">
                  내원 시 Endoscopy:
                </span>{" "}
                Multiple erosions at esophagus, laceration at EGJ with exposed
                vessel (hemoclipping done)
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 text-sm border-b border-slate-200">
                [혈액검사] 당일 검사 결과
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="px-3 py-2">검사항목</th>
                      <th className="px-3 py-2">결과</th>
                      <th className="px-3 py-2">정상범위</th>
                      <th className="px-3 py-2 border-l border-slate-100">
                        검사항목
                      </th>
                      <th className="px-3 py-2">결과</th>
                      <th className="px-3 py-2">정상범위</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 font-medium">WBC</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        13.5 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">4-10</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Glucose
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        199 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">60-100</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">RBC</td>
                      <td className="px-3 py-2 text-blue-500 font-bold">
                        2.59 ▼
                      </td>
                      <td className="px-3 py-2 text-slate-400">4.5-6.1</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Amylase
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        1667 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">40-126</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Hgb</td>
                      <td className="px-3 py-2 text-blue-500 font-bold">
                        7.8 ▼
                      </td>
                      <td className="px-3 py-2 text-slate-400">13-17</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Lipase
                      </td>
                      <td className="px-3 py-2">34</td>
                      <td className="px-3 py-2 text-slate-400">13-55</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">PLT</td>
                      <td className="px-3 py-2 text-blue-500 font-bold">
                        83 ▼
                      </td>
                      <td className="px-3 py-2 text-slate-400">150-400</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Osmolality
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        336 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">275-295</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">AST</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        119 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">5-37</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        CRP
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        0.8 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">0.0-0.5</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">ALT</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        104 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">5-41</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        CK-MB
                      </td>
                      <td className="px-3 py-2">1.64</td>
                      <td className="px-3 py-2 text-slate-400">0-5.2</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">BUN</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        47.6 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">8-22</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        NT proBNP
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        226 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">&lt;125/450</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Cr</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        1.90 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">0.8-1.2</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        D-Dimer
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        2.54 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">0-0.55</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Albumin</td>
                      <td className="px-3 py-2 text-blue-500 font-bold">
                        2.3 ▼
                      </td>
                      <td className="px-3 py-2 text-slate-400">3.8-5.3</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        hs TnI
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        0.087 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">&lt;0.026</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Na</td>
                      <td className="px-3 py-2">138</td>
                      <td className="px-3 py-2 text-slate-400">136-146</td>
                      <td className="px-3 py-2 border-l border-slate-100 font-medium">
                        Ammonia
                      </td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        294 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">10-80</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">K</td>
                      <td className="px-3 py-2 text-red-500 font-bold">
                        6.7 ▲
                      </td>
                      <td className="px-3 py-2 text-slate-400">3.5-5.0</td>
                      <td className="px-3 py-2 border-l border-slate-100"></td>
                      <td className="px-3 py-2"></td>
                      <td className="px-3 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 기타 정보 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">4. 진단명</h4>
            <p className="text-slate-700">
              GI hemorrhage, DM, Metabolic acidosis, Hyperkalemia
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">
              5. 마지막 활력징후
            </h4>
            <p className="text-slate-700">
              BP: 80/50, P: 120, R: 22, BT: 36.0, SpO₂: 93%
            </p>
          </div>
        </section>

        <section className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-2">6. 투약 처방</h4>
          <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
            <li>Nexium 40mg IV QD (PPI)</li>
            <li>Macperan 10mg IV PRN (구토시/항구토제)</li>
            <li>Normal saline 1000ml IV 80mL/hr 유지</li>
          </ul>
        </section>
      </div>
    ),
    patientInfo: {
      status: "GI Bleeding, Shock",
      history: "LC, HTN, DM",
    },
    eventInfo: {
      title: "Code Blue 상황",
      description: (
        <>
          환자가 침상에서{" "}
          <span className="font-bold">대량의 토혈(Hematemesis, 800cc)</span> 후
          의식을 잃고 발견되었습니다.
          <br />
          <br />
          <span className="font-bold">간호사 1</span>: 최초 발견 및 가슴압박
          <br />
          <span className="font-bold">간호사 2</span>: 기도 유지 및 환기
          <br />
          <span className="font-bold">간호사 3</span>: 약물 투여 및 제세동기
          운영
          <br />각 역할에 맞춰 시뮬레이션이 진행됩니다.
        </>
      ),
    },
  },
};

function HomeContent() {
  const searchParams = useSearchParams();

  const [viewState, setViewState] = useState<ViewState>(ViewState.DASHBOARD);
  const [sessionScore, setSessionScore] = useState(0);
  const [selectedScenarioId, setSelectedScenarioId] = useState<number>(1);
  const [initialQuestionIndex, setInitialQuestionIndex] = useState<number>(0);
  const [currentQuestionId, setCurrentQuestionId] = useState<string | number | null>(null);

  // 인트로 영상 관련 state
  const [introPlaying, setIntroPlaying] = useState(true);
  const [introProgress, setIntroProgress] = useState(0);
  const [introDuration, setIntroDuration] = useState(0);
  const introVideoRef = useRef<HTMLVideoElement>(null);

  // Update URL when state changes
  const updateUrl = useCallback((view: ViewState, scenarioId?: number, questionId?: string | number) => {
    const params = new URLSearchParams();
    params.set("view", view);
    if (scenarioId) {
      params.set("scenario", String(scenarioId));
    }
    if (questionId) {
      params.set("q", String(questionId));
    }
    const newUrl = `?${params.toString()}`;
    window.history.pushState({ view, scenarioId, questionId }, "", newUrl);
  }, []);

  // Parse URL and restore state on mount
  useEffect(() => {
    const view = searchParams.get("view");
    const scenario = searchParams.get("scenario");
    const questionId = searchParams.get("q");

    queueMicrotask(() => {
      if (view) {
        const viewValue = view.toUpperCase() as ViewState;
        if (Object.values(ViewState).includes(viewValue)) {
          setViewState(viewValue);
        }
      }
      if (scenario) {
        const scenarioNum = parseInt(scenario, 10);
        if ([1, 2, 3].includes(scenarioNum)) {
          setSelectedScenarioId(scenarioNum);
        }
      }
      if (questionId) {
        setCurrentQuestionId(isNaN(Number(questionId)) ? questionId : Number(questionId));
      }
    });
  }, [searchParams]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        const { view, scenarioId, questionId } = event.state;
        if (view && Object.values(ViewState).includes(view)) {
          setViewState(view);
        }
        if (scenarioId) {
          setSelectedScenarioId(scenarioId);
        }
        if (questionId) {
          setCurrentQuestionId(questionId);
        }
      } else {
        // No state - go back to dashboard
        setViewState(ViewState.DASHBOARD);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle question changes from SessionPlayer
  const handleQuestionChange = useCallback((questionId: string | number) => {
    setCurrentQuestionId(questionId);
    updateUrl(ViewState.SESSION_1, selectedScenarioId, questionId);
  }, [selectedScenarioId, updateUrl]);

  // Helper to get questions based on scenario
  const getQuestions = () => {
    switch (selectedScenarioId) {
      case 1:
        return scenario1Questions;
      case 2:
        return scenario2Questions;
      case 3:
        return scenario3Questions;
      default:
        return scenario1Questions;
    }
  };

  const getScenario = () => {
    switch (selectedScenarioId) {
      case 1:
        return scenario1;
      case 2:
        return scenario2;
      case 3:
        return scenario3;
      default:
        return scenario1;
    }
  };

  const currentQuestions = getQuestions();
  const currentScenario = getScenario();

  const handleScenarioSelect = (scenarioId: number) => {
    setSelectedScenarioId(scenarioId);
    setInitialQuestionIndex(0);
    setCurrentQuestionId(null);
    setViewState(ViewState.INTRO);
    updateUrl(ViewState.INTRO, scenarioId);
  };

  // 인트로 영상 완료 후 사례요약 팝업으로 이동
  const handleIntroComplete = () => {
    setViewState(ViewState.SCENARIO);
    updateUrl(ViewState.SCENARIO, selectedScenarioId);
    // 다음 시나리오를 위해 인트로 상태 리셋
    setIntroPlaying(true);
    setIntroProgress(0);
    setIntroDuration(0);
  };

  // 인트로 영상 핸들러들
  const handleIntroTimeUpdate = () => {
    if (introVideoRef.current) {
      setIntroProgress(introVideoRef.current.currentTime);
    }
  };

  const handleIntroLoadedMetadata = () => {
    if (introVideoRef.current) {
      setIntroDuration(introVideoRef.current.duration);
    }
  };

  const handleIntroPlayPause = () => {
    if (introVideoRef.current) {
      if (introPlaying) {
        introVideoRef.current.pause();
      } else {
        introVideoRef.current.play();
      }
      setIntroPlaying(!introPlaying);
    }
  };

  const handleIntroSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (introVideoRef.current) {
      introVideoRef.current.currentTime = time;
      setIntroProgress(time);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleJumpToQuestion = (scenarioId: number, questionIndex: number) => {
    setSelectedScenarioId(scenarioId);
    setInitialQuestionIndex(questionIndex);
    const questions = scenarioId === 1 ? scenario1Questions : scenarioId === 2 ? scenario2Questions : scenario3Questions;
    const questionId = questions[questionIndex]?.id;
    setCurrentQuestionId(questionId || null);
    setViewState(ViewState.SESSION_1);
    updateUrl(ViewState.SESSION_1, scenarioId, questionId);
  };

  const handleScenarioComplete = () => {
    // Scenario 1 starts with Session 1 (which encompasses the whole flow in this simplified logic, or we can split it if needed)
    // For now, mapping all questions to "SESSION_1" view state which uses SessionPlayer
    setViewState(ViewState.SESSION_1);
    const startQuestionId = currentScenario.startQuestionId;
    setCurrentQuestionId(startQuestionId);
    updateUrl(ViewState.SESSION_1, selectedScenarioId, startQuestionId);
  };

  const handleSessionComplete = (correctCount: number) => {
    setSessionScore(correctCount);
    const percentage = correctCount / currentQuestions.length;
    const resultView = percentage >= 0.8 ? ViewState.RESULT_PASS : ViewState.RESULT_FAIL;
    setViewState(resultView);
    updateUrl(resultView, selectedScenarioId);
  };

  const handleRetry = () => {
    const startQuestionId = currentScenario.startQuestionId;
    setCurrentQuestionId(startQuestionId);
    setViewState(ViewState.SESSION_1);
    updateUrl(ViewState.SESSION_1, selectedScenarioId, startQuestionId);
  };

  const handleContinue = () => {
    // Return to dashboard for now, or next session if applicable
    setViewState(ViewState.DASHBOARD);
    updateUrl(ViewState.DASHBOARD);
  };

  const handleGoHome = () => {
    setViewState(ViewState.DASHBOARD);
    setCurrentQuestionId(null);
    setInitialQuestionIndex(0);
    updateUrl(ViewState.DASHBOARD);
  };

  const activeScenarioData =
    SCENARIO_DATA[selectedScenarioId as keyof typeof SCENARIO_DATA];

  return (
    <Layout viewState={viewState} onGoHome={handleGoHome}>
      {viewState === ViewState.DASHBOARD && (
        <Dashboard
          onSelectScenario={handleScenarioSelect}
          onJumpToQuestion={handleJumpToQuestion}
        />
      )}

      {/* 인트로 영상 화면 */}
      {viewState === ViewState.INTRO && (
        <div className="fixed inset-0 bg-black z-50">
          {/* 인트로 영상 - 전체화면 */}
          <video
            ref={introVideoRef}
            src={SCENARIO_INTRO_VIDEOS[selectedScenarioId]}
            className="w-full h-full object-contain"
            autoPlay
            playsInline
            onTimeUpdate={handleIntroTimeUpdate}
            onLoadedMetadata={handleIntroLoadedMetadata}
            onEnded={handleIntroComplete}
            onClick={handleIntroPlayPause}
          />

          {/* 시나리오 제목 */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <div className="bg-black/70 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 rounded-lg border border-white/10">
              <span className="text-blue-400 font-bold text-xs sm:text-base uppercase tracking-wider">
                Scenario {selectedScenarioId}
              </span>
              <p className="text-white font-bold text-sm sm:text-xl mt-0.5">
                시나리오 소개
              </p>
            </div>
          </div>

          {/* 컨트롤 바 - 영상 위 오버레이 */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="bg-black/70 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-3 border border-white/10">
              {/* 프로그래스 바 */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-white text-[10px] sm:text-xs font-mono w-8 sm:w-10">
                  {formatTime(introProgress)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={introDuration || 100}
                  value={introProgress}
                  onChange={handleIntroSeek}
                  className="flex-grow h-1.5 sm:h-2 bg-slate-600 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:sm:w-4
                    [&::-webkit-slider-thumb]:sm:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-blue-500
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-moz-range-thumb]:w-3
                    [&::-moz-range-thumb]:h-3
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-blue-500
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(introProgress / (introDuration || 1)) * 100}%, #475569 ${(introProgress / (introDuration || 1)) * 100}%, #475569 100%)`
                  }}
                />
                <span className="text-slate-400 text-[10px] sm:text-xs font-mono w-8 sm:w-10 text-right">
                  {formatTime(introDuration)}
                </span>
              </div>

              {/* 컨트롤 버튼 */}
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={handleIntroPlayPause}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-bold text-xs sm:text-sm transition-all"
                >
                  {introPlaying ? (
                    <>
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">일시정지</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">재생</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleIntroComplete}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs sm:text-sm transition-all shadow-lg"
                >
                  <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  건너뛰기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {viewState === ViewState.SCENARIO && (
        <Scenario
          title={activeScenarioData.title}
          description={activeScenarioData.description}
          patientInfo={activeScenarioData.patientInfo}
          eventInfo={activeScenarioData.eventInfo}
          onNext={handleScenarioComplete}
        />
      )}

      {/* Reusing SESSION_1 state for the main player loop for any scenario */}
      {viewState === ViewState.SESSION_1 && (
        <SessionPlayer
          questionsMap={currentScenario.questions}
          orderedQuestionIds={currentQuestions.map((q) => q.id)}
          initialQuestionId={
            currentQuestionId ||
            currentQuestions[initialQuestionIndex]?.id ||
            currentScenario.startQuestionId
          }
          sessionId={
            selectedScenarioId === 1 ? (initialQuestionIndex >= 8 ? 2 : 1) : 1
          }
          scenarioId={selectedScenarioId}
          onComplete={handleSessionComplete}
          onQuestionChange={handleQuestionChange}
        />
      )}

      {(viewState === ViewState.RESULT_PASS ||
        viewState === ViewState.RESULT_FAIL) && (
        <ResultScreen
          score={sessionScore}
          total={currentQuestions.length}
          passed={viewState === ViewState.RESULT_PASS}
          sessionId={1}
          onRetry={handleRetry}
          onContinue={handleContinue}
          isFinal={true}
        />
      )}
    </Layout>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
