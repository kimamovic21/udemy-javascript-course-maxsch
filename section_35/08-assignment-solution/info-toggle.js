class MyInfoToggleBox extends HTMLElement {
  constructor() {
    super();
    this._isMyBoxVisible = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <style>
            #my-info-box {
                display: none;
            }
        </style>

        <div>
          <button id="my-button">
            Show
          </button>
          <p id="my-info-box">
              <slot></slot>
          </p>
        </div>
    `;
    this._toggleMyButton = this.shadowRoot.querySelector('button');
    this._myInfoBox = this.shadowRoot.querySelector('#my-info-box');
    this._toggleMyButton.addEventListener('click', this._toggleMyInfoBox.bind(this));
  }

  connectedCallback() {
    if (this.hasAttribute('is-visible')) {
      if (this.getAttribute('is-visible') === 'true') {
        this._isMyBoxVisible = true;
        this._myInfoBox.style.display = 'block';
        this._toggleMyButton.textContent = 'Hide';
      }
    }
  }

  _toggleMyInfoBox() {
    this._isMyBoxVisible = !this._isMyBoxVisible;
    this._myInfoBox.style.display = this._isMyBoxVisible ? 'block' : 'none';
    this._toggleMyButton.textContent = this._isMyBoxVisible ? 'Hide' : 'Show';
  }
}

customElements.define('uc-info-toggle', MyInfoToggleBox);
