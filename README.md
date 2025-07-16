# WeatherSurvive ☀️🌧️

リアルタイムの天気情報を使ってサバイバルを行う、ターン制ミニゲームです。  
天気に応じてスタミナの消費が変化し、プレイヤーはHPを守りながらマップを移動して生き残ります。

---

## 🎮 ゲーム概要

- 実際の都市の天気（OpenWeatherMap API）に基づいてスタミナや移動の難易度が変化
- 3×3 のマップを移動しながらターンを進める
- スタミナが0になるとHPが減少
- 雨の日はスタミナの消費が多くなる
- 生き延びたターン数を記録

---

## 🖥️ 動作環境

- **対応ブラウザ**：Google Chrome、Microsoft Edge、Firefox、Safari（最新版）
- **動作プラットフォーム**：Windows / macOS / Linux（ブラウザが動けばOK）

---

## 🧰 開発環境

- Visual Studio Code
- Live Server 拡張
- ローカルHTML/CSS/JS構成

---

## 💻 使用技術

| 技術 | 用途 |
|------|------|
| HTML | ゲーム画面の構造 |
| CSS  | スタイリング、レイアウト |
| JavaScript | ロジック、天気API連携、移動・状態制御 |
| OpenWeatherMap API | 天気データの取得 |

---

## 🚀 実行方法

1. 本リポジトリをクローン or ZIPダウンロード
2. `index.html`, `style.css`, `script.js` を同一フォルダに置く
3. `script.js` 内の `API_KEY` に自分の OpenWeatherMap API キーを記入
4. `index.html` をブラウザで開く（Live Server 推奨）

```js
// script.js 内
const API_KEY = "ここに自分のAPIキーを入力";
