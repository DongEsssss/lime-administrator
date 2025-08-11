# Lime Administrator

> **LIME Administrator**는 [LIME (리메)](https://github.com/DongEsssss/lime) 프로젝트의 관리자 전용 웹 애플리케이션입니다.  
> LIME의 콘텐츠(데일리 인사이트, 브랜드 컬렉션 등)와 사용자 계정을 효율적으로 관리할 수 있는 대시보드 기능을 제공합니다.

---

## 1. 프로젝트 개요

**LIME Administrator**는 LIME 웹사이트에서 사용하는 데이터를 입력·수정하고,  
가입 유저의 정보와 접근 권한을 관리할 수 있도록 제작된 **관리자 전용 페이지**입니다.

- **데이터 관리**: Daily Insight, Featured Items, 브랜드 철학 섹션 등 LIME 콘텐츠 CRUD  
- **유저 관리**: 가입한 사용자 목록 조회 및 권한 변경  
- **보안 접근**: 관리자 전용 로그인 및 인증 시스템 적용  
- **UI/UX**: 직관적인 폼과 테이블 기반 인터페이스로 빠른 관리 가능

---

## 2. 주요 기능

### 데이터 관리
- **Daily Insight 등록/수정/삭제**  
- **컬렉션(Featured Items) 관리**  
- 브랜드 철학, 추천 콘텐츠 등 기타 정적 데이터 업데이트

### 유저 관리
- 가입한 사용자 목록 확인  
- 권한(Role) 변경 (예: 일반 → 관리자)  
- 비활성화 및 삭제 기능

### 보안
- Firebase Authentication 기반 관리자 로그인  
- 권한 체크를 통한 페이지 접근 제한

---

## 3. 기술 스택

- **Frontend**: React, scss, Material UI  
- **State Management**: React Query  
- **Backend / DB**: Firebase Firestore, Firebase Authentication  
- **배포**: Firebase 

---

## 4. 폴더 구조 예시

```bash
src/
 ├─ components/         # UI 컴포넌트 (폼, 테이블, 모달 등)
 ├─ pages/              # 주요 페이지 (로그인, 대시보드, 데이터 관리, 유저 관리)
 ├─ hooks/              # React Query 및 커스텀 훅
 ├─ lib/                # Firebase 초기화 및 API 함수
 ├─ styles/             # Tailwind 및 글로벌 스타일
 └─ App.tsx             # 라우팅 및 전역 설정
