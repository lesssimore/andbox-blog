# ゆっきーの砂場

## 概要

ゆっきー(Yoshino-Yukitaro)のブログである[ゆっきーの砂場](https://yukky-sandbox.dev)のソースコードのリポジトリです。

## 主な使用技術

### パッケージ管理

- yarn v1 系

### メイン

- Astro v1.9.2
- tailwindcss v3.0.24

### テスト

- playwright v1.29.2

### リンター

- eslint v8.0.1
- prettier v2.8.2

### バックエンド SaaS

- microCMS

## ローカルでの使い方

### 必須

- microCMS のアカウント
- microCMS の API Key
- yarn 1 系

### 手順

#### Git Clone する

```shell
git clone git@github.com:Yoshino-Yukitaro/yukky-sandbox.git
```

#### 依存関係のインストール

```shell
cd yukky-sandbox
yarn
```

#### .env ファイルを追加、更新する

```shell
touch .env
echo "MICROCMS_SERVICE_DOMAIN=${microcmsのドメイン名(.microcms.ioを含まない)}" >> ./.env
echo "MICROCMS_API_KEY=${microcmsのAPI Key}" >> ./.env
```

#### 起動してみる

```shell
yarn run dev
```

`http://localhost:3000`にアクセス

## ご意見・質問など

[Github の issue](https://github.com/Yoshino-Yukitaro/yukky-sandbox/issues)にてお願いいたします。
