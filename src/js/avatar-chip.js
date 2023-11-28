class ConstructAvatarChip extends HTMLElement {
    render() {
        this.innerHTML = `
            <section class="avatar-chip">
                <img class="avatar-chip__image" src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
                <div class="avatar-chip__content">
                    <p class="avatar-chip__content--name">${this.getAttribute('name')}</p>
                    <p class="avatar-chip__content--bio">${this.getAttribute('bio')}</p>
                </div>
            </section>
        `;
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    static get observedAttributes() {
        return ['name', 'bio', 'image'];
    }
};

export default ConstructAvatarChip;
