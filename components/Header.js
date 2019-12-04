import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    
    <div class="topbar">
        <div class="topbar-md d-lg-none">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <a href="#" class="toggle-nav">
                        <div class="toggle-icon">
                            <span class="toggle-line"></span>
                            <span class="toggle-line"></span>
                            <span class="toggle-line"></span>
                            <span class="toggle-line"></span>
                        </div>
                    </a>

         
                </div>
            </div>
        </div>
        <div class="container">
            <div class="d-lg-flex align-items-center justify-content-between">
                
                <div class="topbar-action d-none d-lg-block">
                    <ul class="topbar-action-list">
                        <li class="topbar-action-item topbar-action-link">
                            <a href="/"><em class="ti ti-home"></em>Đi đến trang chủ</a>
                        </li>

                        <li class="dropdown topbar-action-item topbar-action-language">
                            <a href="#" data-toggle="dropdown"> VN <em class="ti ti-angle-down"></em> </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">EN</a></li>
                                
                            </ul>
                        </li>

                        <li class="dropdown topbar-action-item topbar-action-user">
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="user-dropdown">
                                    <div class="user-dropdown-head">
                                        <h6 class="user-dropdown-name">Lương Công Hiếu<span>(ID00001)</span></h6>
                                        <span class="user-dropdown-email">admin@domain.com</span>
                                    </div>
                                    <div class="user-dropdown-balance">
                                        <h6>BALANCE</h6>
                                        <h3>120,000,000 VNFUND</h3>
                                        <ul>
                                            <li>1000 BTC</li>
                                            <li>1000 ETH</li>
                                            <li>1000 USD</li>
                                        </ul>
                                    </div>
                                    <ul class="user-dropdown-links">
                                        <li><a href="#"><i class="ti ti-id-badge"></i>Thông tin</a></li>
                                        <li><a href="#"><i class="ti ti-lock"></i>Bảo mật</a></li>
                                        <li><a href="#"><i class="ti ti-eye"></i>Hoạt động</a></li>
                                    </ul>
                                    <ul class="user-dropdown-links">
                                        <li><a href="#"><i class="ti ti-power-off"></i>Đăng xuât</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
  );
};
