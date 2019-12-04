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
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>Xem chiến dịch này</a>
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

        <section class="home_banner_area">
            <div class="banner_inner">
                <div class="container">
                    <div class="banner_content">
                        <p class="upper_text">HÃY DÀNH 1S ỦNG HỘ</p>
                        <h2>“HÀNH ĐỘNG NHỎ – Ý NGHĨA LỚN”</h2>
                        <p>
                        “GIÚP ĐỠ CUỘC SỐNG CỦA NHỮNG NGƯỜI BẤT HẠNH, VÔ GIA CƯ, CHO ĐI VÀ NHẬN LẠI CUỘC SỐNG TƯƠI ĐẸP”
                        <br /> Mang Nụ Cười Của Bạn Chia Sẻ Khắp Thế Gian
                        </p>
                        <Link route={`/view`}>
                        <a class="primary_btn mr-20">ỦNG HỘ NGAY</a>
                        </Link>
                        <Link route={`/view`}>
                        <a class="primary_btn yellow_btn text-white">XEM DANH SÁCH CHIẾN DỊCH ĐANG MỞ</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

      </Layout>
    );
  }
}

export default CampaignIndex;
