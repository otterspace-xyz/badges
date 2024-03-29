// @format
import detectEthereumProvider from "@metamask/detect-provider";
import { html, renderer } from "./vendors/htm.mjs";
import { createComponent, createAppState, withStore } from "ficusjs";

const contract = {
  address: "0x9a8469255a7d41A715E539a22Eb1127be0973A1E",
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
        <button
          type="button"
          onclick=${this.handleConnect}
          class="button px-4 py-2 text-white rounded bg-purple-600"
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
      const data = `0x${contract.functions.mint}${inputs.to.slice(2)}`;
      await sign(value, data, chainId);
    },
    render() {
      const { account } = this.store.state;
      return html`
        <form onsubmit=${this.onSubmit} class="grid gap-6">
          ${account
            ? html`
                <div class="grid justify-center">
                  <span class="font-bold pr-2">Send a Soul Otter to: </span>
                  <input
                    placeholder="Enter ethereum address: 0x..."
                    name="to"
                    type="text"
                    class="appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              `
            : ""}
          ${account ? "" : html`<web3-connect-metamask><//>`}
          ${account
            ? html` <div class="grid gap-4 justify-center">
                <input
                  class="button px-4 py-2 text-white rounded bg-purple-600 cursor-pointer w-64"
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
