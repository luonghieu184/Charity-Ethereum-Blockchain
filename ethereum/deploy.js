const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'hope tide empty twice firm hen normal arctic flock enjoy tent initial',
  'rinkeby.infura.io/v3/1dd8e1e8e3b845c799174907c19be5a2'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Trien Khai Tai Khoan', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Ket Qua: ', result.options.address);
};
deploy();
