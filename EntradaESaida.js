const anonimo = process.argv.indexOf('-a') !== -1;
// console.log(anonimo);
const os = require('os'); // Método para funcionar no Windows e de mais sistemas

if(anonimo) {
    process.stdout.write("Fala Anônimo!\n");
    process.exit();
} else {
    process.stdout.write("Informe seu nome: ");
    process.stdin.on("data", data => {
        const nome = data.toString().replace(os.EOL, ""); // Problema do \r é reservado do Windows
            // O \n se torna os.EOL
        process.stdout.write(`Fala ${nome}!!${os.EOL}`);
        process.exit();
    })
}