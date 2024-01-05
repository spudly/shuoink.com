const formatDollars = (amount: number) =>
  Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(
    amount
  );

export default formatDollars;
