# Lime Administrator

> **LIME Administrator**는 [LIME (리메)](https://github.com/DongEsssss/lime) 프로젝트의 **관리자 전용 웹 애플리케이션**입니다.  
> LIME 플랫폼에 등록되는 **카테고리별 사용자 콘텐츠**(한마디, 사진, 기타 이미지)와 **유저 정보**를 통합 관리할 수 있는 대시보드를 제공합니다.  
> 오직 **관리자 계정**만 접근 가능하며, Firebase 기반 인증을 통해 안전하게 운영됩니다.

---

## 1. 프로젝트 개요

**LIME Administrator**는 LIME 웹사이트에서 사용자들이 업로드하는 콘텐츠와  
유저 계정을 효율적으로 관리하기 위해 제작된 **관리자 전용 관리 도구**입니다.

- **콘텐츠 관리**: 여러 카테고리의 사용자 업로드(한마디, 사진, 이미지 등) CRUD
- **유저 관리**: 가입한 사용자 정보와 권한 변경, 계정 상태 관리
- **보안 접근**: 관리자 인증을 거쳐야만 접속 가능
- **실시간 동기화**: Firebase Firestore 기반의 실시간 데이터 연동

---

## 2. 주요 기능

### 콘텐츠 관리
- 카테고리별 데이터 등록/수정/삭제
- 사용자 한마디 텍스트와 이미지 업로드 관리
- Featured Items, Daily Insight 등 브랜드 콘텐츠 관리

### 유저 관리
- 가입 유저 목록 및 상세 정보 조회
- 활동 내역 및 업로드 콘텐츠 확인
- 권한(Role) 변경 (예: 일반 → 관리자)
- 계정 비활성화 및 삭제

### 보안 및 접근 제어
- Firebase Authentication 기반 **관리자 로그인**
- 권한 체크로 비인가 접근 차단

---

## 3. 기술 스택

### Frontend
- **TypeScript** – 안정적인 타입 기반 개발
- **React** – 컴포넌트 기반 UI 구성
- **SCSS** – 구조적인 스타일 관리
- **React Query** – 비동기 데이터 관리 및 캐싱

### Backend / Infrastructure
- **Firebase Authentication** – 관리자 인증
- **Firebase Firestore** – 실시간 데이터베이스
- **Firebase Storage** – 이미지 및 파일 저장
- **Firebase Hosting** – 배포

---
