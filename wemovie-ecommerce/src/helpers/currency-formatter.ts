export enum Currency {
  BRL = 'BRL',
  USD = 'USD',
}

export enum Language {
  EN = 'en-US',
  PT = 'pt-BR',
}

export const currencyFormatter = (
  value: number,
  currency: Currency,
  language: Language
) => {
  const formattedCurrency = new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
  });

  return formattedCurrency.format(value);
};
