// 705.484.450-52 070.987.720-03
class ValidCPF {
    constructor(cpfSent) {
        Object.defineProperty(this, 'cpfClean', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfSent.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cpfClean.charAt(0).repeat(11) === this.cpfClean; // or this.cpfLimpo.length
    }

    generateNewCpf() {
        const cpfWithoutDigits = this.cpfClean.slice(0, -2);
        const first_digit = ValidCPF.generateDigit(cpfWithoutDigits);
        const second_digit = ValidCPF.generateDigit(cpfWithoutDigits + first_digit);
        this.newCPF = cpfWithoutDigits + first_digit + second_digit;
    }

    static generateDigit(cpfWithoutDigits) {
        let total = 0;
        let reverse = cpfWithoutDigits.length + 1;
        for (let numericString of cpfWithoutDigits) {
            //console.log(stringNumerica, reverso);
            total += reverse * Number(numericString);
            reverse--;
        }
        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valid() {
        if (!this.cpfClean) return false;
        if (typeof this.cpfClean !== 'string') return false;
        if (this.cpfClean.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generateNewCpf();
        return this.newCPF === this.cpfClean;
    }
}

/*
let validcpf = new ValidCPF('070.987.720-03');
//validcpf = new ValidaCPF('999.999.999-99');

if (validcpf.valid()) {
    console.log('CPF válido!');
} else {
    console.log('CPF inválido!');
}
*/
