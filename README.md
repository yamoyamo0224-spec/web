<!DOCTYPE html>
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

 padding-right:220px;   /* 右の目次と重ならないように余白 */
}

/* ✅ 右固定目次 */
#toc {
  position:fixed;
  top:20px;
  right:10px;
  width:200px;

  background:rgba(0,0,0,0.6);
  padding:10px;
  border-radius:6px;

  backdrop-filter: blur(3px); /* 少しおしゃれ効果 */
}

#toc ul {
  margin:0;
  padding-left:20px;
}

#toc a {
  color:#66ccff;
  text-decoration:none;
}

#toc a:hover {
  text-decoration:underline;
}

/* ✅ セクション（アニメーション変更） */
section{
 padding:20px;
 background:rgba(0,0,0,0.55);
 margin:10px;

 opacity:0;
 transform:translateX(-40px);  /* 左から入ってくる */
 animation:slidein 0.7s forwards;
}

/* 新アニメーション */
@keyframes slidein {
  to {
    opacity:1;
    transform:translateX(0);
  }
}

h1{padding:20px;}

footer{
 padding:20px;
 background:rgba(0,0,0,0.55);
}

</style>
</head>
<body>

<h1>やもweb!</h1>

<!-- ✅ 右固定目次 -->
<nav id="toc">
<h2>📘 目次</h2>
<ul>
 <li><a href="#intro">自己紹介</a></li>
 <li><a href="#fn">フォートナイト</a></li>
 <li><a href="#mc">マインクラフト</a></li>
</ul>
</nav>

<!-- ✅ 自己紹介 -->
<section id="intro">
<h2>自己紹介</h2>
<p>名前 : yam0oo</p>
<p>好きなゲーム :
<a href="https://www.fortnite.com/?lang=ja">フォートナイト</a>、
<a href="https://www.minecraft.net/ja-jp">マインクラフト</a>
</p>
</section>

<!-- ✅ フォートナイト -->
<section id="fn">
<h2>フォートナイト</h2>

<p>
フォートナイトは、2017年にリリースされたオンラインマルチプレイヤーゲームで、<br>
全世界で4億人以上の登録ユーザーを誇ります。<br>
プレイヤーは武器や資材を集めながら他プレイヤーと戦い、<br>
最後の一人（またはチーム）になることを目指すゲームです。
</p>

<p>
最近は <strong>ブレインロット</strong> をやっていて、<br>
総ドラゴン獲得数は<strong>10以上</strong>です🔥
</p>
</section>

<!-- ✅ マインクラフト -->
<section id="mc">
<h2>マインクラフト</h2>

<p>
Minecraft（マインクラフト）は、プレイヤーが自由にブロックを使って<br>
建築や探検を行うことができる3Dサンドボックスゲームです。<br>
無限に広がる世界で、自分だけの建物を作ったり、冒険したり、<br>
モンスターと戦ったりできる自由度の高いゲームです。
</p>

<p>
マイクラではサーバーを作成しています！！<br>
参加も待っています😊
</p>

</section>

<footer>
<p>お問い合わせ： yamoyamo0224@gmail.com</p>
</footer>

</body>
</html>
