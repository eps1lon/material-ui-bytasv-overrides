export default {
  MuiInputBase: {
    root: {
      border: 'solid 1px #dfe3e9',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: 'transparent',
      transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) border-color',

      '&$focused': {
        borderColor: '#204ecf'
      },

      '&$focused, &:hover': {
        backgroundColor: 'transparent'
      },

      '&$error': {
        borderColor: '#e0b4b4',
        color: '#9f3a38',
        backgroundColor: '#fff6f6'
      }
    },
    input: {
      fontSize: '18px',
      lineHeight: '1.2em'
    }
  },
  MuiInputLabel: {
    filled: {
      transform: 'translate(0.75em, 1em) scale(1)',

      '&$shrink': {
        transform: 'translate(0.85em, 0.6em) scale(.75)'
      },
    },

    shrink: {},

    error: {
      color: '#e0b4b4'
    },
  },
  MuiFilledInput: {
    root: {
      border: 'solid 1px #dfe3e9',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: 'transparent',
      transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) border-color',

      '&$focused': {
        borderColor: '#204ecf'
      },

      '&$focused, &:hover': {
        backgroundColor: 'transparent'
      },

      '&$error': {
        borderColor: '#e0b4b4',
        color: '#9f3a38',
        backgroundColor: '#fff6f6'
      }
    },
    input: {
      padding: '1.2em .7em .2em'
    },
    underline: {
      '&:after, &:before': {
        content: 'none'
      }
    },
    focused: {},
    error: {}
  },
  MuiSelect: {
    select: {
      '&:focus': {
        backgroundColor: 'transparent'
      }
    }
  }
}