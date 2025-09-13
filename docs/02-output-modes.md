# 出力形式: StaticとServer

Astroはデフォルトで静的HTMLを生成します。必要に応じて`export const prerender = false`を指定することで特定ページをSSRに切り替えられます。

## Static出力
- CDNや静的ホスティングにデプロイ
- ブログやドキュメント向き

## Server出力
- リクエストごとにHTMLを生成
- ユーザー認証やリアルタイムデータに対応
