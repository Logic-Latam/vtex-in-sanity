import React from 'react'
import { useQuery } from 'react-apollo';
import { useCssHandles } from 'vtex.css-handles';
import LicenceInformation from './components/LicenceInformation';
import FeaturedInformation from './components/FeaturedInformation';
import IconsList from './components/IconsList';

import { schema } from './schema'
import { defaultProps } from './defaultProps'
import { RonaFooter } from '../../typings/footer';

import { handleLocale } from '../../utils/localeHandler';

import Query from '../../graphql/SanityFooter.gql'
import './style.css'

const CSS_HANDLES = [
  'footer',
  'footer-wrapper',
  'footer-content',
  'footer-logo',
  'footer-logo-wrapper',
  'footer-featured-information',
  'footer-link-lists',
  'footer-social-media',
  'footer-payment-providers',
  'footer-licence-information',
] as const

const DesktopFooter: StorefrontFunctionComponent<RonaFooter> = (
  { logo }
) => {
  const { handles, withModifiers } = useCssHandles(CSS_HANDLES)

  const { loading, error, data } = useQuery(Query, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    return <>{error.message}</>
  }

  console.log('data: ', data)

  const footer: RonaFooter = data.footer[0]

  const { footerLinkLists, featuredInformationSecondRow, paymentProviders, socialMedia, licenceInformation } = footer

  return (
    <footer className={`${handles.footer} w-100 bg-footer-primary`}>
      <section className={`${withModifiers('footer-wrapper', 'section-one')} flex w-100 justify-center`}>
        <div className={`${withModifiers('footer-content', 'section-one')} flex justify-between w-100 mw9 pv10 ph12`}>
          <div className="w-30">
            <img src={logo} />
          </div>
          <div className="flex flex-col w-100 w-70-ns">
            {
              footerLinkLists?.map((linkList, index) => (
                <div className={`w-25 ${footerLinkLists.length === (index + 1) ? '' : 'mr7'}`} key={`${handleLocale(linkList.title)}-${index}`}>
                  <strong className="c-on-base--inverted f6 fw7 db mb6 lh-title">
                    {handleLocale(linkList.title)}
                  </strong>
                  <ul className="list pa0 ma0">
                    {
                      linkList.linksArray?.map((link, idx) => (
                        <li key={`${handleLocale(link.title)}-${idx}`} className="db mb5">
                          <a href={handleLocale(link.url) ?? "#"} className="c-inverted-subtle f6 fw4 no-underline underline-hover lh-title">
                            {handleLocale(link.title)}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className={`${withModifiers('footer-wrapper', 'section-two')} flex justify-center bg-footer-primary w-100`}>
        <div className="flex justify-between w-100 mw9 ph12 pv6">
          <FeaturedInformation featuredInformation={featuredInformationSecondRow} />
        </div>
      </section>
      <section className={`${withModifiers('footer-wrapper', 'section-three')} flex justify-center bg-footer-primary w-100`}>
        <div className="flex justify-between w-100 mw9 ph12 pv6">
          <div className="flex">
            <IconsList iconList={paymentProviders} />
            <IconsList iconList={socialMedia} />
          </div>
        </div>
      </section>
      <section className={`${withModifiers('footer-wrapper', 'section-four')} flex justify-center w-100 bg-footer-copyright`}>
        <LicenceInformation licenceInformation={licenceInformation} />
      </section>
    </footer >
  )
}

DesktopFooter.schema = schema
DesktopFooter.defaultProps = defaultProps

export default DesktopFooter