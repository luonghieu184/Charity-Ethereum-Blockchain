import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '', 
    errorMessage: '',
    successMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '',    successMessage: '',  });

    try {

      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
        this.setState({ successMessage: "Chúc mừng bạn đã tạo chiến dịch thành công. Quay về trang chủ để theo dõi chiến dịch" });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

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
                        <h2 class="user-panel-title">THÔNG TIN TÀI KHOẢN ĐĂNG KÝ CHIẾN DỊCH GÂY QUỸ TỪ THIỆN</h2>
                        <p>Lưu ý: WEL là đồng tiền có mệnh giá nhỏ nhất từ ETHER <br /> 1 WEI = 1/1.000.000.000.000.000.000 = 1/10^18 ETH <br />0.5 ETH = 5x10^17 WEI</p> 

                        <div class="alert-box alert-primary">
                            <div class="alert-txt">YÊU CẦU XÁC NHẬN EMAIL/KYC <br /> </div>
                            <a href="#" class="btn btn-sm btn-primary">Resend Email</a>
                        </div>
                        <ul class="nav nav-tabs nav-tabs-line" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#personal-data">Điền Thông Tin Và Mức Góp Tối Thiểu</a>
                            </li>
                            
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="personal-data">
                                
                                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage} >
                                  <Form.Field>
                                  <label>Tên Chiến Dịch</label>
                                    <Input
                                      label="Tên Chiến Dịch"
                                      labelPosition="right"
                                      
                                    />
                                  <label>Người đại diện</label>
                                    <Input
                                      label="Người đại diện"
                                      labelPosition="right"
                                     
                                    />
                                    <label>Số quỹ đầu tư tối thiểu</label>
                                    <Input
                                      label="wei"
                                      labelPosition="right"
                                      
                                      value={this.state.minimumContribution}
                                      onChange={event =>
                                        this.setState({ minimumContribution: event.target.value })}
                                    />
                                  </Form.Field>
                                  <Message success header="Yeah!" content={this.state.successMessage} />

                                  <Message error header="Oops!" content="Có lỗi xảy ra" />
                                  <Button loading={this.state.loading} primary>
                                    ĐĂNG KÝ TẠO CHIẾN DỊCH!
                                  </Button>
                                </Form>
                            </div>
                            
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    
      </Layout>
    );
  }
}

export default CampaignNew;
