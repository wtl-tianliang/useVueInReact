import { useEffect, useRef } from "react"
const { Rate } = window.ELEMENT
const { Vue } = window

export default function ElButtonCDN (props) {
  const reference = useRef()
  const ElRate = Vue.extend(Rate)

  useEffect(() => {
    const rate = new ElRate({
      propsData: {
        ...props
      }
    })
    rate.$on('change', props.onChange)

    const el = document.createElement('div')
    reference.current.appendChild(el)
    rate.$mount(el)

    return () => {
      rate.$el.parentNode.removeChild(rate.$el)
      rate.$destroy()
    }
  })

  return (
    <div ref={reference}></div>
  )
}