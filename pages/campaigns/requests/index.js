import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    return { address, requests, requestCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          // approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

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
                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                   
                    <div class="row">
                        <div class="col-12">
                            <div class="overflow-x-auto">
                            <h3>Requests</h3>
                            <Link route={`/campaigns/${this.props.address}/requests/new`}>
                              <a>
                                <Button primary floated="right" style={{ marginBottom: 10 }}>
                                  Add Request
                                </Button>
                              </a>
                            </Link>
                            
                            <Table class="data-table tranx-table dataTable no-footer">
                              <Header>
                                <Row>
                                  <HeaderCell>ID</HeaderCell>
                                  <HeaderCell>Mô tả</HeaderCell>
                                  <HeaderCell>Số tiền rút</HeaderCell>
                                  <HeaderCell>Địa chỉ nhận</HeaderCell>
                                  {/* <HeaderCell>Approval Count</HeaderCell> */}
                                  {/* <HeaderCell>Approve</HeaderCell> */}
                                  <HeaderCell>Confirm</HeaderCell>
                                </Row>
                              </Header>
                              <Body>{this.renderRows()}</Body>
                            </Table>
                            <div>Tìm thấy {this.props.requestCount} yêu cầu.</div>
                            </div>
                           
                        </div>
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

export default RequestIndex;
