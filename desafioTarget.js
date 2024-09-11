function calcularFaturamento(vetorFaturamento) {
  const faturamentoValidos = vetorFaturamento.filter((valor) => valor > 0);

  if (faturamentoValidos.length === 0) {
    return "Não há dados de faturamento válidos.";
  }

  const menorFaturamento = Math.min(...faturamentoValidos);
  const maiorFaturamento = Math.max(...faturamentoValidos);

  const somaFaturamento = faturamentoValidos.reduce(
    (acc, valor) => acc + valor,
    0
  );
  const mediaFaturamento = somaFaturamento / faturamentoValidos.length;

  const diasAcimaMedia = faturamentoValidos.filter(
    (valor) => valor > mediaFaturamento
  ).length;

  return {
    menorFaturamento: menorFaturamento,
    maiorFaturamento: maiorFaturamento,
    diasAcimaMedia: diasAcimaMedia,
  };
}

// Exemplo
const vetorFaturamento = [0, 100, 200, 300];

const resultado = calcularFaturamento(vetorFaturamento);

console.log("Menor valor de faturamento: ", resultado.menorFaturamento);
console.log("Maior valor de faturamento: ", resultado.maiorFaturamento);
console.log(
  "Número de dias com faturamento acima da média: ",
  resultado.diasAcimaMedia
);
