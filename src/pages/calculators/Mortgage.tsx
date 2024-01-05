import {useMemo, useState} from 'react';
import formatDollars from '../../utils/formatDollars';
import NumberField from '../../widgets/NumberField';

// TODO:
// * Add extra payments
//   * every n months
//   * one-time

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100_000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);

  const amortizationSchedule = useMemo(() => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const loanTermInMonths = loanTerm * 12;

    const monthlyPayment =
      loanAmount *
      ((monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
        (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1));

    let remainingLoanAmount = loanAmount;
    const schedule: Array<{
      month: number;
      payment: number;
      principal: number;
      interest: number;
      remainingLoan: number;
    }> = [];

    for (let month = 1; month <= loanTermInMonths; month++) {
      const interestPayment = remainingLoanAmount * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingLoanAmount -= principalPayment;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        remainingLoan: remainingLoanAmount,
      });
    }

    return schedule;
  }, [interestRate, loanAmount, loanTerm]);

  return (
    <div>
      <h2>Mortgage Calculator with Amortization Schedule</h2>
      <label>
        Loan Amount ($):
        <NumberField
          value={loanAmount}
          onChange={e => setLoanAmount(Number(e.currentTarget.value))}
        />
      </label>
      <br />
      <label>
        Interest Rate (%):
        <NumberField
          step="0.01"
          value={interestRate}
          onChange={e => setInterestRate(Number(e.currentTarget.value))}
        />
      </label>
      <br />
      <label>
        Loan Term (years):
        <NumberField
          value={loanTerm}
          onChange={e => setLoanTerm(Number(e.currentTarget.value))}
        />
      </label>
      <br />
      {amortizationSchedule.length > 0 && (
        <div>
          <h3>Amortization Schedule</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Payment</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Remaining Loan</th>
              </tr>
            </thead>
            <tbody>
              {amortizationSchedule.map(entry => (
                <tr key={entry.month}>
                  <td>{entry.month}</td>
                  <td>{formatDollars(entry.payment)}</td>
                  <td>{formatDollars(entry.principal)}</td>
                  <td>{formatDollars(entry.interest)}</td>
                  <td>{formatDollars(entry.remainingLoan)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
