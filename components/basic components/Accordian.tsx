import React from 'react'

function Accordian() {
  return (
    <div>
        <div className="hs-accordion-group">
  <div className="hs-accordion active" id="hs-basic-no-arrow-heading-one">
    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-no-arrow-collapse-one">
      Accordion #1
    </button>
    <div id="hs-basic-no-arrow-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-no-arrow-heading-one">
      <p className="text-gray-800 dark:text-neutral-200">
        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>

  <div className="hs-accordion" id="hs-basic-no-arrow-heading-two">
    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-no-arrow-collapse-two">
      Accordion #2
    </button>
    <div id="hs-basic-no-arrow-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-no-arrow-heading-two">
      <p className="text-gray-800 dark:text-neutral-200">
        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>

  <div className="hs-accordion" id="hs-basic-no-arrow-heading-three">
    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-no-arrow-collapse-three">
      Accordion #3
    </button>
    <div id="hs-basic-no-arrow-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-no-arrow-heading-three">
      <p className="text-gray-800 dark:text-neutral-200">
        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Accordian