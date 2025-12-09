<html lang="ja">
<head>
<meta charset="UTF-8">
<title>やもweb!</title>
<link rel="icon" href="https://www.minecraft.net/ja-jp">

<style>

/* 背景・基本 */
body{
 margin:0;
 font-family:Arial, sans-serif;
 color:white;
 background-image:url('https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=2070&auto=format&fit=crop');
 background-size:cover;
 background-attachment:fixed;
}

/* 目次 */
#toc {
  background:rgba(0,0,0,0.6);
  padding:10px;
  margin:10px;
  border-radius:6px;
}

#toc ul {
  margin:0;
  padding-left:20px;
}

#toc a {
  color:#66ccff;
}

/* セクション */
section{
 padding:20px;
 background:rgba(0,0,0,0.55);
 margin:10px;

 /* ↓ アニメーション追加 */
 opacity:0;
 transform:translateY(20px);
 animation:fadein 0.8s forwards;
}

/* fade-inアニメーション */
@keyframes fadein {
  to {
    opacity:1;
    transform:translateY(0);
  }
}

h1{padding:20px;}

footer{
 padding:20px;
 background:rgba(0,0,0,0.55);
}

/* 目次クリック用カーソル */
#toc a {
  text-decoration:none;
}

#toc a:hover {
  text-decoration:underline;
}

</style>
</head>
<body>

<h1>やもweb!</h1>

<!-- ✅ 目次追加 -->
<nav id="toc">
<h2>📘 目次</h2>
<ul>
 <li><a href="#intro">自己紹介</a></li>
 <li><a href="#fn">フォートナイト</a></li>
 <li><a href="#mc">マインクラフト</a></li>
</ul>
</nav>

<!-- ✅ セクションに id を追加（目次リンク用） -->
<section id="intro">
<h2>自己紹介</h2>
<p>名前 : yam0oo</p>
<p>好きなゲーム :
<a href="https://www.fortnite.com/?lang=ja">フォートナイト</a>、
<a href="https://www.minecraft.net/ja-jp">マインクラフト</a>
</p>
</section>

<section id="fn">
<h2>フォートナイト</h2>
<p>
フォートナイトでは最近ブレインロットをやっています<br>
総ドラゴン獲得数10以上です！！
</p>
</section>

<section id="mc">
<h2>マインクラフト</h2>
<p>
マイクラではサーバーを作成しています！！<br>
参加も待っています！！
</p>
</section>

<footer>
<p>お問い合わせ： yamoyamo0224@gmail.com</p>
</footer>

</body>
</html>
