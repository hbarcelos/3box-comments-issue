import React from "react";
import { render } from "react-dom";
import Web3 from "web3";
import ThreeBoxComments from "3box-comments-react";
import Box from "3box";

const web3 = new Web3(window.ethereum);

function App() {
  const opts = {
    adminEthAddr: "0x0000000000000000000000000000000000000000",
    ethereum: web3.currentProvider,
    spaceName: "3box-labs",
  };
  const { box } = use3Box(opts);
  const address = useAddress(web3);

  return (
    box &&
    address && (
      <ThreeBoxComments
        {...opts}
        threadName="test"
        box={box}
        currentUserAddr={address}
      />
    )
  );
}

function useAddress(web3) {
  const [address, setAddress] = React.useState(null);

  React.useEffect(() => {
    async function getAddress() {
      const [account] = web3.eth.getAccounts();
      setAddress(account);
    }

    getAddress();
  }, [web3]);

  return address;
}

function use3Box({ adminEthAddr, ethereum, spaceName, spaceOpts }) {
  const box = React.useRef(null);
  const space = React.useRef(null);

  React.useEffect(() => {
    async function createBox() {
      box.current = await Box.openBox(adminEthAddr, ethereum);
      space.current = await box.openSpace(spaceName, spaceOpts);
    }

    createBox();
  }, [adminEthAddr, ethereum, spaceName, spaceOpts]);

  return {
    box: box.current,
    space: space.current,
  };
}

render(<App />, document.querySelector("#root"));
