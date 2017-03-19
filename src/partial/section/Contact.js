import React from 'react';
import ContactCard from '../../components/ContactCard';
class Contact extends React.Component {

  socialMedia = (ext) => {
    if (this.props.profile.social) {
      return this.props.profile.social[ext]
    }
  }

  render() {
    return (
      <section id="contact" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title uk-margin-xlarge-bottom">Contact</h1>
        <div>
          <h2 className="lato cap text-split uk-margin-xlarge-bottom">{this.props.contact.tagline}</h2>
          <div>
            <div className="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center uk-grid-divider" data-uk-grid>
              <ContactCard text={this.props.profile.email} alt="Email Address" link={`mailto:${this.props.profile.email}`}/>
              <ContactCard text={this.socialMedia('github')} alt="Github" link={`https://github.com/${this.socialMedia('github')}`}/>
              <ContactCard text={`/in/${this.socialMedia('linkedin')}`} alt="LinkedIn" link={`https://linkedin.com/in/${this.socialMedia('linkedin')}`}/>
              <ContactCard text={this.props.profile.phone} alt="Phone" link={`tel:${this.props.profile.phone}`}/>
              <ContactCard text={`@${this.socialMedia('twitter')}`} alt="Twitter" link={`https://twitter.com/${this.socialMedia('twitter')}`}/>
              <ContactCard text={this.socialMedia('atom')} alt="Atom" link={`https://ns-otaffvvzxp.now.sh/${this.socialMedia('atom')}`}/>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Contact;
