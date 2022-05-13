# otterspace-badges

![image](https://user-images.githubusercontent.com/2758453/168291832-6cfb8266-2d4a-4850-9044-82b4e597ddc9.png)

### An [EIP-4973](https://github.com/ethereum/EIPs/pull/4973)-compliant Account-bound token frontend to otterify Ethereum.

## Project Information

This repository hosts the code for Otterspace's
[EIP-4973](https://otterspace-xyz.github.io/badges/) demo in response to Weyl,
Ohlhaver and Buterin's "[Decentralized Society: Finding Web3's
Soul](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763)" paper.

We created a [EIP-4973-compliant account-bound token
contract](https://github.com/otterspace-xyz/otterspace-contracts). We allow
users to mint a token on the Rinkeby Testnetwork to other's addresses.

The frontend is live at
[https://badges.otterspace.xyz/](https://badges.otterspace.xyz/).

## Installation & Contributing

### Prerequisites

- Please use node v12

```bash
git clone git@github.com:otterspace-xyz/badges.git
npm i
npm run dev
```

The front end is then accessible at https://localhost:5000 (only https!).

## Help

## I can't see my Soul Otter on Metamask!

Note that Metamask on Desktop currently doesn't support displaying NFTs! But if you have Metamask on your mobile, try the following steps: 

![signal-2022-05-13-150506_002](https://user-images.githubusercontent.com/2758453/168290374-7707aceb-1794-4877-8abf-b49fbee1fb0e.png)

- As `contract address` use `0x9a8469255a7d41a715e539a22eb1127be0973a1e`
- To find the `tokenId` of your Soul Otter, check your Rinkeby transaction and the ["Logs" tab](https://rinkeby.etherscan.io/tx/0x4958d62bb77f507c89df67105b090a3e3e081383b6ebfcd2b65e7e5711d92156#eventlog). The last topic of the `event Attest(address to, uint256 tokenI)` contains the tokenId [[EIP-4973 specification](https://github.com/ethereum/EIPs/blob/acdc991fdee3b0a56abf1aa03a74de86b9f9bef2/EIPS/eip-4973.md#specification)].



## License

See LICENSE file.
