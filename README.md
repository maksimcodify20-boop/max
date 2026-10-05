```html
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="NOVA — современный цифровой проект">
<title>NOVA — новый уровень</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background: #050505;
    color: #fff;
    overflow-x: hidden;
}

/* ===== BACKGROUND ===== */

body::before {
    content: "";
    position: fixed;
    width: 650px;
    height: 650px;
    background: #7146ff;
    filter: blur(180px);
    opacity: .14;
    top: -300px;
    left: -250px;
    pointer-events: none;
    z-index: -1;
}

body::after {
    content: "";
    position: fixed;
    width: 600px;
    height: 600px;
    background: #00d9ff;
    filter: blur(180px);
    opacity: .09;
    right: -300px;
    bottom: -300px;
    pointer-events: none;
    z-index: -1;
}

/* ===== HEADER ===== */

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 18px 5%;
    background: rgba(5,5,5,.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,.06);
}

nav {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo span {
    color: #8b5cff;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 32px;
}

nav a {
    color: #999;
    text-decoration: none;
    font-size: 14px;
    transition: .3s;
}

nav a:hover {
    color: #fff;
}

.nav-button {
    padding: 11px 20px;
    border-radius: 100px;
    background: #fff;
    color: #000 !important;
    font-weight: 600;
}

/* ===== HERO ===== */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 130px 20px 80px;
}

.hero-content {
    max-width: 900px;
    animation: appear 1s ease;
}

.badge {
    display: inline-block;
    padding: 9px 15px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.04);
    border-radius: 100px;
    color: #aaa;
    font-size: 13px;
    margin-bottom: 25px;
}

.hero h1 {
    font-size: clamp(55px, 9vw, 110px);
    line-height: .95;
    letter-spacing: -6px;
    margin-bottom: 30px;
}

.gradient {
    background: linear-gradient(90deg, #fff, #9c72ff, #4de7ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero p {
    color: #999;
    max-width: 650px;
    margin: auto;
    font-size: 18px;
    line-height: 1.7;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 15px 25px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: .3s;
}

.btn-primary {
    color: #000;
    background: #fff;
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(255,255,255,.15);
}

.btn-secondary {
    color: #fff;
    border: 1px solid #333;
    background: rgba(255,255,255,.03);
}

.btn-secondary:hover {
    border-color: #777;
    transform: translateY(-4px);
}

/* ===== SECTIONS ===== */

section {
    padding: 110px 5%;
}

.container {
    max-width: 1150px;
    margin: auto;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;
}

.section-title small {
    color: #8b5cff;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 11px;
}

.section-title h2 {
    font-size: clamp(35px, 5vw, 60px);
    letter-spacing: -3px;
    margin-top: 12px;
}

.section-title p {
    color: #888;
    margin-top: 15px;
}

/* ===== CARDS ===== */

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.card {
    padding: 35px;
    min-height: 280px;
    border-radius: 25px;
    border: 1px solid rgba(255,255,255,.08);
    background: linear-gradient(
        145deg,
        rgba(255,255,255,.07),
        rgba(255,255,255,.02)
    );
    transition: .4s;
    position: relative;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-8px);
    border-color: rgba(255,255,255,.2);
}

.icon {
    width: 55px;
    height: 55px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.08);
    font-size: 25px;
    margin-bottom: 30px;
}

.card h3 {
    font-size: 22px;
    margin-bottom: 12px;
}

.card p {
    color: #888;
    line-height: 1.7;
}

/* ===== SHOWCASE ===== */

.showcase {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 30px;
    min-height: 450px;
    padding: 45px;
    background:
        radial-gradient(circle at 70% 20%, rgba(119,71,255,.25), transparent 30%),
        linear-gradient(145deg,#111,#070707);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.showcase-content {
    max-width: 560px;
    position: relative;
    z-index: 2;
}

.showcase h2 {
    font-size: 48px;
    letter-spacing: -3px;
    margin: 15px 0 20px;
}

.showcase p {
    color: #999;
    line-height: 1.7;
    margin-bottom: 30px;
}

.orb {
    position: absolute;
    right: 8%;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: linear-gradient(135deg,#fff,#794dff,#00d9ff);
    box-shadow:
        0 0 80px rgba(115,70,255,.5),
        inset -30px -30px 70px rgba(0,0,0,.4);
    animation: float 5s ease-in-out infinite;
}

/* ===== STATS ===== */

.stats {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    text-align: center;
}

.stat {
    padding: 35px 10px;
}

.stat h3 {
    font-size: 45px;
    letter-spacing: -2px;
}

.stat p {
    color: #777;
    margin-top: 8px;
}

/* ===== CONTACT ===== */

.contact-section {
    padding: 130px 20px;
}

.contact-box {
    max-width: 850px;
    margin: auto;
}

.contact-form {
    padding: 40px;
    border-radius: 30px;
    border: 1px solid rgba(255,255,255,.09);
    background:
        radial-gradient(circle at 20% 0%, rgba(120,70,255,.12), transparent 35%),
        rgba(255,255,255,.035);
    box-shadow: 0 30px 100px rgba(0,0,0,.35);
    backdrop-filter: blur(20px);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}

.form-group {
    margin-bottom: 22px;
}

.form-group label {
    display: block;
    margin-bottom: 9px;
    color: #bbb;
    font-size: 14px;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 17px 18px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,.1);
    outline: none;
    background: rgba(0,0,0,.25);
    color: white;
    font-family: inherit;
    font-size: 15px;
    transition: .3s;
}

.form-group textarea {
    resize: vertical;
    min-height: 160px;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #8b5cff;
    box-shadow: 0 0 25px rgba(139,92,255,.12);
    background: rgba(0,0,0,.35);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #555;
}

.send-button {
    width: 100%;
    padding: 17px;
    border: none;
    border-radius: 14px;
    background: #fff;
    color: #000;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: .3s;
}

.send-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255,255,255,.15);
}

.form-note {
    text-align: center;
    color: #666;
    font-size: 12px;
    margin-top: 15px;
}

/* ===== FOOTER ===== */

footer {
    padding: 40px 5%;
    border-top: 1px solid rgba(255,255,255,.07);
    color: #666;
}

.footer-inner {
    max-width: 1150px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

/* ===== ANIMATIONS ===== */

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%,100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-25px) rotate(8deg);
    }
}

/* ===== MOBILE ===== */

@media (max-width: 800px) {

    nav ul {
        display: none;
    }

    .cards {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: repeat(2,1fr);
    }

    .showcase {
        padding: 30px;
    }

    .showcase h2 {
        font-size: 38px;
    }

    .orb {
        opacity: .18;
        right: -80px;
    }
}

@media (max-width: 650px) {

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .contact-form {
        padding: 25px 20px;
    }
}

@media (max-width: 500px) {

    .hero h1 {
        letter-spacing: -3px;
    }

    .hero p {
        font-size: 16px;
    }

    section {
        padding: 80px 20px;
    }

    .stats {
        grid-template-columns: 1fr 1fr;
    }

    .stat h3 {
        font-size: 35px;
    }

    .footer-inner {
        flex-direction: column;
    }
}
</style>
</head>

<body>

<!-- ================= HEADER ================= -->

<header>

<nav>

    <div class="logo">
        NO<span>VA</span>
    </div>

    <ul>
        <li><a href="#about">О нас</a></li>
        <li><a href="#features">Возможности</a></li>
        <li><a href="#results">Результаты</a></li>
    </ul>

    <a href="#contact" class="nav-button">
        Написать нам
    </a>

</nav>

</header>


<!-- ================= HERO ================= -->

<section class="hero">

<div class="hero-content">

    <div class="badge">
        ✦ НОВОЕ ПОКОЛЕНИЕ ЦИФРОВЫХ РЕШЕНИЙ
    </div>

    <h1>
        Создаём<br>
        <span class="gradient">нечто большее.</span>
    </h1>

    <p>
        Красивый, быстрый и современный цифровой опыт,
        который превращает обычные идеи в нечто действительно впечатляющее.
    </p>

    <div class="buttons">

        <a href="#features" class="btn btn-primary">
            Узнать больше →
        </a>

        <a href="#contact" class="btn btn-secondary">
            Написать нам
        </a>

    </div>

</div>

</section>


<!-- ================= FEATURES ================= -->

<section id="features">

<div class="container">

<div class="section-title">

    <small>Возможности</small>

    <h2>
        Всё необходимое.
    </h2>

    <p>
        И ничего лишнего.
    </p>

</div>

<div class="cards">

    <div class="card">

        <div class="icon">⚡</div>

        <h3>
            Молниеносно
        </h3>

        <p>
            Быстрая загрузка и лёгкая архитектура,
            чтобы сайт работал максимально плавно.
        </p>

    </div>


    <div class="card">

        <div class="icon">◈</div>

        <h3>
            Современно
        </h3>

        <p>
            Премиальный дизайн, красивые градиенты,
            эффекты и плавные анимации.
        </p>

    </div>


    <div class="card">

        <div class="icon">∞</div>

        <h3>
            Адаптивно
        </h3>

        <p>
            Сайт автоматически подстраивается
            под компьютер, планшет и телефон.
        </p>

    </div>

</div>

</div>

</section>


<!-- ================= SHOWCASE ================= -->

<section id="about">

<div class="container">

<div class="showcase">

    <div class="showcase-content">

        <small style="color:#9b72ff;">
            ДРУГОЙ УРОВЕНЬ
        </small>

        <h2>
            Дизайн, который
            запоминается.
        </h2>

        <p>
            Мы объединяем технологичность, простоту и эстетику,
            чтобы создавать впечатления, к которым хочется
            возвращаться снова.
        </p>

        <a href="#contact" class="btn btn-primary">
            Создать свой проект
        </a>

    </div>

    <div class="orb"></div>

</div>

</div>

</section>


<!-- ================= STATS ================= -->

<section id="results">

<div class="container">

<div class="section-title">

    <small>Результаты</small>

    <h2>
        Цифры говорят сами.
    </h2>

</div>

<div class="stats">

    <div class="stat">
        <h3>99%</h3>
        <p>Удовлетворённость</p>
    </div>

    <div class="stat">
        <h3>10×</h3>
        <p>Быстрее обычного</p>
    </div>

    <div class="stat">
        <h3>24/7</h3>
        <p>Доступность</p>
    </div>

    <div class="stat">
        <h3>∞</h3>
        <p>Возможности</p>
    </div>

</div>

</div>

</section>


<!-- ================= CONTACT ================= -->

<section id="contact" class="contact-section">

<div class="container">

<div class="section-title">

    <small>
        СВЯЗЬ
    </small>

    <h2>
        Напиши нам.
    </h2>

    <p>
        Есть вопрос или идея?
        Отправь сообщение прямо с сайта.
    </p>

</div>


<div class="contact-box">

<form
    class="contact-form"
    action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
    method="POST"
>

    <!-- Настройки отправки -->

    <input
        type="hidden"
        name="_subject"
        value="Новое сообщение с сайта NOVA"
    >

    <input
        type="hidden"
        name="_captcha"
        value="false"
    >

    <input
        type="hidden"
        name="_template"
        value="table"
    >


    <!-- Имя + Email -->

    <div class="form-row">

        <div class="form-group">

            <label for="name">
                Имя
            </label>

            <input
                id="name"
                type="text"
                name="name"
                placeholder="Как тебя зовут?"
                required
            >

        </div>


        <div class="form-group">

            <label for="email">
                Email
            </label>

            <input
                id="email"
                type="email"
                name="email"
                placeholder="maksimcodify20@gmail.com"
                required
            >

        </div>

    </div>


    <!-- Сообщение -->

    <div class="form-group">

        <label for="message">
            Сообщение
        </label>

        <textarea
            id="message"
            name="message"
            placeholder="Напиши своё сообщение..."
            required
        ></textarea>

    </div>


    <!-- Кнопка -->

    <button
        type="submit"
        class="send-button"
    >
        Отправить сообщение →
    </button>


    <div class="form-note">
        Нажимая кнопку, ты отправляешь сообщение владельцу сайта.
    </div>

</form>

</div>

</div>

</section>


<!-- ================= FOOTER ================= -->

<footer>

<div class="footer-inner">

    <div>
        © 2026 NOVA
    </div>

    <div>
        Сделано с ❤️
    </div>

</div>

</footer>

</body>
</html>
```
