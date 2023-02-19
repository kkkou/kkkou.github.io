// 获取连接按钮的元素
const connectButton = document.getElementById('connect-button');

// 添加点击事件处理程序
connectButton.addEventListener('click', async () => {
  // 检查用户的浏览器是否已安装MetaMask
  if (typeof window.ethereum !== 'undefined') {
    try {
      // 请求连接到Arbitrum网络
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xa4b1',
            chainName: 'Arbitrum',
            nativeCurrency: {
              name: 'Arbitrum Ether',
              symbol: 'AETH',
              decimals: 18
            },
            rpcUrls: ['https://arb1.arbitrum.io/rpc'],
            blockExplorerUrls: ['https://arbiscan.io/']
          }
        ]
      });
      // 连接成功，执行其他逻辑
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      console.log('Connected:', accounts[0]);
      // 在这里可以添加其他逻辑
    } catch (error) {
      console.error('Connection error:', error);
      // 连接错误，处理异常情况
    }
  } else {
    console.error('MetaMask is not installed');
    // MetaMask未安装，处理异常情况
  }
});
