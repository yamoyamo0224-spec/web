<html lang="ja">
<head>
<meta charset="UTF-8">
<title>やもweb!</title>
<link rel="icon" href="https://www.minecraft.net/ja-jp">

<style>

/* 背景 */
body{
 margin:0;
 font-family:Arial, sans-serif;
 color:white;

 background-image:url('https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=2070&auto=format&fit=crop');
 background-size:cover;
 background-attachment:fixed;

 padding-left:240px;
 padding-top:260px;
}

/* Discordスタッツ */
#discord {
 position:fixed;
 top:0;
 left:0;
 width:100%;
 text-align:center;

 background:rgba(0,0,0,0.55);
 padding:10px;

 z-index:9999;
}

#discord img{
    width:200px;              /* 横長っぽくする */
    height:auto;
    border:3px solid white;  /* 枠 */
    border-radius:10px;      /* 角丸 */
    background:rgba(0,0,0,0.4);
    padding:5px;
}

/* 左固定メニュー */
#toc {
 position:fixed;
 top:140px;
 left:0;

 width:220px;

 background:rgba(0,0,0,0.55);
 padding:15px;

 border-radius:0 8px 8px 0;

 z-index:9999;
}

#toc ul {
 list-style:none;
 margin:0;
 padding:0;
}

#toc li {
 margin:10px 0;
}

#toc a {
 color:#66ccff;
 text-decoration:none;
 font-size:18px;
}

#toc a:hover{
 text-decoration:underline;
}

/* セクション */
section {
 padding:30px;
 background:rgba(0,0,0,0.55);
 margin:40px;

 opacity:0;
 transform:translateX(-40px);

 animation:fade 0.7s forwards;

 scroll-margin-top:170px;
}

@keyframes fade {
 to {
  opacity:1;
  transform:translateX(0);
 }
}

footer{
 background:rgba(0,0,0,0.55);
 padding:20px;
}

</style>
</head>
<body>

<h1>やもweb!</h1>

<!-- Discord -->
<div id="discord">
<h2>🎮 Discordスタッツ</h2>

<img src="https://media1.tenor.com/m/CNBGgG2DU10AAAAC/nyan-cat-poptart.gif">

</div>

<!-- 左メニュー -->
<nav id="toc">
<ul>
 <li><a href="#intro">👤 自己紹介</a></li>
 <li><a href="#fn">🔥 フォートナイト</a></li>
 <li><a href="#mc">⛏️ マインクラフト</a></li>
 <li><a href="#discord">🎮 スタッツ</a></li>
 <li><a href="#contact">📩 お問い合わせ</a></li>
</ul>
</nav>

<!-- 自己紹介 -->
<section id="intro">
<h2>自己紹介</h2>
<p>名前 : yam0oo</p>
<p>
好きなゲーム :
<a href="https://www.fortnite.com/?lang=ja">フォートナイト</a>、
<a href="https://www.minecraft.net/ja-jp">マインクラフト</a>
</p>
</section>

<!-- フォートナイト -->
<section id="fn">
<h2>フォートナイト</h2>
<p>
フォートナイトは2017年発売のオンラインゲームです。
</p>
<p>
ブレインロットやってて<br>
総ドラゴン獲得数は10以上🔥
</p>
</section>

<!-- マインクラフト -->
<section id="mc">
<h2>マインクラフト</h2>
<p>
ブロックで自由に遊べるゲームです！
</p>
<p>
サーバーも作っています😊
</p>
</section>

<!-- お問い合わせ -->
<footer id="contact">
</footer>

</body>
</html>
