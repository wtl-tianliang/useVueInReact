import { useEffect, useRef } from "react"
import Vue from 'vue'
import Rate from './Rate.vue'

const ElRate = Vue.extend(Rate)

export default function ElButton (props) {
  const reference = useRef()

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