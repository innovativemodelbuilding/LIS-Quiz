// js/includes.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Header
  const headerHtml = `
    <header class="site-header">
      <div class="header-inner">
        <div class="logo">
          <img src="../../../image/Loyal_International_School_page-0001-removebg-preview.png"
               class="logo-icon"
               alt="Logo" />
          <span class="logo-text">Loyal's MCQ</span>
        </div>
        <nav class="main-nav">
          <a href="#">Home</a>
          <a href="#levels">Levels</a>
          <a href="./pages/contactus.html">Contact</a>
        </nav>
      </div>
    </header>
  `;
  const headerEl = document.getElementById('site-header-placeholder');
  if (headerEl) headerEl.outerHTML = headerHtml;

  // 2) Footer
  const footerHtml = `
    <footer id="contact" class="site-footer">
      <div class="footer-inner">
        <section class="footer-section">
          <h4>Quick Links</h4>
          <nav aria-label="Quick Links">
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#levels">Levels</a></li>
              <li><a href="./pages/contactus.html">Contact</a></li>
            </ul>
          </nav>
        </section>
        <section class="footer-section">
          <h4>Contact Us</h4>
          <address>
            Uthman Ibn Al-Yaman Street<br>
            Kingdom of Saudi Arabia, Jeddah<br>
            <a href="mailto:loyal.int.school@gmail.com">loyal.int.school@gmail.com</a><br>
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
});
