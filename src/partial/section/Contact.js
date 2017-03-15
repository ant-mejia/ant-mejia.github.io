import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <section id="contact" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title uk-margin-xlarge-bottom">Contact</h1>
        <div>
          <h2 className="lato cap text-split">{this.props.contact.tagline}</h2>
          <div>
            <div className="uk-grid-collapse uk-child-width-1-3 uk-text-center" data-uk-grid>
              <div>
                <div className="uk-background-muted uk-padding">Item</div>
              </div>
              <div>
                <div className="uk-background-primary uk-padding uk-light">Item</div>
              </div>
              <div>
                <div className="uk-background-secondary uk-padding uk-light">Item</div>
              </div>
              <div>
                <div className="uk-background-muted uk-padding">Item</div>
              </div>
              <div>
                <div className="uk-background-primary uk-padding uk-light">Item</div>
              </div>
              <div>
                <div className="uk-background-secondary uk-padding uk-light">Item</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Contact;
