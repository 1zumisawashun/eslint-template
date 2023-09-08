# eslint-template

eslint-template

## Overview

- ESLintの設定内容は下記記事にまとめているので不明点があれば確認してください。
- [【ESLint】個人テンプレートのESLintを改善するためにeslint-config-airbnbを調査してみる](https://zenn.dev/shuuuuuun/articles/127728961f89a0)

## 環境

| ライブラリ           | バージョン |
| -------------------- | ---------- |
| react                | 18.2.0     |
| react-dom            | 18.2.0     |
| react-error-boundary | 4.0.4      |
| react-helmet-async   | 1.3.0      |
| react-router-dom     | 6.11.1     |

## Installation

- clone

```bash
$ git clone git@github.com:1zumisawashun/eslint-template.git
$ cd eslint-template
```

- install

```bash
$ npm install
```

- ローカル開発用 URL を開き動作確認をする

```bash
$ npm run dev
```

http://localhost:5173

- 上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## How to

- format（prettier）を当てる

```bash
$ npm run format:fix
```

- format（eslint）を当てる

```bash
$ npm run lint:js:fix
```

## Troubleshoot

- なし

## その他ドキュメント

See [Configuration Reference](https://react.dev/).

## 全体のディレクトリ構成図

```
src/
├─ @types/
├─ assets/
├─ components/ # 機能に依存しないComponent
├─ features/ # 機能に依存するComponentやHookなど
├─ functions/ # 機能に依存しない関数
├─ pages/
├─ providers/
├─ routers/
├─ app.tsx # Next.jsの場合はpages/app.tsx
```

## components ディレクトリ

```
components/
├─ buttons/ # アプリケーション全体で使う共通コンポーネントを置く（button系）
│  └─ Button
│     ├─ index.stories.tsx
│     └─ index.tsx
├─ elements/ # アプリケーション全体で使う共通コンポーネントを置く（その他）
│  └─ Snackbar
│     ├─ index.stories.tsx
│     └─ index.tsx
├─ forms/ # アプリケーション全体で使う共通コンポーネントを置く（form系）
│  ├─ InputText/
│  ├─ InputSelect/
│  ├─ InputCheckbox/
│  └─ ...
├─ modals/ # アプリケーション全体で使う共通コンポーネントを置く（modal系）
│  └─ Modal
│     ├─ index.stories.tsx
│     └─ index.tsx
└─ layouts/ # アプリケーション全体で使うレイアウトコンポーネントを置く
      └─ Header
         ├─ index.stories.tsx
         └─ index.tsx
```

## functions ディレクトリ

```
functions/
├─ constants/ # アプリケーション全体で使う定数を置く
├─ libs/ # アプリケーション全体で使うライブラリのラッパー関数を置く
├─ helpers/ # アプリケーション全体で使う純粋関数を置く
│     └─ cleanInput/ 
│        ├─ index.test.ts
│        └─ index.ts
├─ hooks/ # アプリケーション全体で使うhooksを置く
│     └─ useDisclosure/ 
│        ├─ index.test.ts
│        └─ index.ts
├─ themes/ # アプリケーション全体で使うスタイルを置く
├─ types/ # アプリケーション全体で使う型定義を置く
```

## featuresディレクトリ

```
features/
├─ Todo/
│  ├─ TodoCreate/ # やること作成
│  ├─ TodoEdit/ # やること編集
│  ├─ Todo/ # やること詳細
│  └─ Todos/ # やること一覧
│     ├─ components/ # presentation（複数入ることを想定）
│     ├─ hooks/ # logic（複数入ることを想定）
│     ├─ styles/ # style（複数入ることを想定）
│     ├─ tests/ # test（複数入ることを想定）
│     ├─ todos.schema.ts # 必要であれば追加
│     ├─ todos.type.ts
│     └─ index.tsx # container（最終的にエクスポートする）
└─...
```