// console.log(global);
// Freeze foi para não podermos mudar ele apartir de qualquer lugar
globalThis.MinhaApp = Object.freeze ({
    saudacao() {
        return "Estou em todos os lugares!"
    },
    nome: "Sistema Legal"
})