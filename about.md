---
layout: page
title: About
permalink: /about/
---

量子コンピュータは特定の計算タスクを従来型のコンピュータよりも高速に実行できることが知られています。このグループでは、量子コンピュータの計算能力を使ってどのようなことができそうか、また量子コンピュータの力をさらに引き出すにはどうすればよいかを研究しています。

## 学生の受け入れについて
- 本グループでは現状各年度 2 名程度を受け入れられます。
- 学部から入る場合：「大阪大学基礎工学部電子物理科学科」に入学 → 2年次に「エレクトロニクスコース」を選択 → 4年次に当グループを希望という流れになります。
- 大学院から入る場合：「大阪大学大学院基礎工学研究科 システム創成専攻 電子光科学領域」を受験していただくことになります。

## グループに関する問い合わせ、訪問について
学生・企業問わず歓迎いたします！気軽に mitarai.kosuke.es＜at＞osaka-u.ac.jp に連絡いただければと思います。

## 研究環境について
- 博士課程学生・博士課程進学希望者には、RA 制度などを通して可能な限り経済的に支援します。
- 同領域の[藤井研究室](https://quantphys.org/wp/qinfp/)、また[大阪大学量子情報・量子生命研究センター (QIQB)](https://qiqb.osaka-u.ac.jp/) と緊密に連携します。学生部屋なども一部共有します。
- 潤沢なオンプレミス（古典）計算機環境があります。
- QIQB の超伝導量子コンピュータも利用可能です。
- 配属された学生には PC を貸与します。
- Slack, Overleaf, github などを使って情報共有を行っています。研究室内には可能な限り情報をオープンにします。

## 研究テーマについて

現在以下のような研究テーマを中心に活動しています。

### 量子シミュレーションのための量子アルゴリズム
![phase-estimation]({{ site.baseurl }}/assets/images/phase-estimation.svg)

量子コンピュータが最も得意とするのは、量子力学に従う物理系のシミュレーションです。従来型のコンピュータで量子的な重ね合わせ状態をシミュレートするには、一般に物理系のサイズに対して指数的な計算量が必要となってしまいますが、量子コンピュータであれば多項式の計算量でシミュレートできることが知られています。特に分子や物質の電子状態をシミュレートする量子化学計算（第一原理計算）は、産業的にも良く利用されている計算タスクであり、量子コンピュータの一番の応用先です。

- Kosuke Mitarai, Kiichiro Toyoizumi, Wataru Mizukami, Perturbation theory with quantum signal processing, Quantum **7**, 1000 (2023)
- Wataru Mizukami, Kosuke Mitarai, Yuya O. Nakagawa, Takahiro Yamamoto, Tennin Yan, Yu-ya Ohnishi, Orbital optimized unitary coupled cluster theory for quantum computer, Physical Review Research **2**, 033421 (2020)
- Kosuke Mitarai, Yuya O. Nakagawa, Wataru Mizukami, Theory of analytical energy derivatives for the variational quantum eigensolver, Physical Review Research **2**, 013129 (2020)

### 量子機械学習

![VQE-generated dataset]({{ site.baseurl }}/assets/images/tsne.jpg)

機械学習は目覚ましい成果を挙げながら社会実装が進んでいます。この機械学習という分野に量子コンピュータの計算能力を持ち込み、さらに高度化することはできるでしょうか？

- Takeru Kusumoto, Kosuke Mitarai, Keisuke Fujii, Masahiro Kitagawa, Makoto Negoro, Experimental quantum kernel trick with nuclear spins in a solid, npj Quantum Information **7**, 94 (2021)
- Kosuke Mitarai, Makoto Negoro, Masahiro Kitagawa, Keisuke Fujii, Quantum Circuit Learning, PHYSICAL REVIEW A **98**, 032309 (2018)

### NISQ/early-FTQC/FTQC に向けたアルゴリズム開発

<img src="/assets/images/qce.png" alt="Quadratic Clifford Expansion" height="auto" width="auto">

現在実現している量子コンピュータはどれも NISQ (noisy intermediate scale quantum) と呼ばれるデバイスで、環境からのノイズが取り除き切れていません。この影響で演算を行うたびにある一定の確率でエラーを起こしてしまいます。量子誤り訂正はノイズをほぼ完全に取り除くことができる技術ですが、その実現には多大なオーバーヘッドが必要で、例えば量子化学計算で実用的な計算をするには 100 万量子ビット程度の集積化が必要とされています。現実的には 100 万量子ビットに到達して、理想的な誤り耐性量子コンピュータ (FTQC) を実現する途上で、ある程度ノイズが取り除かれているがすべては取り除けていないようなデバイス (early-FTQC) が出現することが予想されます。このような状況から、NISQ上、あるいは early-FTQC で実行可能なアプリケーションの探索が重要です。

- Adam Siegel, Kosuke Mitarai, Keisuke Fujii, Algorithmic error mitigation for quantum eigenvalues estimation, arXiv:2308.03879 (2023)
- Keita Kanno, Masaya Kohda, Ryosuke Imai, Sho Koh, Kosuke Mitarai, Wataru Mizukami, Yuya O. Nakagawa, Quantum-Selected Configuration Interaction: classical diagonalization of Hamiltonians in subspaces selected by quantum computers, arXiv:2302.11320 (2023)
- Kosuke Mitarai, Yasunari Suzuki, Wataru Mizukami, Yuya O. Nakagawa, Keisuke Fujii, Quadratic Clifford expansion for efficient benchmarking and initialization of variational quantum algorithms, Physical Review Research 4, 033012 (2022)

