import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }                 
  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
         header: "Chiến dịch tình nguyện tại Gia Lai",
          meta: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a class="btn btn-xs btn-success">XEM CHIẾN DỊCH VÀ ỬNG HỘ NGAY</a>
          </Link>

        ),
   
        fluid: true
      };
    });

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
                        <li><a href="#"><em class="ti ti-infinite"></em>Tạo Mới Chiến Dịch * </a></li>
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
                                <div class="col-sm-3">
                                    <div  id="charity-image">
                                        
                                    </div>
                                    <div class="gaps-2x d-md-none"></div>
                                </div>
                                <div class="col-sm-9">
                                    <h4>THANK YOU FOR USING OUR SYSTEM CHARITY HELP ONE MILION PEOPLE</h4>
                                    <p>Qũy từ thiện của chúng tôi hoạt động không vì mục đích lợi nhuận, quy tắc hoạt động của chúng tôi là mục đích gọi vốn để cùng chung tay giúp đỡ các mảnh đời bất hạnh trong cuộc sống, hỗ trợ và khuyết khích các tấm gương hiếu học.
Qũy từ thiện của chúng tôi công khai, minh bạch và rõ ràng trong thu - chi. .</p>
                                </div>
                            </div>
                           </div>
                            </div>
                        <div class="gaps-3x"></div>

                        <div class="row">
                        <div class="info-card info-card-bordered">
                            <div class="row align-items-center">
                                <div class="col-sm-3">
                                    <div class="info-card-image">
                                    <Link route="/campaigns/new">
                                        <a class="btn btn-xs btn-primary">
                                          Tạo Chiến Dịch Mới
                                        </a>
                                  </Link>
                                    </div>
                                    <div class="gaps-2x d-md-none"></div>
                                </div>
                                <div class="col-sm-9">
                                    <h4>Bạn là cá nhân muốn giúp cộng đồng <br/>Bạn là tổ chức muốn góp quỹ từ thiện trên mọi nơi vùng sâu vùng xa<br/></h4>
                                   
                                </div>
                            </div>
                           </div>
                            </div>
                            <div class="row">
                        <div class="info-card info-card-bordered">
                            <div class="row align-items-center">
                            {this.renderCampaigns()}
                            </div>
                           </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="footer-bar">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <span class="footer-copyright">2019, <a href="#">Funding</a>.  Development.</span>
                </div>
                <div class="col-md-5 text-md-right">
                    <ul class="footer-links">
                        <li><a href="#">GVHD: ThS. Nguyễn Đình Ánh</a></li>
                        <li><a href="#">HUTECH UNIVERSITY</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
