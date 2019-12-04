import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // '0x45d2380a71b304a9c617809371f658b80ba0a941' 
  '0xb3D41DF397568EB5de68d570545d5820D1F6cA6e'
);

export default instance;
