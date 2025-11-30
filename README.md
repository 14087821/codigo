<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Miner PSP 45S</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <div id="game-container">
        <div id="stats">
            <h2>Puntos de Hash: <span id="hash-count">0</span></h2>
            <p>Generación Pasiva: <span id="hash-per-second">1</span> H/s</p>
        </div>

        <button id="click-button">
            💰 MINAR BITCOIN 💰
        </button>

        <div id="upgrades">
            <h3>Terminal de Mejoras (PSP 45S)</h3>
            <button id="upgrade-button" onclick="buyUpgrade()">
                Comprar PSP 45S (Nivel 1) - Costo: 1000 H
            </button>
        </div>

        <div id="faucet-link">
            <p>¡Alcanza 100000 Puntos para activar el retiro de Satoshis reales!</p>
            <a href="TU_ENLACE_A_FAUCET_O_SITIO_DE_RETIRO.com" id="withdraw-link" style="display:none;">**💸 RETIRAR SATOSHIS**</a>
        </div>
    </div>
    
    <script src="scrip.js"></script> 
</body>
</html>/* Variables CSS para fácil edición de colores */
:root {
    --primary-color: #e94560; /* Color principal (rojo/rosa) */
    --secondary-color: #0f3460; /* Color secundario (azul oscuro) */
    --accent-color: #1a1a2e; /* Color de acento para fondos */
    --text-color: #ffffff; /* Color de texto claro */
    --light-text-color: #aeb6bf; /* Color de texto más claro */
    --card-bg: rgba(255, 255, 255, 0.08); /* Fondo de tarjetas */
    --border-color: rgba(255, 255, 255, 0.15); /* Color de borde */
}

/* Base y Resets */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* Navegación */
.navbar {
    background-color: var(--accent-color);
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-area {
    display: flex;
    align-items: center;
}

.logo {
    width: 40px; /* Tamaño del logo */
    height: 40px;
    border-radius: 50%;
    margin-right: 0.8rem;
    object-fit: cover; /* Asegura que la imagen se ajuste bien */
    border: 2px solid var(--primary-color);
}

.site-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    letter-spacing: 1px;
}

.nav-links a {
    color: var(--light-text-color);
    text-decoration: none;
    margin-left: 1.5rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero-section {
    background: url('https://i.imgur.com/your-hero-background.jpg') no-repeat center center/cover; /* Puedes cambiar esta imagen */
    padding: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden; /* Para contener la imagen superpuesta */
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Oscurece la imagen de fondo */
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-content p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: var(--light-text-color);
}

/* Botones Generales */
.btn {
    display: inline-block;
    padding: 0.9rem 2.2rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.primary-btn {
    background-color: var(--primary-color);
    color: var(--text-color);
}

.primary-btn:hover {
    background-color: darken(var(--primary-color), 10%); /* No funciona directamente en CSS vanilla, sería #d43b52 */
    opacity: 0.9;
    transform: translateY(-2px);
}

.secondary-btn {
    background-color: var(--card-bg);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.secondary-btn:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
    transform: translateY(-2px);
}


/* Secciones Generales */
.section {
    padding: 4rem 0;
    text-align: center;
}

.section h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
    position: relative;
    display: inline-block;
}

.section h2::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
}

/* Sección Cómo funciona */
.how-it-works {
    background-color: var(--accent-color);
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.step-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease;
}

.step-card:hover {
    transform: translateY(-10px);
}

.step-card .icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.step-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.step-card p {
    color: var(--light-text-color);
}

/* Sección Impacto (Testimonios) */
.impact-section {
    background-color: var(--secondary-color);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    text-align: left;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}

.testimonial-card p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: var(--light-text-color);
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.testimonial-author .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-color);
}

.testimonial-author span {
    font-weight: 600;
    color: var(--primary-color);
}

/* Sección Únete Hoy / Perfil */
.join-us-section {
    background-color: var(--accent-color);
}

.profile-card {
    background: var(--card-bg);
    padding: 3rem;
    border-radius: 15px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}

.profile-card h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.profile-card .stats {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--light-text-color);
}

.profile-card .stats .value {
    font-weight: 700;
    color: var(--text-color);
}

.profile-card .secondary-btn {
    margin-top: 1.5rem;
    width: 100%; /* Botón de canjeo ocupa todo el ancho */
}

