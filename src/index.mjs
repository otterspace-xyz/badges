// @format
import detectEthereumProvider from "@metamask/detect-provider";
import { html, renderer } from "./vendors/htm.mjs";
import { createComponent, createAppState, withStore } from "ficusjs";

const contract = {
  address: "0x8cdd98f3cb847d0c064f7e08ce14bec3e20de2f4",
  functions: {
    mint: "6a627842000000000000000000000000",
  },
};

const store = createAppState("web3.sign", {
  initialState: {
    account: null,
    web3: {
      provider: null,
    },
  },
  setAccount(val) {
    this.state.account = val;
  },
});

createComponent(
  "web3-connect-metamask",
  withStore(store, {
    renderer,
    async handleConnect() {
      const provider = await getProvider();
      const account = await connectAccount(provider);
      this.store.setAccount(account);
      console.info(`Account connected: ${account}`);
    },
    render() {
      return html`
        <button type="button" onclick=${this.handleConnect}>
          Connect Wallet
        </button>
      `;
    },
  })
);

async function sign(value, data, chainId) {
  const tx = {
    nonce: "0x00",
    to: contract.address,
    from: ethereum.selectedAddress,
    data,
    chainId,
  };

  const txHash = await ethereum.request({
    method: "eth_sendTransaction",
    params: [tx],
  });
}

createComponent(
  "web3-abt-form",
  withStore(store, {
    renderer,
    props: {},
    async onSubmit(e) {
      e.preventDefault();
      const inputs = Object.fromEntries(new FormData(e.target).entries());
      const value = "0x00";
      const chainId = "0x4"; // rinkeby
      const data = `0x${contract.functions.mint}${inputs.to.slice(2)}`;
      await sign(value, data, chainId);
    },
    render() {
      const { account } = this.store.state;
      return html`
        <form onsubmit=${this.onSubmit}>
          ${account
            ? html`
                To:
                <input
                  placeholder="ethereum address: 0x..."
                  name="to"
                  type="text"
                />
                <br />
                TokenURI: https://api.npoint.io/7a380ad5565f25f1be07
                <br />
              `
            : ""}
          ${account ? "" : html`<web3-connect-metamask><//>`}
          ${account ? html`<input type="submit" value="Mint SBT" />` : ""}
        </form>
      `;
    },
  })
);

async function getProvider() {
  return await detectEthereumProvider();
}

async function connectAccount(provider) {
  if (provider) {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0];
  } else {
    // TODO: Make this throw
    window.alert("Only works with Metamask");
  }
}
