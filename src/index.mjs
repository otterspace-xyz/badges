// @format
import detectEthereumProvider from "@metamask/detect-provider";
import { html, renderer } from "./vendors/htm.mjs";
import { createComponent, createAppState, withStore } from "ficusjs";

const contract = {
  address: "0x1c504d230620b4c208d2ed6fa2f58e4f432b3c78",
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
        <button
          type="button"
          onclick=${this.handleConnect}
          class="button px-4 py-2 text-white rounded bg-purple-500"
        >
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
      const data = `0xd0def521000000000000000000000000${inputs.to.slice(
        2
      )}0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002a68747470733a2f2f6170692e6e706f696e742e696f2f376133383061643535363566323566316265303700000000000000000000000000000000000000000000`;
      await sign(value, data, chainId);
    },
    render() {
      const { account } = this.store.state;
      return html`
        <form onsubmit=${this.onSubmit} class="grid gap-6">
          ${account
            ? html`
                <div>
                  To: 
                  <input
                    placeholder="ethereum address: 0x..."
                    name="to"
                    type="text"
                    class=""
                  />
                </div>
                <div class>TokenURI: https://api.npoint.io/7a380ad5565f25f1be07</div>
              `
            : ""}
          ${account ? "" : html`<web3-connect-metamask><//>`}
          ${account
            ? html`<div>
                <input
                  class="button px-4 py-2 text-white rounded bg-purple-500 cursor-pointer"
                  type="submit"
                  value="Mint a Soul Otter 👻 🦦"
                />
              </div>`
            : ""}
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
