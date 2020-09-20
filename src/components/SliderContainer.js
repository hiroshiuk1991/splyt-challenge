import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: 300
  }
})

function valuetext (value) {
  return `${value}`
}

export default function SliderContainer (props) {
  const classes = useStyles()


  return (
    <div className={classes.root}>
      <Typography
        className='slider-title'
        id='discrete-slider-small-steps'
        gutterBottom
      >
        Number of Drivers
      </Typography>
      <Slider
        defaultValue={props.driverNum}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider-small-steps'
        step={1}
        marks
        min={0}
        max={50}
        valueLabelDisplay='auto'
        onChange={(event) => props.changeSliderNum(event)}
      />
    </div>
  )
}
