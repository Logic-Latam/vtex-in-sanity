import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { LicenceInfo } from '../../../typings/footer'
// import { handleLocale } from '../../utils/localeHandler'

const CSS_HANDLES = ['footer-licence-information']
const LicenceInformation = ({ licenceInformation }: { licenceInformation: LicenceInfo[] }) => {
  const { withModifiers } = useCssHandles(CSS_HANDLES)

  return (
    <div className="flex flex-column-reverse flex-row-l items-start items-center-l w-100 mw9 ph6 ph12-l pv4">
      {
        licenceInformation?.map((_, index) => (
          <div className={`mb0-l mr4-l ${withModifiers('footer-licence-information', `licence-${index}`)} ${licenceInformation.length === (index + 1) ? 'mb3' : index === 0 ? 'mb0' : 'mb3'} `} key={`licence-${index}`}>
            {/* <RichText text={handleLocale(licence.title)} textColor="c-on-base--inverted" font="t-mini" /> */}
          </div>
        ))
      }
    </div>)
}

export default LicenceInformation