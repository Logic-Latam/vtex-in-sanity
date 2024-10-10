import React from 'react'
import { handleLocale } from '../../../utils/localeHandler'
import { FeaturedInformation } from '../../../typings/footer'
import SanityImage from './SanityImage'


const FeaturedInformation = ({ featuredInformation }: { featuredInformation: FeaturedInformation[] }) => {
  return (
    <>
      {
        featuredInformation && featuredInformation.map((featuredInfo, index) => (
          <a
            href={handleLocale(featuredInfo.callToAction?.url) ?? "#"}
            className={`flex flex-column flex-row-l w-50 w-100-l jsutify-center justify-start-l items-center no-underline mb8 mb0-l ${(index === 0 || index === 2) ? 'pr4 border-box pr0-l' : 'pl4 border-box pl0-l'}`}
            key={`${handleLocale(featuredInfo.title)}-${index}`}
          >
            <div className="mb6 mb0-l mr5-l">
              <SanityImage src={featuredInfo.icon} className="db pv3 w-auto" height={36} />
            </div>
            <div className="c-action-primary">
              <strong className="db w-100 c-on-base--inverted tc tl-l t-mini t-body-small-l fw5 mb2">
                {handleLocale(featuredInfo.title)}
              </strong>
              <span className="db w-100 c-subtle tc tl-l mb4 t-mini t-body-small-l fw4 fw4-l">
                {handleLocale(featuredInfo.callToAction?.title)}
              </span>
            </div>
          </a>
        ))
      }
    </>
  )
}

export default FeaturedInformation