import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';


class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        meta: manager,
        header: 'Address FUNDING: ',
        description: (
          <Link route={`https://rinkeby.etherscan.io/address/${manager}`}>
            <a class="btn btn-xs btn-success">VIEW THIS ACCOUNT TRANSACTIONS DETAILS</a>
          </Link>

        ),
        style: { overflowWrap: 'break-word' }
      },
      {
        header: 'Tối Thiểu',
        meta: minimumContribution*0.000000000000000001 + ' ETH',
        description:
          'Số tiền gây quỹ từ thiện tối thiểu'
      },
      {
        header: requestsCount + ' Lần',
        meta: 'Yêu cầu rút tiền',
        description:
          'Thống kê số lần yêu cầu thực hiện lệnh rút tiền'
      }
      ,
      {
        header: approversCount + ' Người',
        meta: 'Tham Gia Ủng Hộ',
        description:
          'Số người tham gia ủng hộ vào dự án này'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Số Dư (ETHER)',
        description:
          'Total Balance ETHER.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
           <div class="user-wraper">
        <div class="container">
            <div class="d-flex">
                <div class="user-sidebar">
                    <div class="user-sidebar-overlay"></div>
                    <div class="user-box d-none d-lg-block">
                        <div class="user-image">
                            {/* <img src="images/user-thumb-lg.png" alt="thumb"> */}
                        </div>
                        <h6 class="user-name">Lương Công Hiếu</h6>
                        <div class="user-uid">My ID: <span>ID00001</span></div>
                        <ul class="btn-grp guttar-10px">
                            <li><a href="#" class="btn btn-xs btn-warning">Confirm email</a></li>
                            <li><a href="#" class="btn btn-xs btn-warning">KYC Pending</a></li>
                        </ul>
                    </div>
                    <ul class="user-icon-nav">
                        <li><a href="/view"><em class="ti ti-dashboard"></em>Bảng điều khiển</a></li>
                        <li><a href="#"><em class="ti ti-files"></em>Xác nhân danh tính</a></li>
                        <li><a href="#"><em class="ti ti-control-shuffle"></em>Thông tin giao dịch</a></li>
                        <li><a href="#"><em class="ti ti-infinite"></em>Giới thiệu </a></li>
                        <li><a href="#"><em class="ti ti-user"></em>Tài khoản</a></li>
                        <li><a href="#"><em class="ti ti-lock"></em>Bảo mật</a></li>
                    </ul>
                    <div class="user-sidebar-sap"></div>
                    
                    <div class="d-lg-none">
                        <div class="user-sidebar-sap"></div>
                        <div class="gaps-1x"></div>
                        <ul class="topbar-action-list">
                            <li class="topbar-action-item topbar-action-link">
                                <a href="#"><em class="ti ti-home"></em> Go to main site</a>
                            </li>
                            <li class="dropup topbar-action-item topbar-action-language">
                                <a href="#" data-toggle="dropdown" aria-haspopup="true"> EN <em class="ti ti-angle-up"></em> </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">FR</a></li>
                                    <li><a href="#">JY</a></li>
                                    <li><a href="#">CH</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="user-content">
                    <div class="user-panel">
                        <div class="row">
                        <div class="info-card info-card-bordered">
                            <div class="row align-items-center">
                            <h3>Thông Tin Chiến Dịch Quỹ Từ Thiện Tại Gia Lai
                              <br /> Địa chỉ: 111 Đường số 1, Kon Tum Gia Lai
                            </h3>

                                                <Grid>
                              <Grid.Row>
                                {this.renderCards()}

                                <ContributeForm address={this.props.address} />

                              </Grid.Row>

                              <div class="row request_money">

                                  <Link route={`/campaigns/${this.props.address}/requests`}>
                                    <a class="btn btn-xs btn-danger">
                                      YÊU CẦU RÚT TIỀN QUỸ
                                    </a>
                                  </Link>
                                </div>
                            </Grid>
                            </div>
                           </div>
                            </div>


                    </div>
{/*                
                    <div class="user-panel">
                    <h2 class="user-panel-title">Buy Tokens</h2>
                    <h5 class="user-panel-subtitle">01. Select the payment method and calculate token price</h5>
                    <div class="row">
                                   <div class="col-md-3 col-sm-6">
                                        <div class="payment-item">
                                            <label for="payeth">
                                                <div class="payment-icon payment-icon-eth"></div>
                                                <span class="payment-cur">Ethereum</span>
                                            </label>
                                            <span>@ 0.1 ETH</span>
                                        </div>       
                                   </div>
                                   <div class="col-md-3 col-sm-6">
                                        <div class="payment-item">
                                            <label for="paylightcoin">
                                                <div class="payment-icon payment-icon-ltc"></div>
                                                <span class="payment-cur">Litecoin</span>
                                            </label>
                                            <span>@ 0.1 LTC</span>
                                        </div>
                                   </div>
                                   <div class="col-md-3 col-sm-6">
                                       <div class="payment-item">
                                            <label for="paybtc">
                                                <div class="payment-icon payment-icon-btc"><em class="payment-icon fab fa-btc"></em></div>
                                                <span class="payment-cur">Bitcoin</span>
                                            </label>
                                            <span>@ 0.05 BTC</span>
                                        </div>
                                   </div>
                                   <div class="col-md-3 col-sm-6">
                                       <div class="payment-item">
                                            <label for="payusd">
                                                <div class="payment-icon payment-icon-usd"><em class="payment-icon fas fa-credit-card"></em></div>
                                                <span class="payment-cur">US Dollar</span>
                                            </label>
                                            <span>@ 0.5 USD</span>
                                        </div>
                                   </div>
                                </div>

                                <div class="payment-calculator">
                                 
                                            
                                     
                                    </div>
                    </div>
                  
                  */}
                </div>
                

              
            </div>
        </div>
    </div>
    
    

      </Layout>
    );
  }
}

export default CampaignShow;
