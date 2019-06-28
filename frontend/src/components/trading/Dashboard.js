import React, { Component, Fragment, Card } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getTradings } from "../../actions/tradings";

export class Dashboard extends Component {
  static propTypes = {
    trading: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getTradings();
  }

  render() {
    return (
      <Fragment>
        <div className="containter mt-5">
          <h1>Market Dashboard</h1>
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/">Market</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/limit">Limit</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">BUY</h5>
                      <div className="container">
                        <div className="row">
                          <span>Ask Price</span>
                        </div>
                      </div>
                      <form>
                        <div className="form-group col-md-4" />
                        <label className="form-label">Price in Bitcoin</label>
                        <div className="input-group">
                          <input
                            type="number"
                            // name="currency"
                            className="form-control"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">BTC</span>
                          </div>
                        </div>
                        <label className="form-label">Amount in Etherium</label>
                        <div className="input-group">
                          <input
                            min="1"
                            max="99999999999"
                            required=""
                            type="number"
                            className="form-control"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">ETH</span>
                          </div>
                        </div>
                        <div className="form-actions text-center mt-2">
                          <button type="submit" className="btn btn-success">
                            Buy
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">SELL</h5>
                      <div className="container">
                        <div className="row">
                          <span>Bid Price</span>
                        </div>
                      </div>
                      <form>
                        <div className="form-group col-md-4" />
                        <label className="form-label">Price in Bitcoin</label>
                        <div className="input-group">
                          <input
                            min="1"
                            max="99999999999"
                            required=""
                            type="number"
                            className="form-control"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">BTC</span>
                          </div>
                        </div>
                        <label className="form-label">Amount in Etherium</label>
                        <div className="input-group">
                          <input
                            min="1"
                            max="99999999999"
                            required=""
                            type="number"
                            className="form-control"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">ETH</span>
                          </div>
                        </div>
                        <div className="form-actions text-center mt-2">
                          <button type="submit" className="btn btn-danger">
                            Buy
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trading: state.trading.tradings,
  trading1: state.trading.trading1
});

export default connect(
  mapStateToProps,
  { getTradings }
)(Dashboard);
