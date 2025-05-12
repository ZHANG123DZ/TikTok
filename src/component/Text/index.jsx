import clsx from "clsx"
import React from "react"

function Text({children, }) {
  const Component = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: clsx()
    })
  })
  return Component;
}

export default Text
