/* Variables CSS para fácil edición de colores */
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
