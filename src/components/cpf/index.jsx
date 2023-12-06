export const insertMaskInCpf = (cpf) => {
  if (!cpf) {
    return '';
  }

  // Remove todos os caracteres não numéricos
  const cleanedCpf = cpf.replace(/\D/g, '');

  // Limita a exibição aos primeiros 11 dígitos
  const truncatedCpf = cleanedCpf.slice(0, 11);

  // Aplica a máscara à medida que os caracteres são digitados
  let maskedCpf = truncatedCpf.replace(
    /(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/,
    (match, p1, p2, p3, p4) => {
      let result = `${p1}`;
      if (p2) result += `.${p2}`;
      if (p3) result += `.${p3}`;
      if (p4) result += `-${p4}`;
      return result;
    }
  );

  return maskedCpf;
};
