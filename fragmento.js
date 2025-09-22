class MiComponenteG extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot.innerHTML = `
        <p>Gladiador II</p>
    `;
  }
}

customElements.define('mi-componente', MiComponenteG);