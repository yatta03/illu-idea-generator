<div class="center-box">
  <slot />
</div>
<footer class="footer">
  <div class="footer-item">
    <a href="https://github.com/yatta03/illu-idea-generator" target="_blank" rel="noopener" class="icon-link">
      <img src="/github.svg" alt="GitHub" class="icon" />
      <span>GitHub Repository</span>
    </a>
  </div>
  <div class="footer-item">
    <p>contact:</p>
    <a href="mailto:thogasec@gmail.com" class="icon-link">
      <img src="/gmail.svg" alt="Gmail" class="icon" />
      <span>thogasec@gmail.com</span>
    </a>
  </div>
</footer>

<style>
  .center-box {
    display: flex;
    margin: auto;
    flex-direction: column;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    min-height: 80vh;
    background-color: #f9f9f9;
  }

  .footer {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 3rem 0rem 2rem 0rem;
    font-size: 0.9rem;
    color: #444;
    background-color: #f9f9f9;
  }

  .footer-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
  }

  .icon-link:hover {
    color: #007acc;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 0.4rem;
  }
</style>
