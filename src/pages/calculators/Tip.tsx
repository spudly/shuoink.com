import {useState, FC} from 'react';
import NumberField from '../../widgets/NumberField';
import Head from '../../widgets/Head';

const TipCalculator: FC = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const tip = billAmount * (tipPercentage / 100) || 0;
  const total = billAmount + tip;

  return (
    <>
      <Head>
        <title>
          Free Online Tip Calculator - Calculate Tips and Total Bill Easily |
          shuoink.com
        </title>
        <meta
          name="description"
          content="Effortlessly calculate tips and total bills with our free online tip calculator. Choose your bill amount, select the tip percentage, and get instant results. Fast, easy, and convenient!"
        />
      </Head>

      <h2>Tip Calculator - Calculate Tips and Total Bills Online</h2>
      <p>
        Welcome to our free online Tip Calculator, your go-to tool for quickly
        and accurately calculating tips and total bills. Whether you're at a
        restaurant, cafe, or ordering services, our easy-to-use calculator makes
        it simple to determine the right tip amount and total cost. Say goodbye
        to manual calculations and let our Tip Calculator handle the math for
        you!
      </p>
      <h3>Effortless Calculation:</h3>
      <p>
        Our Tip Calculator simplifies the process of calculating tips. Just
        input your bill amount, choose your desired tip percentage, and voila –
        instant results!
      </p>
      <h3>Flexible Tip Percentages:</h3>
      <p>
        Customize your tip based on your preferences. Select from popular tip
        percentages such as 10%, 15%, 20%, 25%, or 30%. The choice is yours!
      </p>
      <h3>Real-Time Updates:</h3>
      <p>
        As you input your bill amount and adjust the tip percentage, our
        calculator provides real-time updates, allowing you to see the tip
        amount and total bill instantly.
      </p>
      <h3>User-Friendly Interface:</h3>
      <p>
        Our user-friendly interface ensures a seamless experience, making it
        easy for both beginners and seasoned users to navigate and calculate
        tips effortlessly.
      </p>
      <h3>No Downloads, No Sign-Ups:</h3>
      <p>
        There's no need to download any apps or go through lengthy sign-up
        processes. Our Tip Calculator is accessible online, anytime you need it.
      </p>
      <p>
        Ready to calculate tips and total bills with ease? Try our Tip
        Calculator now and simplify your payment experience!
      </p>
      <div className="grid grid-cols-2 w-max">
        <label htmlFor="billAmount">Bill Amount:</label>
        <NumberField
          id="billAmount"
          value={billAmount}
          onChange={e => setBillAmount(Number(e.target.value))}
        />
        <label htmlFor="tipPercentage">Tip Percentage:</label>
        <NumberField
          id="tipPercentage"
          value={tipPercentage}
          onChange={e => setTipPercentage(Number(e.target.value))}
        />
        <p>Tip: ${tip.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <p>
        Make tipping stress-free and accurate with our Tip Calculator. Whether
        you're dining out, ordering in, or enjoying various services, our
        calculator ensures you always leave the right tip. Bookmark this page
        for quick access whenever you need to calculate tips on the go!
      </p>
    </>
  );
};

export default TipCalculator;
