class MiComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .caja {
          padding: 1em;
          background: #e3e3e3;
          border-radius: 8px;
          font-family: sans-serif;
        }
      </style>
      <div class="caja">
        <p>Este es un componente web personalizado.</p>
      </div>
    `;
  }
}

customElements.define('mi-componente', MiComponente);