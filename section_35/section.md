Section 35: Bonus: Data Structures & Algorithms Introduction

568. Module Introduction

569. Web Components in Action
-kreirano fajlove index.html i modal.js
-u index.html fajlu kreiramo uc-modal HTML element sa otvorenim i zatvorenim tagom
-u uc-modal elemenutu kreiramo h1 element
-h1 elementu dodajemo atribut slot
-uc-modal elementu dodajemo atribut opened
-kreiramo script element
-u elementu script kreiramo varijablu const modal
-kreiramo funkciju setTimeout()
-u funkciji setTimeout() dodajemo varijabli modal metodu open()

570. What are Web Components ?

571. Why Web Components ?

572. Getting Started!

573. Web Component Browser Support

574. Our Development Setup
-kreiramo fajlove index.html i tooltip.js

575. A First Custom Element
-u tooltip.js fajlu kreiramo klasu class Tooltip
-klasi Tooltip dodajemo extends HTMLElement
-u klasi Tooltip kreiramo funkciju constructor()
-varijabli customElements dodajemo metodu define()
-prvi argument funkcije define() je 'uc-tooltip', a drugi argument Tooltip
-u index.html fajlu kreiramo script element pomocu kojeg importujemo tooltip.js fajl
-kreiramo element uc-tooltip sa otvorenim i zatvorenim tagom

576. Interacting with the Surrounding DOM
-u tooltip.js fajlu, u funkciji constructor() kreiramo funkciju super()
-u funkciji constructor() dodajemo metodu this.appendChild()
-dodajemo metodu document.createElement('span')
-vrijednost metode document.createElement() pohranjujemo u varijablu const tooltipIcon
-varijabli tooltipIcon dodajemo metodu textContent

577. Understanding the Custom Element Lifecycle

578. Using "connectedCallback" for DOM Access
-u klasi Tooltip kreiramo funkciju connectedCallback() 
-u funkciju connectedCallback() dodajemo prethodno napisan kod u klasi

579. Listening to Events Inside the Component
-u funkciji connectedCallback() dodajemo varijabli tooltipIcon metodu addEventListener()
-prvi argument metode addEventListener() je dogadaj 'mouseenter', a drugi argument funkcija this._showTooltip.bind(this)
-u klasi connectedCallback() kreiramo privatnu funkciju _showTooltip()
-u funkciji _showTooltip() kreiramo varijablu const tooltipContainer
-varijabli tooltipContainer dodajemo metodu textContent
-objektu this dodajemo metodu appendChild(tooltipContainer)
-kreiramo funkciju _hideTooltip()
-u funkciji connnectedCallback() kreiramo metodu tooltip.addEventListener('mouseleave')
-u funkciji _hideTooltip() dodajemo objektu this metodu removeChild(this._tooltipContainer)

580. Using Attributes on Custom Elements
-u index.html fajlu elementu uc-tooltip dodajemo atribut text
-u tooltip.js fajlu u funkciji constructor() dodajemo objektu this metodu _tooltipText
-u funkciju connectedCallback() dodajemo metodu this._tooltipText
-u funkciji constructor() kreiramo metodu this._tooltipText
-u funkciju connectedCallback() dodajemo uslov if (this.hasAttribute('text'))
-u uslov if dodajemo metodu this._tooltipText

581. Styling our Elements
-u funkciji _showTooltip() kreiramo metodu this._toolTipContainer.style.backgroundColor
-dodajemo metodu this._tooltipContainer.style.position
-u funkciji connectedCallback() dodajemo metodu this.style.position
-u funkciji _showTooltip() kreiramo metodu this._tooltipContainer.style.zIndex

582. Working with the "Shadow DOM"
-u funkciji constructor() dodajemo metodu this.attachShadow
-u funkciju connectedCallback() dodajemo metodu this.shadowRoot.appendChild(tooltipIcon)
-u funkciju _showTooltip() dodajemo metodu this._shadowRoot.appendChild()
-u funkciju _hideTooltip() dodajemo metodu this.shadowRoot.appendChild()

583. Adding an HTML Template
-u index.html fajlu kreiramo template element
-u tooltip.js fajlu, u klasi Tooltip kreiramo varijablu const template
-dodajemo metodu this.shadowRoot.appendChild()
-u funkciji connectedCallback() kreiramo varijablu const tooltipIcon

584. Using Slots

585. Defining the Template in Javascript
-u tooltip.js fajlu u funkciji constructor() kreiramo metodu this.shadowRoot.innerHTML

586. Using Style Tags in the Shadow DOM

587. Extending Built-int Elements
-kreiramo confirm-link.js fajl
-u confirm-link.js fajlu kreiramo klasu class ConfirmLink
-klasi ConfirmLink dodajemo extends HTMLAnchorElement
-u klasi ConfirmLink kreiramo funkciju connectedCallback()
-u funkciji connectedCallback() kreiramo metodu this.addEventListener()
-u metodi addEventListener prvi argument je dogadaj click u a drugi argument anonimna funkcija sa parametrom event
-u anonimnu funkciju dodajemo uslov if (!confirm('...'))
-u uslov if dodajemo metodu event.preventDefault()
-varijabli customElements dodajemo metodu define()
-prvi argument funkcije define() je 'uc-confirm-link', drugi argument klasa ConfirmLink, treci argument objekt extends

Assignment 8: Time to practice - The Basics
-kreiramo info-toggle.js fajl
-u info-toggle.js fajlu kreiramo klasu class InfoToggle

