import {FaFacebook, FaTwitter} from 'react-icons/fa';
import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';

// @ts-expect-error: keeping this for now
const Footer: FC = () => (
  <footer className="text-center">
    <div className="flex justify-center items-center gap-2 p-2">
      <a href="https://www.facebook.com/stephenjohnsorensen/">
        <FaFacebook className="text-2xl text-[#4267B2]" />
      </a>
      <a href="https://twitter.com/shuoink">
        <FaTwitter className="text-2xl text-[#1DA1F2]" />
      </a>
    </div>
    <p className="p-2">Copyright &copy; Stephen Sorensen</p>
  </footer>
);

const DoorPanel: FC<{width: number; height: number; x: number; y: number}> = ({
  x,
  y,
  width,
  height,
}) => (
  <>
    <path
      d={`M ${x} ${y} L ${x} ${y + height} L ${x + width} ${y + height}`}
      className="fill-white opacity-50"
    />
    <path
      d={`M ${x} ${y} L ${x + width} ${y} L ${x + width} ${y + height} L ${
        x + 5
      } ${y + 5} L ${x} ${y}`}
      className="fill-black opacity-50"
    />
    <rect
      x={x + 3}
      y={y + 3}
      width={width - 6}
      height={height - 6}
      className="fill-orange-600"
    />
    <path
      d={`M${x + 8} ${y + 8} L ${x + width - 8} ${y + 8} L ${x + width - 8} ${
        y + height - 8
      }`}
      className="fill-white opacity-50"
    />
    <path
      d={`M ${x + 8} ${y + 8} L ${x + 8} ${y + height - 8} L ${x + width - 8} ${
        y + height - 8
      }`}
      className="fill-black opacity-50"
    />
    <rect
      x={x + 11}
      y={y + 11}
      width={width - 22}
      height={height - 22}
      className="fill-orange-500"
    />
  </>
);

const DoorKnob: FC<{setMessage: Dispatch<SetStateAction<string | null>>}> = ({
  setMessage,
}) => {
  const [touching, setTouching] = useState(false);
  const [twisting, setTwisting] = useState(false);

  const touchKnob = () => setTouching(true);
  const untouchKnob = () => setTouching(false);

  const twistKnob = () => {
    setTwisting(true);
    setMessage('Darn, the door is locked!');
  };

  const releaseKnob = () => setTwisting(false);

  return (
    <g
      onMouseEnter={touchKnob}
      onMouseLeave={untouchKnob}
      onMouseDown={twistKnob}
      onMouseUp={releaseKnob}
      onTouchStart={twistKnob}
      onTouchEnd={releaseKnob}
    >
      {/* knob gradient */}
      <radialGradient id="door-knob-gradient" cx="70%" cy="30%" r="70%">
        <stop offset="20%" stopColor="#434343" />
        <stop offset="90%" stopColor="black" />
        <stop offset="100%" stopColor="#7c2d12" />
      </radialGradient>

      {/* knob shadow */}
      <circle
        cx={2320 + 360 - 30 - 5}
        cy={550 + 5}
        r={15}
        fill="black"
        className="opacity-30"
      />

      {/* knob */}
      <circle
        cx={2320 + 360 - 30}
        cy={550}
        r={15}
        fill="url('#door-knob-gradient')"
        className="duration-500 cursor-grab"
        transform={`translate(${touching ? '2, 1' : '0, 0'}) rotate(${
          twisting ? 90 : 0
        }, ${2320 + 360 - 30} ${550})`}
      />
    </g>
  );
};

const Door: FC<{setMessage: Dispatch<SetStateAction<string | null>>}> = ({
  setMessage,
}) => (
  <g id="door">
    {/* TODO: door frame */}

    <rect
      x={(5000 - 360) / 2}
      y="100"
      width="360"
      height="800"
      className="fill-orange-500"
    />

    {/* TODO: door panel corners are messed on for tall panels :( */}
    <DoorPanel x={2320 + 30 * 2} y={100 + 30 * 2} width={90} height={90} />
    <DoorPanel x={2320 + 30 * 7} y={100 + 30 * 2} width={90} height={90} />
    <DoorPanel x={2320 + 30 * 2} y={100 + 30 * 7} width={90} height={235} />
    <DoorPanel x={2320 + 30 * 7} y={100 + 30 * 7} width={90} height={235} />
    <DoorPanel
      x={2320 + 30 * 2}
      y={100 + 235 + 30 * 9}
      width={90}
      height={235}
    />
    <DoorPanel
      x={2320 + 30 * 7}
      y={100 + 235 + 30 * 9}
      width={90}
      height={235}
    />

    {/* deadbolt */}
    {/* TODO: finish deadbolt */}
    <circle cx={2320 + 360 - 30} cy={500} r={15} fill="black" />

    <DoorKnob setMessage={setMessage} />
  </g>
);

const Siding: FC = () => (
  <g id="siding">
    {Array.from({length: 18}).map((_, index) => (
      <rect
        key={index}
        x={0}
        y={900 - 75 - index * 50}
        width={5000}
        height={75}
        stroke="black"
        fill="lightBlue"
        className="drop-shadow-lg"
      />
    ))}
  </g>
);

const PorchFloor: FC = () => (
  <g id="floor">
    {Array.from({length: 80}).map((_, index) => (
      <path
        key={index}
        d={`M 2500 500 L ${-600 + index * 75} 1000 L ${index * 75 + 75} 1000`}
        className="fill-slate-700 stroke-black"
      />
    ))}
  </g>
);

const App: FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (message) {
      const id = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(id);
    }
  }, [message]);

  return (
    <>
      <svg
        viewBox="0 0 5000 1000"
        className="h-screen w-[500vh] fixed left-[calc((100vw-500vh)/2)] bg-black"
      >
        <PorchFloor />
        <Siding />
        <Door setMessage={setMessage} />

        {/* TODO: doorbell */}
        {/* TODO: porch lights */}
        {/* TODO: welcome mat - remove the welcome mat to find the key to unlock the door? */}
      </svg>
      {message && (
        <div className="fixed top-4 right-4 bg-black text-white text-2xl p-4 border-2 border-white">
          {message}
        </div>
      )}
    </>
  );
};

export default App;
