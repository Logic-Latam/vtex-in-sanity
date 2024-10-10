import React from 'react'
import type { IconContent } from '../../../typings/footer'
import { handleLocale } from '../../../utils/localeHandler'
import SanityImage from './SanityImage'

const IconsList = ({ iconList }: { iconList: IconContent[] }) => {

  return (
    <div className="flex justify-center justify-between-l items-center mr6-l mb5 mb0-l w-100 w-auto-l">
      {
        iconList?.map((iconItem, index) => (
          <div className={`pv2 ${iconList.length === (index + 1) ? '' : 'mr4'}`}>
            <SanityImage src={iconItem.icon} alt={handleLocale(iconItem.title)} className="db" height={24} />
          </div>
        ))
      }
    </div>
  )
}

export default IconsList