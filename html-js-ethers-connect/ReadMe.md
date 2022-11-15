A few different examples on connecting your dApps to metamask / wallets.


================
Note
================
connecting our frontend app to smart contract backend as a full stack developer.
full documentation of all the tools, library and code used in the process in this code base.
window.ethereum // shows data of the metamask 
if there is no metamask on the browser, or any other wallet it returns undefined.
this is because the wallet extension inject in to the browser window on installation. 
for an app to interact with a blockchain it needs a blockchain node e.g infura, alchemy etc, which is injected(provided to the app/browser by the browser extension eg metamask wallet extension or any other wallet extension).

packages for sending transaction 
ethersjs, web3.js

    // address 
    // contract ABI (blueprint to interact with a contract ) this can be found in your contract/deployments/contractname.json ==> copy the abi array.
    // function 
    // node connection: (our metamask) ✅