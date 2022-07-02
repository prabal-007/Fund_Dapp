import { useState, useEffect } from "react";
import "./App.css";
import Web3 from "web3";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider:null,
    web3:null
  })
  useEffect(() => {
      const loadProvider = async () => {
        // console.log(window.web3);
        // console.log(window.ethereum);
        let provider = null;
        if(window.ethereum){
          provider = window.ethereum;
          try{
            await provider.enable();
          } catch{
            console.error("User is not allowed!");
          }
        } else if(window.web3){
          provider = window.web3.currentProvider;
        } else if(!process.env.production){
          provider = new Web3.providers.HttpProvider("http://localhost:7545");
        } else{
          console.error("Install Metamask");
        }

      setWeb3Api({
        web3: new Web3(provider),
        provider,
      })
    };

      loadProvider();
  },
  
  []);

  console.log(web3Api.web3);
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Funding</div>
        <div class="card-body">
          <h5 class="card-title">Balance: 20 ETH </h5>
          <p class="card-text">
            Account : 0X00000000000000
          </p>
          {/* <button
            type="button"
            class="btn btn-success"
            onClick={async () => {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              console.log(accounts);
            }}
          >
            Connect to metamask
          </button> */}
          &nbsp;
          <button type="button" class="btn btn-success ">
            Transfer
          </button>
          &nbsp;
          <button type="button" class="btn btn-primary ">
            Withdraw
          </button>
        </div>
        <div class="card-footer text-muted">Stark Tower</div>
      </div>
    </>
  );
}

export default App;
