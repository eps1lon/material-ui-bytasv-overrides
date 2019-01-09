import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const TextField = (props) => {
  const {
    size,
    Icon,
    iconPosition,
    InputProps = {},
    InputLabelProps = {}
  } = props

  if (Icon) {
    const IconAdornment = (
      <InputAdornment position='start'>
        {Icon}
      </InputAdornment>
    )
    InputLabelProps.shrink = 'auto'
    InputProps.disableUnderline = true

    if (iconPosition === 'end') {
      InputProps.endAdornment = IconAdornment
      InputLabelProps.className = 'adornedEnd'
    } else {
      InputProps.startAdornment = IconAdornment
      InputLabelProps.className = 'adornedStart'
    }
  }

  return (
    <MUITextField
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      {...props}
    >
      {props.children}
    </MUITextField>
  )
}

TextField.defaultProps = {
  iconPosition: 'end',
  size: 'default'
}

export default TextField