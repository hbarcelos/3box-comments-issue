import React from "react";
import { render } from "react-dom";
import Web3 from "web3";
import ThreeBoxComments from "3box-comments-react";
import Box from "3box";

const web3 = new Web3(window.ethereum);

function App() {
  const [box, setBox] = React.useState({});
  const address = useAddress(web3);

  const handleLogin = React.useCallback(async () => {
    const box = await Box.openBox(address, web3.currentProvider, {});
    box.onSyncDone(() => setBox(box));

    setBox(box);
  }, [address]);

  return (
    address && (
      <ThreeBoxComments
        spaceName="thisissometest1234"
        threadName="test"
        adminEthAddr="0xceB4c079Dd21494E0bc99DA732EAdf220b727389"
        ethereum={web3.currentProvider}
        box={box}
        currentUserAddr={address}
        // Required prop for context B)
        loginFunction={handleLogin}
      />
    )
  );
}

function useAddress(web3) {
  const [address, setAddress] = React.useState(null);

  React.useEffect(() => {
    async function getAddress() {
      await web3.currentProvider.enable();
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
    }

    getAddress();
  }, [web3]);

  return address;
}

function use3Box({ adminEthAddr, ethereum, spaceName, spaceOpts }) {
  const boxRef = React.useRef(null);
  const spaceRef = React.useRef(null);

  React.useEffect(() => {
    async function createBox() {
      const box = await Box.openBox(adminEthAddr, ethereum);
      const space = await box.openSpace(spaceName, spaceOpts);

      boxRef.current = box;
      spaceRef.current = space;
    }

    createBox();
  }, [adminEthAddr, ethereum, spaceName, spaceOpts]);

  return {
    box: boxRef.current,
    space: spaceRef.current,
  };
}

render(<App />, document.querySelector("#root"));
