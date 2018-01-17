import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UISidebar')

const SidebarLinks = ({ theme, children }) => (
  <nav className={theme.items}>
    <ul>
      {children}
    </ul>
  </nav>
)

SidebarLinks.propTypes = {
  theme: PropTypes.shape({
    items: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default applyThemr(SidebarLinks)
