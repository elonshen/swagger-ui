import React from "react"
import PropTypes from "prop-types"


const OpenAPIVersion = ({ oasVersion }) => (
  <span></span>
  // <small className="version-stamp">
  //   <pre className="version"></pre>
  // </small>
)

OpenAPIVersion.propTypes = {
  oasVersion: PropTypes.string.isRequired
}

export default OpenAPIVersion