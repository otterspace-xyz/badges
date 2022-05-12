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
  console.log(tx);

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
      const data = `0xd0def521000000000000000000000000${inputs.to}0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000005968747470733a2f2f6261666b726569656473693266616c697866646f6d73377278687a6d6175716f653232726a7471366761623364766e366c756f376b7533646d7a792e697066732e6e667473746f726167652e6c696e6b2f00000000000000`;
      await sign(value, data, chainId);
    },
    render() {
      const { account } = this.store.state;
      return html`
        <form onsubmit=${this.onSubmit}>
          To:
          <input name="to" type="text" />
          <br />
          Image URI:
          https://bafkreiedsi2falixfdoms7rxhzmauqoe22rjtq6gab3dvn6luo7ku3dmzy.ipfs.nftstorage.link/
          <br />

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
