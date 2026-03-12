<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>国バトルserver — 公式サイト</title>
<link href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&family=M+PLUS+1p:wght@300;400;700;900&family=Rajdhani:wght@500;700&display=swap" rel="stylesheet">
<style>
:root {
  --red:    #e53e3e;
  --red2:   #c0392b;
  --gold:   #f6c90e;
  --gold2:  #d4a017;
  --dark:   #0a0b0f;
  --dark2:  #10121a;
  --dark3:  #161925;
  --glass:  rgba(255,255,255,0.04);
  --glassh: rgba(255,255,255,0.07);
  --border: rgba(255,255,255,0.07);
  --borderl:rgba(230,60,60,0.25);
  --text:   #e8e0d0;
  --muted:  #6b7280;
  --heading:'Rajdhani',sans-serif;
  --jp:     'Zen Antique Soft',serif;
  --body:   'M PLUS 1p',sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--dark);color:var(--text);font-family:var(--body);overflow-x:hidden;min-height:100vh;}

/* ── CANVAS BG ── */
#bgCanvas{position:fixed;inset:0;z-index:0;opacity:.35;pointer-events:none;}

/* scanlines */
body::after{content:'';position:fixed;inset:0;z-index:1;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.08) 3px,rgba(0,0,0,.08) 4px);pointer-events:none;}

::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:var(--dark2);}::-webkit-scrollbar-thumb{background:var(--red);border-radius:3px;}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;height:62px;display:flex;align-items:center;justify-content:space-between;padding:0 44px;background:rgba(10,11,15,.9);backdrop-filter:blur(18px);border-bottom:1px solid var(--borderl);}
.nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;cursor:pointer;}
.nav-logo-icon{width:36px;height:36px;position:relative;flex-shrink:0;}
.nav-logo-icon svg{width:36px;height:36px;}
.nav-logo-text{font-family:var(--jp);font-size:16px;color:#fff;letter-spacing:2px;text-shadow:0 0 14px rgba(230,60,60,.6);}
.nav-links{display:flex;gap:28px;list-style:none;}
.nav-links a{font-family:var(--heading);font-size:13px;letter-spacing:2px;color:var(--muted);text-decoration:none;transition:color .2s;position:relative;}
.nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:1px;background:var(--red);transform:scaleX(0);transition:transform .25s;}
.nav-links a:hover{color:var(--gold);}.nav-links a:hover::after{transform:scaleX(1);}
.nav-join{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--red2),var(--red));color:#fff;font-family:var(--heading);font-size:12px;letter-spacing:2px;padding:9px 22px;border-radius:4px;text-decoration:none;transition:all .2s;box-shadow:0 0 18px rgba(229,62,62,.35);}
.nav-join:hover{opacity:.88;transform:translateY(-1px);box-shadow:0 0 28px rgba(229,62,62,.5);}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;}
.hamburger span{width:22px;height:2px;background:var(--muted);border-radius:2px;transition:all .3s;}
.mobile-menu{display:none;position:fixed;top:62px;left:0;right:0;z-index:199;background:rgba(10,11,15,.98);backdrop-filter:blur(18px);border-bottom:1px solid var(--borderl);flex-direction:column;padding:16px 24px 24px;}
.mobile-menu.open{display:flex;}
.mobile-menu a{color:var(--muted);text-decoration:none;font-family:var(--heading);font-size:14px;letter-spacing:2px;padding:14px 0;border-bottom:1px solid var(--border);transition:color .2s;}
.mobile-menu a:last-child{border-bottom:none;}.mobile-menu a:hover{color:var(--gold);}

/* ── SECTIONS ── */
.page-section{display:none;position:relative;z-index:10;min-height:100vh;padding:110px 44px 80px;max-width:1040px;margin:0 auto;animation:fadeUp .45s ease both;}
.page-section.active{display:block;}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}

/* ── HERO ── */
.hero-tag{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--borderl);background:rgba(229,62,62,.07);padding:6px 18px;border-radius:2px;font-family:var(--heading);font-size:12px;letter-spacing:3px;color:var(--red);margin-bottom:32px;}
.live-dot{width:7px;height:7px;background:var(--red);border-radius:50%;animation:blink 1.4s ease-in-out infinite;}
@keyframes blink{0%,100%{opacity:1;box-shadow:0 0 6px var(--red)}50%{opacity:.3;box-shadow:none}}

