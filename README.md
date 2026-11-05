# 御手洗研究室ホームページ（旧リポジトリ）

> [!IMPORTANT]
> ホームページの更新先は **[mitarailab/mitarailab.github.io](https://github.com/mitarailab/mitarailab.github.io)** に移りました。
> **ニュースの追加・ページの修正・Pull Request（PR）は、移行先リポジトリでお願いします。**

## 学生の皆さんへ：記事を追加・修正するとき

1. [移行先リポジトリ](https://github.com/mitarailab/mitarailab.github.io)を開きます。Forkして作業する場合は、この移行先をForkしてください。
2. ニュースは移行先の [`_posts/`](https://github.com/mitarailab/mitarailab.github.io/tree/main/_posts) に `YYYY-MM-DD-記事名.md` を追加します。既存の記事を参考にしてください。
3. 編集後は、PRの提出先が **`mitarailab/mitarailab.github.io` の `main`** になっていることを確認してください。[移行先のPR一覧](https://github.com/mitarailab/mitarailab.github.io/pulls)

公開ホームページ：<https://mitarai.qc.ee.es.osaka-u.ac.jp/>

---

## 参考：旧リポジトリの説明

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


