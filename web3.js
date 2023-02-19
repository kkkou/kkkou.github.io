const arbitrumConfig = {
  chainId: 42161,
  chainName: 'Arbitrum',
  nativeCurrency: {
    name: 'Arbitrum Ether',
    symbol: 'AETH',
    decimals: 18
  },
  rpcUrls: ['https://arb1.arbitrum.io/rpc'],
  blockExplorerUrls: ['https://arbiscan.io/']
}

web3.eth.net.getNetworkType((err, networkType) => {
  if (!err) {
    if (networkType !== 'arbitrum') {
      web3.eth.net
        .isListening()
        .then(() => {
          web3.eth.net
            .isConnected()
            .then((connected) => {
              if (connected) {
                web3.currentProvider.request({
                  method: 'wallet_addEthereumChain',
                  params: [arbitrumConfig],
                });
              }
            });
        });
    }
  }
});


if (typeof web3 !== 'undefined') {
  // Metamask is installed
}
else {
  // Metamask is not installed
}

web3.eth.requestAccounts().then(function(accounts) {
  // User connected
}).catch(function(error) {
  // User rejected request or error occurred
});

web3.currentProvider.publicConfigStore.on('update', function(event) {
  console.log('Metamask connection status:', event);
});
