import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"><Trans>Copyright</Trans> © <a href="https://www.burundi-jobs.com/" target="_blank" rel="noopener noreferrer"><Trans>burundi-jobs.com</Trans> </a>{new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;