588. The Next Steps

589. Understanding Shadow DOM Projection

590. Styling "slot" Content Outside of the Shadow DOM

591. Styling "slot" Content Inside of the Shadow DOM

592. Styling the Host Component
-u index.html elementu elementu uc-tooltipu dodajemo CSS stil

593. Conditional Host Styling

594. Styling with the Host Content in Mind

595. Smart Dynamic Styling with CSS Variables

596. Cleaning Up the overall Styling

597. Observing Attribute Changes
-u tooltip.js fajlu kreiramo funkciju attributeChangedCallback sa tri parametra name, oldValue i newValue
-kreiramo metodu static get observedAttributes()

598. Adjusting the Component Behaviour Upon Attribute Changes
-u funkciji attributeChangedCallback() dodajemo uslov if (oldValue === newValue)
-dodajemo uslov if (name === 'text')
-u uslov if dodajemo metodu this._tooltipText = newValue

599. Using "disconnectedCallback"
-u tooltip.js fajlu kreiramo funkciju disconnectedCallback()
-u funkciju disconnectedCallback() dodajemo dvije metode this._tooltipIcon

600. Adding a render() Method
-u tooltip.js fajlu kreiramo metodu _render()
-u funkciju constructor() kreiramo varijablu this._tooltipVisible = false
-u funkciju _render() dodajemo uslov if (this._tooltipVisible) i else
-u uslov else dodajemo metodu this.shadowRoot.removeChild()
-u funkciji _render() kreiramo varijablu let tooltipContainer 
-u uslov else dodajemo uslov if(tooltipContainer)
-u metodu _showTooltip() dodajemo metodu this._tooltipVisible = true i funkciju this._render()
-u metodu _hideTooltip() dodajemo metodu this._tooltipVisible = false i funkciju this._render()
-u funkciju connectedCallback() dodajemo metodu this._render()

601. Final Adjustment

602. The Next Steps

603. Creating the Basic Modal Component
-kreiramo modal.js fajl
-u index.html fajlu kreiramo HTML element uc-modal
-kreiramo klasu classModal extends HTMLElement
-dodajemo metodu customElements.define()
-u klasi Modal kreiramo funkciju constructor()
-u funkciji constructor() kreiramo funkciju super()
-dodajemo metodu this.attachShadow()
-dodajemo metodu this.shadowRoot.innerHTML
-u metodi innerHTML kreiramo HTML elemente 

604. Adding the Modal Container
-u metodi innerHTML, HTML elementima sa id-em #backdrop i #modal dodajemo CSS stil

605. Styling the Modal Elements
-u modal.js fajlu, u div elementu sa id-em modal kreiramo HTML elemente header, section, button

606. Adding Some General App Logic
-u index.html fajlu, u HTML elementu script kreiramo varijablu const confirmButton
-varijabli confirmButton dodajemo metodu addEventListener()
-kreiramo varijablu const modal
-u metodu addEventListener dodajemo metodu modal.setAttribute()

607. Opening the Modal via CSS
-u modal.js fajlu kreiramo metodu attributeChangedCallback() sa tri parametra name, oldValue, newValue
-u metodu attributeChangedCallback() dodajemo uslov if (name === 'opened')
-dodajemo uslov if (this.hasAttribute('opened'))
-u uslov if dodajemo metode this.shadowRoot.querySelector()
-kreiramo metodu static get observedAttribudes()

608. Public Methods & Properties
-u modal.js fajlu kreiramo metodu open()
-u metodi open() dodajemo metodu this.setAttribude()
-u index.html fajlu u metodi addEventListener() dodajemo metodu modal.open()
-u metodi open() dodajemo this.isOpen = true
-u index.html fajlu dodajemo uslov if(!modal.isOpen)

609. Understanding Names Slots
-u index.html fajlu kreiramo HTML element h1 sa atributom slot
-u modal.js fajlu kreiramo HTML element slot sa atributom slot

610. Listening to Slot Content Changes
-u modal.js fajlu kreiramo varijablu const slots
-varijabli slots[1] dodajemo metodu addEventListener()
-u metodi addEventListener() prvi argument je dogadaj slotchange a drugi argument anonimna funkcija sa parametrom event

611. Closing the Modal
-u index.html fajlu varijabli modal dodajemo metodu addEventListener()
-u modal.js fajlu kreiramo varijable const cancelButton i const confirmButton
-button elementima dodajemo id cancel-btn i confirm-btn
-kreiramo metodu hide()
-u metodi hide() dodajemo uslov if (this.hasAttribute('opened'))
-u uslov if dodajemo metodu this.removeAttribute()
-dodajemo metodu this.isOpen = false
-varijablama cancelButton i confirmButton dodajemo metodu addEventListener()
-kreiramo metodu _cancel() i _confirm()

612. Dispatching Custom Events
-u modal.js fajlu u metodi _cancel() dodajemo metodu event.target.dispatchEvent()
-kreiramo varijablu const cancelEvent

613. Configuring Custom Events
-u modal.js fajlu, u objektu new Event() dodajemo konfiguracioni objekt
-u metodi _confirm() dodajemo metodu this.dispatchEvent()
-kreiramo varijablu const confirmEvent
-u funkciju dispatchEvent() proslijedujemo vrijednost varijable confirmEvent

614. Finishing it up!
-u modal.js fajlu kreiramo varijablu const backdrop
-varijabli backdrop dodajemo metodu addEventListener()

615. Useful Resources & Links