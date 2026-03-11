// Valore iniciais do dia
let valorPorHora = 50;
let horasTrabalhadas = 8; // Expediente padrão

console.log("--- Resumo do Expediente ---")
console.log(`Após hora extra (horasTrabalhadas++): ${horasTrabalhadas}h`);

horasTrabalhadas++;
console.log(`Após hora extra (horasTrabalhadas++): ${horasTrabalhadas}h`);

horasTrabalhadas--;
console.log(`Após saída antecipada: ${horasTrabalhadas}h`);