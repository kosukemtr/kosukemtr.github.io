これは御手洗研究室ホームページのソースです。Jekyll の [Minima](https://github.com/jekyll/minima) をベースに使っています。

## ニュースの更新
`/_posts/` 以下に新しいマークダウンファイルを作成します。

## 静的ページ
- `/index.md`: トップページです。
- `/about.md`: 研究室のテーマなどについて
- `/publications.md`: 発表論文リスト
- `/members.md`: メンバーリスト

## 自動更新について
- `/.github/workflows/update_publication.yml` によって [ResearchMap の情報](https://researchmap.jp/kosuke-mitarai) を自動的に取得して、publications.md が更新されるようになっています。


