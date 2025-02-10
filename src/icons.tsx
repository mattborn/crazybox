import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

library.add(fas, far)

export const getIcon = (iconName: string) => {
  return <FontAwesomeIcon icon={iconName as any} />
}
