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

 padding-top:240px;
}

/* Discordスタッツ最上部 */
#discord {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  text-align:center;

  background:rgba(0,0,0,0.55);
  padding:10px;

  z-index:9999;
  backdrop-filter: blur(3px);
}

/* メニュー */
#toc {
  position:fixed;
  top:100px;
  left:0;
  width:100%;
  text-align:center;

  background:rgba(0,0,0,0.6);
  padding:10px;

  z-index:9999;
  backdrop-filter: blur(3px);
}

#toc ul {
  list-style:none;
  margin:0;
  padding:0;
}

#toc li {
  display:inline-block;
  margin:0 12px;
}

#toc a {
  color:#66ccff;
  text-decoration:none;
}

#toc a:hover {
  text-decoration:underline;
}

/* セクション */
section {
    padding:30px;
    background:rgba(0,0,0,0.55);
    margin:40px;

    opacity:0;
    transform:translateX(-50px);

    animation:slidein 0.8s ease-out forwards;

    /* メニューに隠れないようにする */
    scroll-margin-top:170px;
}

@keyframes slidein {
    from {
        opacity:0;
        transform:translateX(-50px);
    }
    to {
        opacity:1;
        transform:translateX(0);
    }
}

footer{
 padding:20px;
 background:rgba(0,0,0,0.55);
}

</style>
</head>
<body>

<h1>やもweb!</h1>

<!-- ✅ Discordスタッツ -->
<div id="discord">
<h2>🎮 Discord スタッツ</h2>

<!-- 表示されない場合に備えて alt も付けた -->
<img 
    src="https://discordstatus.com/api/v1/users/1096056322346197103.png"
    alt="Discordスタッツ"
    style="max-width:260px;">
</div>

<!-- ✅ メニュー -->
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
<p>好きなゲーム :
<a href="https://www.fortnite.com/?lang=ja">フォートナイト</a>、
<a href="https://www.minecraft.net/ja-jp">マインクラフト</a>
</p>
</section>

<!-- フォートナイト -->
<section id="fn">
<h2>フォートナイト</h2>

<p>
フォートナイトは2017年リリースのオンラインゲームです。
</p>

<p>
最近は <strong>ブレインロット</strong> をプレイ中🔥<br>
総ドラゴン獲得数は<strong>10以上</strong>です！！
</p>
</section>

<!-- マインクラフト -->
<section id="mc">
<h2>マインクラフト</h2>

<p>
Minecraftは自由度の高いサンドボックスゲームです。
</p>

<p>
サーバーも作っています！！<br>
参加待っています😊
</p>
</section>

<!-- お問い合わせ -->
<footer id="contact">
<p>📩 お問い合わせ： yamoyamo0224@gmail.com</p>
</footer>

</body>
</html>