.hero-title{font-family:var(--jp);font-size:clamp(36px,6vw,80px);color:#fff;line-height:1.1;margin-bottom:20px;text-shadow:0 0 40px rgba(229,62,62,.4),2px 2px 0 rgba(0,0,0,.8);}
.hero-title .slash{color:var(--red);margin:0 6px;}
.hero-title .gold{color:var(--gold);text-shadow:0 0 30px rgba(246,201,14,.4),2px 2px 0 rgba(0,0,0,.8);}

.hero-sub{font-size:14px;color:var(--muted);line-height:2;max-width:540px;margin-bottom:44px;font-weight:300;letter-spacing:.5px;}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:64px;}

.btn-war{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--red2),var(--red));color:#fff;font-family:var(--heading);font-size:13px;letter-spacing:2px;padding:14px 34px;border-radius:4px;text-decoration:none;border:none;cursor:pointer;transition:all .25s;box-shadow:0 0 28px rgba(229,62,62,.35),0 4px 14px rgba(0,0,0,.5);}
.btn-war:hover{transform:translateY(-2px);box-shadow:0 0 44px rgba(229,62,62,.55),0 6px 20px rgba(0,0,0,.5);}
.btn-ghost{display:inline-flex;align-items:center;gap:10px;background:transparent;color:var(--text);font-family:var(--heading);font-size:13px;letter-spacing:2px;padding:13px 32px;border-radius:4px;text-decoration:none;border:1px solid var(--borderl);cursor:pointer;transition:all .25s;}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold);background:rgba(246,201,14,.06);}

/* nation cards */
.nations-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-bottom:48px;}
.nation-card{background:var(--glass);border:1px solid var(--border);border-radius:6px;padding:24px 20px;text-align:center;transition:all .3s;cursor:default;position:relative;overflow:hidden;}
.nation-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--nc1,transparent),var(--nc2,transparent));opacity:0;transition:opacity .3s;}
.nation-card:hover{transform:translateY(-4px);border-color:var(--gold);}.nation-card:hover::before{opacity:.08;}
.nation-flag{font-size:38px;margin-bottom:12px;display:block;}
.nation-name{font-family:var(--jp);font-size:15px;color:#fff;margin-bottom:6px;}
.nation-power{font-family:var(--heading);font-size:11px;letter-spacing:2px;color:var(--muted);}
.nation-bar{height:3px;background:var(--border);border-radius:2px;margin-top:10px;overflow:hidden;}
.nation-bar-fill{height:100%;background:linear-gradient(90deg,var(--red),var(--gold));border-radius:2px;transition:width 1.2s ease;}

.war-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:8px;}
.wstat{background:var(--glass);border:1px solid var(--border);border-radius:6px;padding:20px 14px;text-align:center;}
.wstat-num{font-family:var(--heading);font-size:26px;font-weight:700;color:var(--gold);display:block;text-shadow:0 0 16px rgba(246,201,14,.4);}
.wstat-label{font-size:10px;color:var(--muted);letter-spacing:2px;margin-top:4px;display:block;}