.profile-card .note {
    font-size: 0.9rem;
    margin-top: 1.5rem;
    color: var(--light-text-color);
}

/* Footer */
footer {
    background-color: var(--accent-color);
    padding: 2rem 0;
    margin-top: auto; /* Empuja el footer hacia abajo */
    font-size: 0.9rem;
    color: var(--light-text-color);
    border-top: 1px solid var(--border-color);
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
    .navbar .container {
        flex-direction: column;
        gap: 1rem;
    }
    .nav-links a {
        margin: 0 0.8rem;
    }
    .hero-content h1 {
        font-size: 2.5rem;
    }
    .hero-content p {
        font-size: 1rem;
    }
    .section h2 {
        font-size: 2rem;
    }
    .steps-grid, .testimonials-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .site-title {
        font-size: 1.2rem;
    }
    .nav-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .nav-links a {
        margin: 0.5rem 0.5rem;
        font-size: 0.9rem;
    }
    .hero-section {
        padding: 4rem 0;
    }
    .hero-content h1 {
        font-size: 2rem;
    }
    .btn {
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
    }
    .section {
        padding: 3rem 0;
    }
}
<!DOCTYPE html>/* Variables CSS para fácil edición de colores */
:root {
    --primary-color: #e94560; /* Color principal (rojo/rosa) */
    --secondary-color: #0f3460; /* Color secundario (azul oscuro) */
    --accent-color: #1a1a2e; /* Color de acento para fondos */
    --text-color: #ffffff; /* Color de texto claro */
    --light-text-color: #aeb6bf; /* Color de texto más claro */
    --card-bg: rgba(255, 255, 255, 0.08); /* Fondo de tarjetas */
    --border-color: rgba(255, 255, 255, 0.15); /* Color de borde */
}

/* Base y Resets */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* Navegación */
.navbar {
    background-color: var(--accent-color);
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-area {
    display: flex;
    align-items: center;
}

.logo {
    width: 40px; /* Tamaño del logo */
    height: 40px;
    border-radius: 50%;
    margin-right: 0.8rem;
    object-fit: cover; /* Asegura que la imagen se ajuste bien */
    border: 2px solid var(--primary-color);
}

.site-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    letter-spacing: 1px;
}

.nav-links a {
    color: var(--light-text-color);
    text-decoration: none;
    margin-left: 1.5rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero-section {
    background: url('https://i.imgur.com/your-hero-background.jpg') no-repeat center center/cover; /* Puedes cambiar esta imagen */
    padding: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden; /* Para contener la imagen superpuesta */
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Oscurece la imagen de fondo */
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-content p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: var(--light-text-color);
}

/* Botones Generales */
.btn {
    display: inline-block;
    padding: 0.9rem 2.2rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.primary-btn {
    background-color: var(--primary-color);
    color: var(--text-color);
}

.primary-btn:hover {
    background-color: darken(var(--primary-color), 10%); /* No funciona directamente en CSS vanilla, sería #d43b52 */
    opacity: 0.9;
    transform: translateY(-2px);
}

.secondary-btn {
    background-color: var(--card-bg);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.secondary-btn:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
    transform: translateY(-2px);
}


/* Secciones Generales */
.section {
    padding: 4rem 0;
    text-align: center;
}

.section h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
    position: relative;
    display: inline-block;
}

.section h2::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
}

/* Sección Cómo funciona */
.how-it-works {
    background-color: var(--accent-color);
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.step-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease;
}

.step-card:hover {
    transform: translateY(-10px);
}

.step-card .icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.step-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.step-card p {
    color: var(--light-text-color);
}

/* Sección Impacto (Testimonios) */
.impact-section {
    background-color: var(--secondary-color);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    text-align: left;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}

.testimonial-card p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: var(--light-text-color);
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.testimonial-author .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-color);
}

.testimonial-author span {
    font-weight: 600;
    color: var(--primary-color);
}

/* Sección Únete Hoy / Perfil */
.join-us-section {
    background-color: var(--accent-color);
}

.profile-card {
    background: var(--card-bg);
    padding: 3rem;
    border-radius: 15px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
}

.profile-card h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.profile-card .stats {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--light-text-color);
}

.profile-card .stats .value {
    font-weight: 700;
    color: var(--text-color);
}

.profile-card .secondary-btn {
    margin-top: 1.5rem;
    width: 100%; /* Botón de canjeo ocupa todo el ancho */
}

