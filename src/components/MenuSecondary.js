import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function MenuSecondary() {
  const data = useStaticQuery(
    graphql`
      query {
        menuYaml(label: { eq: "secondary" }) {
          items {
            object_id
            title
            url
          }
        }
      }
    `
  )

  const menu_items = data.menuYaml.items

  // set initial windowPathname state
  const [windowPathname, setWindowPathname] = useState('')

  // update windowPathname
  useEffect(() => {
    setWindowPathname(window.location.pathname)
  })

  return (
    <div className="navbar__menus__item menu-secondary" id="menu-secondary">
      {Object.entries(menu_items).map(([key, item]) => {
        const activeClass = item.url == windowPathname ? ' active ' : ''
        let link
        if (item.url.substr(0, 1) == '/') {
          link = (
            <Link
              className={` menu-secondary__item ${activeClass}`}
              to={item.url}
              key={item.object_id}
            >
              {item.title}
            </Link>
          )
        } else {
          link = (
            <a
              className="menu-secondary__item"
              href={item.url}
              key={item.object_id}
            >
              {item.title}
            </a>
          )
        }
        return link
      })}
    </div>
  )
}
