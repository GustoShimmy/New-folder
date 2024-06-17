const metamaskConfig = metamaskWallet();

function App() {
  const connect = useConnect();

  const handleConnect = async () => {
    await connect(metamaskConfig, connectOptions);
  };
  const coinbaseConfig = coinbaseWallet();

  function App() {
    const connect = useConnect();
  
    const handleConnect = async () => {
      await connect(coinbaseConfig, connectOptions);
    };
  
    return <div> ... </div>;
  }
  const walletConnectConfig = walletConnect();

  function App() {
    const connect = useConnect();
  
    const handleConnect = async () => {
      await connect(walletConnectConfig, connectOptions);
    };
  
    return <div> ... </div>;
  }
    
  return <View> ... </View>;
}
