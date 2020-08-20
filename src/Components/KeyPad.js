import React from 'react'
import { Button, Grid } from '@material-ui/core'

function KeyPad(props) {
  const clickHandler = (e) => {
    props.buttonPressed(e)
  }

  const keys = ['(', ')', 'C', 'ON/OFF', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+']
  return (
    <Grid container spacing={3}>
      {keys.map((item) => (
        <Grid key={item} item xs={3}>
          <Button
            size="large"
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => clickHandler(item)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default KeyPad

// let calculateResult = (operation, values) => {
//   return new Promise((resolve, reject) => {
//     switch (operation){
//       case '/':
//         resolve(values[0]/values[1]);
//         break;
//       case '*':
//         resolve(values[0]*values[1]);
//         break;
//       case '+':
//         resolve(values[0]+values[1]);
//         break;
//       case '-':
//         resolve(values[0]-values[1]);
//         break;
//       default:
//         reject('Sth is wrong!')

//     }
//   })
// }
