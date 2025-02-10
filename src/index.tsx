'use client'

import './styles.css'
import { getIcon } from './icons'
import React, { ElementType, ComponentPropsWithoutRef } from 'react'

interface CrazyboxProps extends ComponentPropsWithoutRef<any> {
  isRequired?: boolean
  label?: string
  leftIcon?: string
  messageAfter?: string
  text?: string
  rightIcon?: string
  tagName?: ElementType
}

const Crazybox: React.FC<CrazyboxProps> = ({
  isRequired,
  label,
  leftIcon,
  messageAfter,
  text,
  rightIcon,
  tagName: Tag = 'div',
  ...props
}) => {
  return (
    <div className="crazy">
      {label && (
        <label className="crazy-label">
          {label}
          {isRequired && <span>*</span>}
        </label>
      )}
      <div className="crazy-wrap">
        {leftIcon && <span className="crazy-icon-left">{getIcon(leftIcon)}</span>}
        <Tag
          className="crazy-box"
          tabIndex={0}
          {...props}
          {...(Tag === 'div' || Tag === 'button' ? { children: text } : { defaultValue: text })}
        />
        {rightIcon && <span className="crazy-icon-right">{getIcon(rightIcon)}</span>}
      </div>
      {messageAfter && <p className="crazy-message">{messageAfter}</p>}
    </div>
  )
}

export default Crazybox
