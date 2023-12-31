import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Network from '../components/Network'
import Events from '../components/Events'
import Voices from '../components/Voices'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import UtilsService from '../services/utils-service'

export default function Index() {
  let menu_items_length
  let screen_height
  let menu_items_offsets // The array of (id) all menu points names and (pos) offsets of their anchors
  let current_menu_item_name

  useEffect(() => {
    defineMenuValues()
    bindMenuHighlightActions()
    return () => {
      unbindMenuHighlightActions()
    }
  }, [])

  const defineMenuValues = () => {
    if (typeof window === `undefined`) return

    const menu_items = document.querySelectorAll('#menu-primary a[href]')
    menu_items_length = menu_items.length
    menu_items_offsets = new Array()
    current_menu_item_name = ''

    screen_height = window.innerHeight
    menu_items.forEach((menu_item) => {
      const href = menu_item.getAttribute('href')
      if (href.substr(0, 2) == '/#') {
        const id = href.substr(2, href.length)
        if (document.getElementById(id) != null) {
          const offset = utilsService.getOffset(document.getElementById(id))
          menu_items_offsets.push({ pos: parseInt(offset.top), id })
        }
      }
    })
  }

  const highlightCurrentMenuPoint = () => {
    if (typeof window === `undefined`) return

    if (
      typeof menu_items_offsets !== 'undefined' &&
      menu_items_offsets.length != 0
    ) {
      let i = menu_items_length
      const y_scroll_pos = window.pageYOffset + screen_height * 0.5

      let nearest = { pos: 0, id: '' }
      while (i--) {
        if (
          menu_items_offsets[i].pos < y_scroll_pos &&
          menu_items_offsets[i].pos > nearest.pos
        ) {
          nearest = menu_items_offsets[i]
        }
      }
      const active_link = document.querySelector('#menu-primary a.active')
      if (nearest.id == '') {
        if (active_link != null) {
          document
            .querySelector('#menu-primary a.active')
            .classList.remove('active')
        }
      } else if (current_menu_item_name != nearest.id) {
        const nearest_link = document.querySelector(
          `#menu-primary a[href='/#${nearest.id}']`
        )
        if (active_link != null) {
          document
            .querySelector('#menu-primary a.active')
            .classList.remove('active')
        }
        if (nearest_link != null) {
          document
            .querySelector(`#menu-primary a[href='/#${nearest.id}']`)
            .classList.add('active')
        }
      }
    }
  }

  const utilsService = new UtilsService()
  const highlightCurrentMenuPointThrottled = utilsService.debounce(
    () => {
      highlightCurrentMenuPoint()
    },
    250,
    true,
    true
  )

  const bindMenuHighlightActions = () => {
    if (typeof window === `undefined`) return

    // Bind reloading of menu highlight action on window resize:
    window.addEventListener('resize', defineMenuValues)
    window.addEventListener('resize', highlightCurrentMenuPoint)
    // Document is getting longer when new voices are loaded into the voices list. So we need to reload actions:
    window.addEventListener('voicesLoaded', defineMenuValues)
    window.addEventListener('voicesLoaded', highlightCurrentMenuPoint)
    // Bind menu highlighting on scroll:
    window.addEventListener('scroll', highlightCurrentMenuPointThrottled)
  }

  // Unbind all actions from bindMenuHighlightActions()
  const unbindMenuHighlightActions = () => {
    if (typeof window === `undefined`) return

    window.removeEventListener('resize', defineMenuValues)
    window.removeEventListener('resize', highlightCurrentMenuPoint)
    window.removeEventListener('voicesLoaded', defineMenuValues)
    window.removeEventListener('voicesLoaded', highlightCurrentMenuPoint)
    window.removeEventListener('scroll', highlightCurrentMenuPointThrottled)
  }

  const content = (
    <div>
      <Hero />
      <AboutUs />
      <Network />
      <Events />
      <Voices />
      <Partners />
      <Footer />
    </div>
  )

  return <Layout content={content} />
}