.profile-card .note {
    font-size: 0.9rem;
    margin-top: 1.5rem;
    color: var(--light-text-color);
}

/* Footer */
footer {
    background-color: var(--accent-color);
    padding: 2rem 0;
    margin-top: auto; /* Empuja el footer hacia abajo */
    font-size: 0.9rem;
    color: var(--light-text-color);
    border-top: 1px solid var(--border-color);
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
    .navbar .container {
        flex-direction: column;
        gap: 1rem;
    }
    .nav-links a {
        margin: 0 0.8rem;
    }
    .hero-content h1 {
        font-size: 2.5rem;
    }
    .hero-content p {
        font-size: 1rem;
    }
    .section h2 {
        font-size: 2rem;
    }
    .steps-grid, .testimonials-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .site-title {
        font-size: 1.2rem;
    }
    .nav-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .nav-links a {
        margin: 0.5rem 0.5rem;
        font-size: 0.9rem;
    }
    .hero-section {
        padding: 4rem 0;
    }
    .hero-content h1 {
        font-size: 2rem;
    }
    .btn {
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
    }
    .section {
        padding: 3rem 0;
    }
}

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bull Rook - Caridad Verificada, Recompensas en Bitcoin</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header class="navbar">
        <div class="container">
            <div class="logo-area">
                <img src="https://i.imgur.com/your-bull-rook-logo.png" alt="Bull Rook Logo" class="logo">
                <span class="site-title">Bull Rook</span>
            </div>
            <nav class="nav-links">
                <a href="#how-it-works">Cómo Funciona</a>
                <a href="#impact">Impacto</a>
                <a href="#join-us">Únete Hoy</a>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero-section">
            <div class="container hero-content">
                <h1>Caridad Verificada, Recompensas en Impacto Real.</h1>
                <p>Transforma tus acciones en impacto y gana a tu Bull Rook.</p>
                <a href="#join-us" class="btn primary-btn">Descubre Más</a>
            </div>
        </section>

        <section id="how-it-works" class="section how-it-works">
            <div class="container">
                <h2>Cómo funciona</h2>
                <div class="steps-grid">
                    <div class="step-card">
                        <i class="fas fa-hand-holding-heart icon"></i>
                        <h3>1. Elige una Causa</h3>
                        <p>Ayuda a quien lo necesita: estudiantes, madres solteras, ancianos, soldados retirados y educación informática.</p>
                    </div>
                    <div class="step-card">
                        <i class="fas fa-qrcode icon"></i>
                        <h3>2. Realiza y Verifica</h3>
                        <p>Completa la acción de caridad. Sube un video o escanea un código QR del beneficiario para verificar.</p>
                    </div>
                    <div class="step-card">
                        <i class="fas fa-bitcoin sign-icon"></i>
                        <h3>3. Gana Recompensas</h3>
                        <p>Acumula puntos por cada acción verificada y canjéalos por recompensas en Bitcoin.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="impact" class="section impact-section">
            <div class="container">
                <h2>Nuestro Impacto</h2>
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <p>"Gracias a Bull Rook, pude comprar mis útiles escolares. ¡Es una ayuda increíble!"</p>
                        <div class="testimonial-author">
                            <img src="https://via.placeholder.com/50/FF5733/FFFFFF?text=A" alt="Avatar" class="avatar">
                            <span>Ana P., Estudiante Beneficiada</span>
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <p>"El apoyo de Bull Rook me permitió tener acceso a cursos de informática que cambiaron mi futuro."</p>
                        <div class="testimonial-author">
                            <img src="https://via.placeholder.com/50/33A0FF/FFFFFF?text=J" alt="Avatar" class="avatar">
                            <span>Juan R., Beneficiado de Educación</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="join-us" class="section join-us-section">
            <div class="container">
                <h2>Tu Progreso</h2>
                <div class="profile-card">
                    <h3>¡Tus Recompensas!</h3>
                    <p class="stats">Puntos Acumulados: <span class="value">0</span></p>
                    <p class="stats">Satoshis Ganados: <span class="value">0</span></p>
                    <button class="btn secondary-btn">Canjear Bitcoin</button>
                    <p class="note">¡Empieza a realizar obras de caridad para ver crecer tus recompensas!</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2023 Bull Rook. Todos los derechos reservados.</p>
        </div>
    </footer>
</body>
</html>
 codigo