/* ── SECTION HEAD ── */
.sec-label{font-family:var(--heading);font-size:10px;letter-spacing:4px;color:var(--red);margin-bottom:10px;display:flex;align-items:center;gap:12px;}
.sec-label::after{content:'';flex:1;height:1px;background:var(--borderl);}
.sec-title{font-family:var(--jp);font-size:clamp(22px,3.5vw,38px);color:#fff;margin-bottom:44px;line-height:1.3;text-shadow:0 0 20px rgba(229,62,62,.2);}

/* ── RULES ── */
.rule-tabs{display:flex;gap:8px;margin-bottom:28px;flex-wrap:wrap;}
.rtab{background:var(--glass);border:1px solid var(--border);color:var(--muted);font-family:var(--heading);font-size:11px;letter-spacing:1.5px;padding:8px 18px;border-radius:3px;cursor:pointer;transition:all .2s;}
.rtab:hover,.rtab.active{background:rgba(229,62,62,.12);border-color:var(--red);color:var(--red);}
.rule-panel{display:none;animation:fadeUp .3s ease;}.rule-panel.active{display:block;}
.rule-block{background:var(--glass);border:1px solid var(--border);border-left:3px solid var(--red);border-radius:0 6px 6px 0;padding:20px 24px 20px 48px;margin-bottom:10px;position:relative;}
.rule-block::before{content:attr(data-num);position:absolute;left:14px;top:20px;font-family:var(--heading);font-size:9px;color:var(--red);opacity:.7;letter-spacing:1px;}
.rule-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:7px;}
.rule-body{font-size:13px;color:var(--muted);line-height:1.9;font-weight:300;}
.penalty-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px;}
.pen{background:var(--glass);border:1px solid var(--border);border-radius:6px;padding:18px;text-align:center;}
.pen-icon{font-size:26px;margin-bottom:8px;}.pen-name{font-family:var(--heading);font-size:10px;letter-spacing:2px;margin-bottom:6px;}.pen-desc{font-size:11px;color:var(--muted);line-height:1.7;}
.pen.t1{border-color:rgba(246,201,14,.3);}.pen.t1 .pen-name{color:var(--gold);}
.pen.t2{border-color:rgba(229,62,62,.3);}.pen.t2 .pen-name{color:var(--red);}
.pen.t3{border-color:rgba(200,30,30,.5);}.pen.t3 .pen-name{color:#ff6b6b;}

/* ── TEAM ── */
.role-section{margin-bottom:44px;}
.role-head{display:flex;align-items:center;gap:12px;font-family:var(--heading);font-size:10px;letter-spacing:3px;color:var(--muted);margin-bottom:16px;}
.role-head span{height:1px;flex:1;background:var(--border);}
.member-row{display:flex;flex-wrap:wrap;gap:10px;}
.mcard{background:var(--glass);border:1px solid var(--border);border-radius:6px;padding:16px 20px;display:flex;align-items:center;gap:14px;min-width:190px;transition:all .25s;}
.mcard:hover{border-color:var(--borderl);background:var(--glassh);transform:translateY(-2px);}
.mav{width:42px;height:42px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;background:linear-gradient(135deg,var(--red2),#6b0000);}
.mname{font-size:13px;font-weight:700;color:#fff;margin-bottom:4px;}
.mbadge{display:inline-block;font-family:var(--heading);font-size:9px;letter-spacing:1.5px;padding:2px 8px;border-radius:2px;background:rgba(255,255,255,.05);color:var(--bc,var(--muted));border:1px solid rgba(255,255,255,.07);}
.divl{height:1px;background:var(--border);margin:28px 0;}

/* ── STATUS / STATS ── */
.stat-card{background:var(--glass);border:1px solid var(--border);border-radius:8px;padding:28px;margin-bottom:14px;backdrop-filter:blur(8px);}
.stat-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;flex-wrap:wrap;gap:12px;}
.stat-head-title{font-family:var(--heading);font-size:12px;letter-spacing:2px;color:#fff;}
.online-badge{display:flex;align-items:center;gap:8px;font-family:var(--heading);font-size:10px;letter-spacing:1.5px;color:#4ade80;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);padding:5px 14px;border-radius:20px;}
.info-tbl{width:100%;border-collapse:collapse;}
.info-tbl tr{border-bottom:1px solid var(--border);}.info-tbl tr:last-child{border-bottom:none;}
.info-tbl td{padding:13px 0;font-size:13px;}
.info-tbl td:first-child{color:var(--muted);width:150px;font-weight:700;letter-spacing:.5px;}
.act-wrap{margin-top:28px;}
.act-label{font-family:var(--heading);font-size:10px;letter-spacing:2px;color:var(--muted);margin-bottom:10px;}
.act-bars{display:flex;gap:4px;}
.act-col{flex:1;}
.act-bar{height:44px;background:rgba(229,62,62,.07);border:1px solid var(--border);border-radius:3px;position:relative;overflow:hidden;}
.act-bar::after{content:'';position:absolute;bottom:0;left:0;right:0;background:linear-gradient(180deg,transparent,rgba(229,62,62,.55));height:var(--h,0%);border-radius:2px;}
.act-lbl{font-family:var(--heading);font-size:9px;color:var(--muted);text-align:center;margin-top:4px;letter-spacing:.5px;}

/* Discord widget */
.discord-widget-wrap{border-radius:8px;overflow:hidden;border:1px solid var(--borderl);margin-top:8px;}

/* ── CONTACT / LOGIN ── */
.contact-state{transition:opacity .3s;}
.login-box{max-width:480px;}
.login-hero{background:linear-gradient(135deg,rgba(229,62,62,.1),rgba(0,0,0,0));border:1px solid var(--borderl);border-radius:8px;padding:32px 28px;margin-bottom:28px;text-align:center;}
.login-icon{font-size:48px;margin-bottom:16px;}
.login-title{font-family:var(--jp);font-size:20px;color:#fff;margin-bottom:8px;}
.login-desc{font-size:13px;color:var(--muted);line-height:1.8;}
.login-methods{display:flex;flex-direction:column;gap:12px;}
.login-btn{display:flex;align-items:center;gap:14px;padding:14px 22px;border-radius:6px;border:1px solid var(--border);background:var(--glass);color:var(--text);font-size:14px;font-weight:700;cursor:pointer;transition:all .25s;font-family:var(--body);text-decoration:none;width:100%;}
.login-btn:hover{background:var(--glassh);border-color:rgba(255,255,255,.14);transform:translateX(4px);}
.login-btn.discord{border-color:rgba(88,101,242,.4);background:rgba(88,101,242,.08);}
.login-btn.discord:hover{border-color:rgba(88,101,242,.7);background:rgba(88,101,242,.15);}
.login-btn-icon{width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.login-btn-text{display:flex;flex-direction:column;gap:2px;text-align:left;}
.login-btn-main{font-size:14px;color:#fff;}
.login-btn-sub{font-size:11px;color:var(--muted);font-weight:400;}

/* logged-in form */
.contact-form-wrap{max-width:600px;display:none;}
.contact-form-wrap.visible{display:block;}
.user-info-bar{display:flex;align-items:center;gap:14px;background:rgba(88,101,242,.08);border:1px solid rgba(88,101,242,.25);border-radius:8px;padding:14px 20px;margin-bottom:28px;}
.user-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#5865f2,#7289da);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.user-name{font-size:14px;font-weight:700;color:#fff;}
.user-sub{font-size:11px;color:var(--muted);}
.logout-btn{margin-left:auto;background:none;border:1px solid var(--border);color:var(--muted);font-size:11px;font-family:var(--body);padding:5px 14px;border-radius:4px;cursor:pointer;transition:all .2s;}
.logout-btn:hover{border-color:var(--red);color:var(--red);}

.form-group{margin-bottom:18px;}
.form-label{font-family:var(--heading);font-size:11px;letter-spacing:2px;color:var(--muted);margin-bottom:8px;display:block;}
.form-input,.form-textarea,.form-select{width:100%;background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:var(--body);font-size:14px;padding:12px 16px;outline:none;transition:border-color .2s;}
.form-textarea{resize:vertical;min-height:130px;}
.form-input:focus,.form-textarea:focus,.form-select:focus{border-color:var(--red);}
.form-select option{background:#16192a;}

/* ── PRIVACY ── */
.priv-block{background:var(--glass);border:1px solid var(--border);border-left:3px solid var(--gold);border-radius:0 6px 6px 0;padding:24px 28px;margin-bottom:12px;}
.priv-num{font-family:var(--heading);font-size:9px;color:var(--gold);letter-spacing:2px;margin-bottom:8px;}
.priv-title{font-size:15px;font-weight:700;color:#fff;margin-bottom:10px;}
.priv-body{font-size:13px;color:var(--muted);line-height:1.9;font-weight:300;}

/* ── FOOTER ── */
footer{position:relative;z-index:10;border-top:1px solid var(--borderl);padding:28px 44px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;}
.footer-logo{font-family:var(--jp);font-size:13px;color:var(--muted);letter-spacing:2px;}
.footer-links{display:flex;gap:22px;}
.footer-links a{font-family:var(--heading);font-size:11px;color:var(--muted);text-decoration:none;letter-spacing:1.5px;transition:color .2s;}
.footer-links a:hover{color:var(--text);}
.footer-copy{font-size:11px;color:var(--muted);}

/* toast */
.toast{position:fixed;bottom:32px;right:32px;z-index:999;background:var(--dark3);border:1px solid var(--borderl);border-radius:6px;padding:14px 22px;font-size:13px;color:var(--text);display:flex;align-items:center;gap:10px;transform:translateY(80px);opacity:0;transition:all .4s;pointer-events:none;box-shadow:0 8px 28px rgba(0,0,0,.6);}
.toast.show{transform:translateY(0);opacity:1;}

@media(max-width:700px){
  nav{padding:0 18px;}.nav-links,.nav-join{display:none;}.hamburger{display:flex;}
  .page-section{padding:90px 18px 60px;}.war-stats{grid-template-columns:repeat(2,1fr);}.penalty-row{grid-template-columns:1fr;}
  footer{padding:22px 18px;flex-direction:column;text-align:center;}
}
</style>
</head>
<body>
<canvas id="bgCanvas"></canvas>

<!-- NAV -->
<nav>
  <a class="nav-logo" onclick="show('home')">
    <div class="nav-logo-icon">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="rgba(229,62,62,0.15)" stroke="#e53e3e" stroke-width="1.5"/>
        <polygon points="18,7 29,13 29,23 18,29 7,23 7,13" fill="rgba(246,201,14,0.1)" stroke="#f6c90e" stroke-width="1"/>
        <line x1="18" y1="2" x2="18" y2="34" stroke="#e53e3e" stroke-width=".8" opacity=".5"/>
        <line x1="2" y1="10" x2="34" y2="26" stroke="#e53e3e" stroke-width=".8" opacity=".5"/>
        <line x1="34" y1="10" x2="2" y2="26" stroke="#e53e3e" stroke-width=".8" opacity=".5"/>
        <circle cx="18" cy="18" r="3" fill="#f6c90e"/>
      </svg>
    </div>
    <span class="nav-logo-text">国バトルserver</span>
  </a>
  <ul class="nav-links">
    <li><a href="#" onclick="show('home');return false;">ホーム</a></li>
    <li><a href="#" onclick="show('rules');return false;">規約</a></li>
    <li><a href="#" onclick="show('team');return false;">運営</a></li>
    <li><a href="#" onclick="show('status');return false;">Stats</a></li>
    <li><a href="#" onclick="show('contact');return false;">連絡</a></li>
    <li><a href="#" onclick="show('privacy');return false;">プライバシー</a></li>
  </ul>
  <a class="nav-join" href="https://discord.gg/MhsbfM5c" target="_blank">⚔️ 参戦する</a>
  <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="#" onclick="show('home');closeMenu();return false;">ホーム</a>
  <a href="#" onclick="show('rules');closeMenu();return false;">規約</a>
  <a href="#" onclick="show('team');closeMenu();return false;">運営</a>
  <a href="#" onclick="show('status');closeMenu();return false;">Stats</a>
  <a href="#" onclick="show('contact');closeMenu();return false;">連絡</a>
  <a href="#" onclick="show('privacy');closeMenu();return false;">プライバシー</a>
  <a href="https://discord.gg/MhsbfM5c" target="_blank">⚔️ 参戦する</a>
</div>

<!-- ══ HOME ══ -->
<div id="sec-home" class="page-section active">
  <div class="hero-tag"><span class="live-dot"></span>BATTLE SERVER ONLINE</div>
  <h1 class="hero-title">国<span class="slash">×</span>国<br><span class="gold">頂上決戦</span></h1>
  <p class="hero-sub">国家を背負い、誇りをかけて戦え。国バトルserverは各国のプレイヤーが国家の代表として激突するPVPサーバーです。策略・同盟・裏切り——すべてが戦場で決まる。</p>
  <div class="hero-cta">
    <a class="btn-war" href="https://discord.gg/MhsbfM5c" target="_blank">⚔️ 今すぐ参戦</a>
    <button class="btn-ghost" onclick="show('rules')">📜 規約を確認</button>
  </div>


</div>

<!-- ══ RULES ══ -->
<div id="sec-rules" class="page-section">
  <div class="sec-label">WAR CODEX</div>
  <h2 class="sec-title">サーバー規約</h2>
  <div class="rule-tabs">
    <button class="rtab active" onclick="switchTab(this,'r1')">基本定義</button>
    <button class="rtab" onclick="switchTab(this,'r2')">禁止行為・罰則</button>
    <button class="rtab" onclick="switchTab(this,'r3')">PVPルール</button>
    <button class="rtab" onclick="switchTab(this,'r4')">権限体制</button>
  </div>
  <div id="r1" class="rule-panel active">
    <div class="rule-block" data-num="第一条"><div class="rule-title">規約の適用範囲</div><div class="rule-body">本規約は「国バトルserver」のすべてのチャンネル・VC・DMおよびゲーム内行動に適用されます。</div></div>
    <div class="rule-block" data-num="第二条"><div class="rule-title">同意の効力</div><div class="rule-body">サーバーに参加した時点で、本規約に同意したものとみなします。知らなかったは免責の理由になりません。</div></div>
    <div class="rule-block" data-num="第三条"><div class="rule-title">国家への所属</div><div class="rule-body">参加後は、国を設立するか国に参加するか放浪するか、をお選びください</div></div>
    <div class="rule-block" data-num="第四条"><div class="rule-title">規約の改定</div><div class="rule-body">規約は運営の合議により随時改定されます。改定は告知チャンネルで通知されます。</div></div>
  </div>
  <div id="r2" class="rule-panel">
    <div class="rule-block" data-num="禁止①"><div class="rule-title">暴言・差別・誹謗中傷</div><div class="rule-body">他プレイヤーへの人格攻撃・差別発言は一切容認しません。ゲーム内の煽りと現実の侮辱は区別します。</div></div>
    <div class="rule-block" data-num="禁止②"><div class="rule-title">チート・不正ツール使用</div><div class="rule-body">チート・ハック・マクロ等の不正ツール使用は即時永久BANです。</div></div>
    <div class="rule-block" data-num="禁止③"><div class="rule-title">スパム・荒らし行為</div><div class="rule-body">連続投稿・意味のないメンション・チャンネル妨害は禁止です。</div></div>
    <div class="rule-block" data-num="禁止④"><div class="rule-title">多重アカウント・なりすまし</div><div class="rule-body">複数アカウントによる参加や運営へのなりすましは即時BANです。</div></div>
    <div class="penalty-row">
      <div class="pen t1"><div class="pen-icon">⏱️</div><div class="pen-name">WARNING</div><div class="pen-desc">軽微な違反・初回</div></div>
      <div class="pen t2"><div class="pen-icon">👢</div><div class="pen-name">KICK / BAN</div><div class="pen-desc">累積・重度違反</div></div>
      <div class="pen t3"><div class="pen-icon">💀</div><div class="pen-name">PERM BAN</div><div class="pen-desc">チート・なりすまし</div></div>
    </div>
  </div>
  <div id="r3" class="rule-panel">
    <div class="rule-block" data-num="PVP①"><div class="rule-title">宣戦布告ルール</div><div class="rule-body">国家間の戦争は運営チャンネルにて宣戦布告を行った後に開始します。無断攻撃は無効とみなします。</div></div>
    <div class="rule-block" data-num="PVP②"><div class="rule-title">同盟・外交</div><div class="rule-body">国家間の同盟・条約は運営に報告し、公式に認定を受けることで有効となります。</div></div>
    <div class="rule-block" data-num="PVP③"><div class="rule-title">降伏・停戦</div><div class="rule-body">降伏・停戦の申し出は双方代表が運営立会いのもとで行います。</div></div>
    <div class="rule-block" data-num="PVP④"><div class="rule-title">スポーツマンシップ</div><div class="rule-body">勝敗にかかわらず相手への敬意を忘れずに。ゲーム内の激しい戦いとリアルの礼節は両立します。</div></div>
  </div>
  <div id="r4" class="rule-panel">
    <div class="rule-block" data-num="第十条"><div class="rule-title">オーナーの解任</div><div class="rule-body">アドミン過半数の賛成によりオーナーを解任できます。独裁運営の防止のための制度です。</div></div>
    <div class="rule-block" data-num="第十一条"><div class="rule-title">アドミンの解任</div><div class="rule-body">常連メンバー全員の賛成がある場合、アドミンを解任することができます。</div></div>
    <div class="rule-block" data-num="第十二条"><div class="rule-title">処分の透明性</div><div class="rule-body">すべての処分はログに記録され、関係者に開示されます。</div></div>
  </div>
</div>

<!-- ══ TEAM ══ -->
<div id="sec-team" class="page-section">
  <div class="sec-label">COMMAND</div>
  <h2 class="sec-title">運営チーム</h2>
  <div class="role-section">
    <div class="role-head">👑 <span></span> OWNER</div>
    <div class="member-row">
      <div class="mcard"><div class="mav">👑</div><div><div class="mname">やも</div><span class="mbadge" style="--bc:var(--gold)">OWNER</span></div></div>
    </div>
  </div>
  <div class="divl"></div>
  <div class="role-section">
    <div class="role-head">🛡️ <span></span> ADMIN</div>
    <div class="member-row">
      <div class="mcard"><div class="mav" style="background:linear-gradient(135deg,#1d4ed8,#1e3a8a)">🛡️</div><div><div class="mname">みなと</div><span class="mbadge" style="--bc:#60a5fa">ADMIN</span></div></div>
    </div>
  </div>
  <div class="divl"></div>
  <div class="role-section">
    <div class="role-head">⚔️ <span></span> MODERATOR</div>
    <div class="member-row">
      <div class="mcard"><div class="mav" style="background:linear-gradient(135deg,#065f46,#022c22)">⚔️</div><div><div class="mname">やも</div><span class="mbadge" style="--bc:#34d399">MOD</span></div></div>
    </div>
  </div>
  <div style="margin-top:28px;padding:14px 18px;background:rgba(229,62,62,.06);border:1px solid var(--borderl);border-radius:6px;font-size:12px;color:var(--muted);line-height:1.8;">
    ⚠️ &nbsp;運営メンバーは随時更新されます。最新情報は <a href="https://discord.gg/MhsbfM5c" target="_blank" style="color:var(--red);">Discordサーバー</a> でご確認ください。
  </div>
</div>

<!-- ══ STATUS ══ -->
<div id="sec-status" class="page-section">
  <div class="sec-label">BATTLEFIELD STATS</div>
  <h2 class="sec-title">サーバー動向</h2>

  <div class="stat-card">
    <div class="stat-head">
      <span class="stat-head-title">◈ SERVER INFO</span>
      <span class="online-badge"><span class="live-dot" style="background:#4ade80"></span>稼働中</span>
    </div>
    <table class="info-tbl">
      <tr><td>サーバー名</td><td>国バトルserver</td></tr>
      <tr><td>招待リンク</td><td><a href="https://discord.gg/MhsbfM5c" target="_blank" style="color:var(--red);text-decoration:none;">discord.gg/MhsbfM5c</a></td></tr>
      <tr><td>サーバーID</td><td style="font-family:monospace;font-size:12px;">MhsbfM5c</td></tr>
      <tr><td>ステータス</td><td style="color:#4ade80">✅ 正常動作中</td></tr>
    </table>
    <div class="act-wrap">
      <div class="act-label">WEEKLY BATTLE ACTIVITY</div>
      <div class="act-bars">
        <div class="act-col"><div class="act-bar" style="--h:45%"></div><div class="act-lbl">MON</div></div>
        <div class="act-col"><div class="act-bar" style="--h:60%"></div><div class="act-lbl">TUE</div></div>
        <div class="act-col"><div class="act-bar" style="--h:50%"></div><div class="act-lbl">WED</div></div>
        <div class="act-col"><div class="act-bar" style="--h:75%"></div><div class="act-lbl">THU</div></div>
        <div class="act-col"><div class="act-bar" style="--h:90%"></div><div class="act-lbl">FRI</div></div>
        <div class="act-col"><div class="act-bar" style="--h:100%"></div><div class="act-lbl">SAT</div></div>
        <div class="act-col"><div class="act-bar" style="--h:70%"></div><div class="act-lbl">SUN</div></div>
      </div>
    </div>
  </div>

  <!-- Discord Widget (live stats) -->
  <div class="stat-card">
    <div class="stat-head"><span class="stat-head-title">📡 DISCORD LIVE STATS</span></div>
    <div class="discord-widget-wrap">
      <iframe src="https://discord.com/widget?id=1481589508834201722&theme=dark"
        width="100%" height="400" allowtransparency="true" frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style="display:block;border:none;">
      </iframe>
    </div>
    <div style="margin-top:12px;font-size:11px;color:var(--muted);">※ リアルタイムのオンライン人数・メンバー情報はウィジェット上でご確認ください。</div>
  </div>
</div>

<!-- ══ CONTACT ══ -->
<div id="sec-contact" class="page-section">
  <div class="sec-label">DISPATCH</div>
  <h2 class="sec-title">お問い合わせ</h2>

  <div style="max-width:480px;">
    <div class="login-hero">
      <div class="login-icon">💬</div>
      <div class="login-title">Discordでお問い合わせ</div>
      <div class="login-desc">お問い合わせはDiscordサーバー内の専用チャンネルで受け付けています。<br>下のボタンからサーバーに参加し、運営までDMまたはチャンネルにてご連絡ください。</div>
    </div>
    <a class="login-btn discord" href="https://discord.gg/MhsbfM5c" target="_blank" style="justify-content:flex-start;">
      <div class="login-btn-icon" style="background:#5865f2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
      </div>
      <div class="login-btn-text">
        <span class="login-btn-main">Discordサーバーを開く</span>
        <span class="login-btn-sub">discord.gg/MhsbfM5c</span>
      </div>
    </a>
    <div style="margin-top:16px;padding:14px 18px;background:rgba(229,62,62,.06);border:1px solid var(--borderl);border-radius:6px;font-size:12px;color:var(--muted);line-height:1.9;">
      📩 &nbsp;メールでの連絡はこちら：<a href="mailto:yamoyamo0224@gmail.com" style="color:var(--red);text-decoration:none;">yamoyamo0224@gmail.com</a>
    </div>
  </div>
</div>

<!-- ══ PRIVACY ══ -->
<div id="sec-privacy" class="page-section">
  <div class="sec-label">PROTOCOL</div>
  <h2 class="sec-title">プライバシーポリシー</h2>
  <div class="priv-block"><div class="priv-num">01 / COLLECTION</div><div class="priv-title">収集する情報</div><div class="priv-body">お問い合わせ機能の利用時に、認証プロバイダーが提供するユーザー名・メールアドレス（任意）・送信内容を収集します。</div></div>
  <div class="priv-block"><div class="priv-num">02 / PURPOSE</div><div class="priv-title">利用目的</div><div class="priv-body">収集した情報はお問い合わせへの回答・サーバー安全管理（不正対策・本人確認等）の目的にのみ使用します。</div></div>
  <div class="priv-block"><div class="priv-num">03 / DISCLOSURE</div><div class="priv-title">情報の開示</div><div class="priv-body">送信内容はオーナー・アドミン・モデレーターのみが閲覧可能です。法令に基づく場合を除き第三者には提供しません。</div></div>
  <div class="priv-block"><div class="priv-num">04 / AUTH</div><div class="priv-title">外部認証サービスについて</div><div class="priv-body">DiscordおよびGoogleによる認証を利用します。各サービスにおける個人情報の取り扱いは各社のプライバシーポリシーに準拠します。</div></div>
  <div class="priv-block"><div class="priv-num">05 / DISCLAIMER</div><div class="priv-title">免責事項</div><div class="priv-body">本サイトからリンクされた外部サービスにおける個人情報の取り扱いについて当サーバーは責任を負いかねます。</div></div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">国バトルserver</div>
  <div class="footer-links">
    <a href="#" onclick="show('rules');return false;">規約</a>
    <a href="#" onclick="show('privacy');return false;">プライバシー</a>
    <a href="#" onclick="show('contact');return false;">連絡</a>
    <a href="https://discord.gg/MhsbfM5c" target="_blank">Discord</a>
  </div>
  <div class="footer-copy">© 2024–2026 国バトルserver</div>
</footer>

<div class="toast" id="toast">✅ &nbsp;送信しました！運営から返信をお待ちください。</div>

<script>
/* ── CANVAS particle bg ── */
(function(){
  const c=document.getElementById('bgCanvas');
  const ctx=c.getContext('2d');
  let W,H,particles=[];
  function resize(){W=c.width=innerWidth;H=c.height=innerHeight;}
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<60;i++) particles.push({x:Math.random()*1920,y:Math.random()*1080,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,op:Math.random()*.5+.1});
  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='rgba(229,62,62,0.12)';ctx.lineWidth=1;
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const d=Math.hypot(particles[i].x-particles[j].x,particles[i].y-particles[j].y);
        if(d<160){ctx.globalAlpha=(1-d/160)*.15;ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.stroke();}
      }
    }
    particles.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      ctx.globalAlpha=p.op;ctx.fillStyle='#e53e3e';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── NAV ── */
function show(id){
  document.querySelectorAll('.page-section').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById('sec-'+id);
  if(el){el.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
}
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open');}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open');}

/* ── RULE TABS ── */
function switchTab(btn,id){
  document.querySelectorAll('.rtab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.rule-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  const p=document.getElementById(id);if(p)p.classList.add('active');
}

/* ── MOCK LOGIN ── (replace with real OAuth in production) */
let currentUser=null;
const mockUsers={
  'Discord':{name:'Soldier#0000',via:'Discord',icon:'🎮'},
  'Google': {name:'user@gmail.com',via:'Google',icon:'G'},
};
function mockLogin(provider){
  const u=mockUsers[provider];
  currentUser=u;
  document.getElementById('login-view').style.display='none';
  const fv=document.getElementById('form-view');
  fv.classList.add('visible');
  document.getElementById('user-av-el').textContent=u.icon;
  document.getElementById('user-name-el').textContent=u.name;
  document.getElementById('user-via-el').textContent=u.via+' でログイン中';
}
function doLogout(){
  currentUser=null;
  document.getElementById('login-view').style.display='';
  const fv=document.getElementById('form-view');
  fv.classList.remove('visible');
}

/* ── SEND ── */
function handleSend(btn){
  const cat=document.getElementById('f-cat').value;
  const sub=document.getElementById('f-subject').value.trim();
  const msg=document.getElementById('f-msg').value.trim();
  const user=document.getElementById('user-name-el').textContent;
  const via=document.getElementById('user-via-el').textContent;
  if(!msg){alert('メッセージを入力してください。');return;}
  const subject=encodeURIComponent(`[国バトルserver] ${sub||cat||'お問い合わせ'}`);
  const body=encodeURIComponent(`【送信者】${user}（${via}）\n【カテゴリ】${cat||'未選択'}\n【件名】${sub||'なし'}\n\n${msg}`);
  window.location.href=`mailto:yamoyamo0224@gmail.com?subject=${subject}&body=${body}`;
}
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}
</script>
</body>
</html>
