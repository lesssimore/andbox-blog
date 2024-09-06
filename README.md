# ゆっきーの砂場

## 概要

ゆっきー(Yoshino-Yukitaro)のブログである[ゆっきーの砂場](https://yukky-sandbox.dev)のソースコードのリポジトリです。

## 主な使用技術

### パッケージ管理

- pnpm 8.6.0

### メイン

- Astro v2.9.7
- tailwindcss v3.3.3

### テスト

- playwright v1.36.2

### リンター

- eslint v8.46.0
- prettier v2.8.8

### バックエンド SaaS

- microCMS

## ローカルでの使い方

### 必須

- microCMS のアカウント
- microCMS の API Key
- pnpm 8.6 系

### 手順

#### Git Clone する

```shell
git clone git@github.com:Yoshino-Yukitaro/yukky-sandbox.git
```

#### 依存関係のインストール

```shell
cd yukky-sandbox
pnpm i
```

#### .env ファイルを追加、更新する

```shell
touch .env
echo "MICROCMS_SERVICE_DOMAIN=${microcmsのドメイン名(.microcms.ioを含まない)}" >> ./.env
echo "MICROCMS_API_KEY=${microcmsのAPI Key}" >> ./.env
```

#### 起動してみる

```shell
pnpm run dev
```

`http://localhost:4321`にアクセス

## ご意見・質問など

[Github の issue](https://github.com/Yoshino-Yukitaro/yukky-sandbox/issues)にてお願いいたします。
# andbox-blog
