import React from 'react'
import Accordion from './components/Accordion'
import { schema } from './schema'
import { defaultProps } from './defaultProps'
import FeaturedInformation from './components/FeaturedInformation'
import IconsList from './components/IconsList'
import LicenceInformation from './components/LicenceInformation'
import { RonaFooter } from '../../typings/footer'

const FooterMobile = ({
  footerLinkLists,
  featuredInformationSecondRow,
  paymentProviders,
  socialMedia,
  licenceInformation
}: RonaFooter) => {

  return (
    <footer className="bg-footer-primary">
      <div className="ph7 pt5">
        <section className="flex flex-column mb8">
          {
            footerLinkLists?.map((link) => (
              <Accordion title={link.title} linksArray={link.linksArray} />
            ))
          }
        </section>
        <section className="flex flex-wrap ph6 pt6 pv6-l">
          <FeaturedInformation featuredInformation={featuredInformationSecondRow} />
        </section>
        <section className={`flex justify-center bg-footer-primary w-100`}>
          <div className="flex justify-between w-100 mw9 ph12-l pv6-l ma0-l">
            <div className="flex flex-column flex-row-l items-center justify-center w-100">
              <IconsList iconList={paymentProviders} />
              <IconsList iconList={socialMedia} />
            </div>
          </div>
        </section>
      </div>
      <section className={`flex justify-center w-100 bg-footer-copyright`}>
        <LicenceInformation licenceInformation={licenceInformation} />
      </section>
    </footer>
  )
}

FooterMobile.schema = schema
FooterMobile.defaultProps = {
  ...defaultProps,
  licenceInformation: [
    {
      title: "© Rona 2023, tous droits réservés"
    },
    {
      title: "[Politique de confidentialité](#) [Conditions d’utilisation](#)"
    },
    {
      title: "Licence RBQ : 8007-1434-00"
    }
  ]
}

export default FooterMobile