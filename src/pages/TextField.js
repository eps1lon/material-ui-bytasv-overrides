import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  adornedStart: {
    transform: 'translate(2.8em, 1em) scale(1)',
    '&$shrink': {
      transform: 'translate(2.8em, 0.6em) scale(.75)'
    }
  },
  adornedEnd: {},
  shrink: {},
}

const TextField = (props) => {
  const {
    classes,
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
    InputLabelProps.classes = { shrink: classes.shrink }
    InputProps.disableUnderline = true

    if (iconPosition === 'end') {
      InputProps.endAdornment = IconAdornment
      InputLabelProps.className = classes.adornedEnd
    } else {
      InputProps.startAdornment = IconAdornment
      InputLabelProps.className = classes.adornedStart
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

export default withStyles(styles)(TextField)