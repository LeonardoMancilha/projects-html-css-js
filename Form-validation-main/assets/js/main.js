class validForm {
    constructor () {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log('Formulário não enviado!');
        const camposValidos = this.areValidCamps();
        const senhasValidas = this.areValidPasswords();
        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.form.submit();
        }
    }

    areValidPasswords() {
        let valid = true;
        const senha = this.form.querySelector('.senha');
        const repetirSenha = this.form.querySelector('.repetirSenha');
        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'Campos senha e repetir senha precisam ser iguais!');
        }
        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres! <br>');
        }
        return valid;
    }

    areValidCamps() {
        let valid = true;
        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let camp of this.form.querySelectorAll('.validar')) {
            const label = camp.previousElementSibling.innerHTML;
            if (!camp.value) {
                this.createError(camp, `Campo ${label} não pode estar vazio!`);
                valid = false;
            }
            if (camp.classList.contains('cpf')) {
                if (!this.validCPF(camp)) valid = false;
            }
            if (camp.classList.contains('usuario')) {
                if (!this.validUser(camp)) valid = false;
            }
        }
        return valid;
    }

    validUser(camp) {
        const user = camp.value;
        let valid = true;
        if (user.length < 3 || user.length > 12) {
            this.createError(camp, 'Usuário precisa ter entre 3 e 12 caracteres! <br>');
            valid = false;
        }

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(camp, 'Nome de usuário precisa conter apenas letras e/ou números! <br>');
            valid = false;
        }
        return valid;
    }
    
    validCPF(camp) {
        const cpf = new ValidCPF(camp.value);
        if (!cpf.valid()) {
            this.createError(camp, 'CPF inválido! <br>');
            return false;
        }
        return true;
    }

    createError(camp, message) {
        const paragraph = document.createElement('paragraph');
        paragraph.innerHTML = message;
        paragraph.classList.add('error-text');
        camp.insertAdjacentElement('afterend', paragraph);
    }
}

const valid = new validForm();