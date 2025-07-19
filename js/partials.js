// js/partials.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) HEADER + HAMBURGER
  const headerHtml = `
    <header class="site-header">
      <div class="header-inner">
        <div class="logo">
          <a href="index.html" class="logo-link">
            <img
              src="image/Loyal_International_School_logo.png"
              class="logo-icon"
              alt="Logo"
            />
            <span class="logo-text">Loyal's MCQ</span>
          </a>
        </div>

        <!-- Hamburger icon (visible only on ≤900px) -->
        <div class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- Main navigation -->
        <nav class="main-nav" id="nav-menu">
          <a href="index.html" class="nav-link">Home</a>
          <a href="pages/aboutus.html" class="nav-link">About Us</a>
          <a href="pages/contactus.html" class="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  `;
  const headerEl = document.getElementById('site-header-placeholder');
  if (headerEl) headerEl.outerHTML = headerHtml;

  // 2) FOOTER
  const footerHtml = `
    <footer id="contact" class="site-footer">
      <div class="footer-inner">
        <section class="footer-section">
          <h4>Quick Links</h4>
          <nav aria-label="Quick Links">
            <ul class="footer-links">
              <li><a href="../../../index.html">Home</a></li>
              <li><a href="#levels">Levels</a></li>
              <li><a href="../../../pages/contactus.html">Contact</a></li>
            </ul>
          </nav>
        </section>
        <section class="footer-section">
          <h4>Contact Us</h4>
          <address>
            Uthman Ibn Al-Yaman Street<br/>
            Kingdom of Saudi Arabia, Jeddah<br/>
            <a href="mailto:loyal.int.school@gmail.com">loyal.int.school@gmail.com</a><br/>
            <a href="tel:+966548953829">+966 54 895 3829</a>
          </address>
        </section>
        <section class="footer-section social">
          <h4>Follow Us</h4>
          <ul class="social-links" aria-label="Social Media">
            <li><a href="#" title="Twitter">🐦 Twitter</a></li>
            <li><a href="#" title="Facebook">📘 Facebook</a></li>
            <li><a href="#" title="Instagram">📸 Instagram</a></li>
          </ul>
        </section>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Loyal International School. All rights reserved.</p>
      </div>
    </footer>
  `;
  const footerEl = document.getElementById('site-footer-placeholder');
  if (footerEl) footerEl.outerHTML = footerHtml;

  // 3) HAMBURGER MENU LOGIC
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    // toggle open/close
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    // auto-close when any nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});
