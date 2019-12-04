import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: '',
    successMessage: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: '',successMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });
        this.setState({ successMessage: "Chúc mừng bạn đã tạo rút tiền thành công. Vui lòng đợi và kiểm tra ví của bạn" });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
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
                        <h2 class="user-panel-title">YÊU CẦU ĐIỀN ĐẦY ĐỦ THÔNG TIN RÚT TIỀN CHIẾN DỊCH GÂY QUỸ TỪ THIỆN</h2>
                        <p>Lưu ý: Chỉ những cá nhân tổ chức tạo chiến dịch mới rút được</p> 

                       
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="personal-data">
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                              <a>QUAY VỀ CHIẾN DỊCH</a>
                            </Link>
                            <h3>Tạo yêu cầu mới</h3>
                            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
                              <Form.Field>
                                <label>Mô tả ngắn lý do bạn rút tiền</label>
                                <Input
                                  value={this.state.description}
                                  onChange={event =>
                                    this.setState({ description: event.target.value })}
                                />
                              </Form.Field>

                              <Form.Field>
                                <label>Giá tiền Ether</label>
                                <Input
                                  value={this.state.value}
                                  onChange={event => this.setState({ value: event.target.value })}
                                />
                              </Form.Field>

                              <Form.Field>
                                <label>Địa chỉ ví của bạn</label>
                                <Input
                                  value={this.state.recipient}
                                  onChange={event =>
                                    this.setState({ recipient: event.target.value })}
                                />
                              </Form.Field>
                              <Message success header="Yeah!" content={this.state.successMessage} />

                              <Message error header="Oops!" content="Xin Lỗi! Bạn đã từ chối rút tiền hoặc không được phép rút tiền" />
                              <Button primary loading={this.state.loading}>
                                Tạo Yêu Cầu Mới!
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

export default RequestNew;
