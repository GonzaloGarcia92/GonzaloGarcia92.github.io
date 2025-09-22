class MiComponente extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot.innerHTML = `
        <p>Gladiador II</p>
    `;
  }
}

customElements.define('mi-componente', MiComponente);