import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    successMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '', successMessage: '' });


    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
      this.setState({ successMessage: "Chúc mừng bạn đã ủng hộ chiến dịch này"});

      Router.replaceRoute(`/campaigns/${this.props.address}`);


    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage} >
        <Form.Field>
        <div class="payment-get">
        <div class="payment-input">

          <label>Nhập số tiền ủng hộ</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
          </div></div>
        </Form.Field>
        <Message success header="Yeah!" content={this.state.successMessage} />

        <Message error header="ERROR!" content="GIAO DỊCH LỖI HOẶC BẠN ĐÃ TỪ CHỐI THANH TOÁN" />
        <Button primary loading={this.state.loading}>
          QUYÊN GÓP NGAY!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
