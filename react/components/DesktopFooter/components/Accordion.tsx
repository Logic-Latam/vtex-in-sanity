import React, { useState } from 'react'
import { LinkList } from '../../../typings/footer'
import { handleLocale } from '../../../utils/localeHandler'
import Minus from '../../../icons/Minus'
import Plus from '../../../icons/Plus'

const Accordion = ({ title, linksArray }: LinkList) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-100">
      <button onClick={() => setOpen(!open)} className="bn flex items-center justify-between w-100 bg-footer-primary ph6 pv5 t-body-medium lh-title c-on-base--inverted">
        {handleLocale(title)}
        {open ? <Minus /> : <Plus />}
      </button>
      {
        open &&
        <ul className="list pv0 ph6 ma0 mt3">
          {
            linksArray?.map((link, idx) => (
              <li key={`${handleLocale(link.title)}-${idx}`} className="db mb5">
                <a href={handleLocale(link.url) ?? "#"} className="t-body-medium lh-title fw4 c-inverted-subtle no-underline underline-hover">
                  {handleLocale(link.title)}
                </a>
              </li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Accordion