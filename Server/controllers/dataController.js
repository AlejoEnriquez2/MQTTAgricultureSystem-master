const Temperature = require("../models/temperatureModel");
const Humidity = require("../models/humidityModel");
const Solar = require("../models/solarModel")
const Moisture = require("../models/moistureModel")
const Pressure = require("../models/pressureModel")
const Ph = require("../models/phModel")
const Npk = require("../models/npkModel")
const Feeding = require("../models/feedingModel")
const Watering = require("../models/wateringModel")

const persistInflux = require("../utils/saveInflux")

const mongoose = require('mongoose');
console.log("temp:", Temperature)

const saveData = async (req, res) => {
    const {tempVal, tempTimestamp, humidityVal, humTimestamp, pressureVal, pressureTimestamp, moistVal, moistTimestamp, npkVal, npkTimestamp, phVal, phTimestamp, solarVal, solarTimestamp, feedingVal, feedingTimestamp, wateringVal, wateringTimestamp} = req.body
    

   // Creating Temperature 
      const temperature = await Temperature.create({
        measurement: tempVal,
        unit:"degrees",
        time: tempTimestamp
    })
    

    // Creating Humidity 
      const humidity = await Humidity.create({
        measurement: humidityVal,
        unit:"percentage",
        time: humTimestamp
    })
    

    // Creating Pressure 
      const pressure = await Pressure.create({
        measurement: pressureVal,
        unit:"degrees",
        time: pressureTimestamp
    })
    

    // Creating Solar 
      const solar = await Solar.create({
        measurement: solarVal,
        unit:"degrees",
        time: solarTimestamp
    })

    // Creating ph 
      const ph = await Ph.create({
        measurement: phVal,
        unit:"degrees",
        time: phTimestamp
    })
   

    // Creating Moisture 
    
      const moisture = await Moisture.create({
        measurement: moistVal,
        unit:"degrees",
        time: moistTimestamp
    })
      
    

    // Creating Npk 
      const npk = await Npk.create({
        measurement: npkVal,
        unit:"degrees",
        time: npkTimestamp
    })
   

    // Creating Lastfeeding 
    
      const feeding = await Feeding.create({
        measurement: feedingVal,
        unit:"g",
        time: feedingTimestamp
    })

    

    // Creating Lastwatering 
      const watering = await Watering.create({
        measurement: wateringVal,
        unit:"l",
        time: wateringTimestamp
    })
      
    responseObj = {
      ...temperature,
      ...humidity
    }
    console.log("Hey ho")
    return res.status(200).json({message:"Sensor data is saved in the Database"})
    console.log("test")
    
  };


const persistData = async (req, res) => {
  const type = req.params.type 
  if(type ==='temperature'){
    // Creating Temperature
    const {tempVal, tempTimestamp} = req.body
    await persistInflux("temperature", tempVal, tempTimestamp)

    const temperature = await Temperature.create({
      measurement: tempVal,
      unit:"degrees",
      time: tempTimestamp
  })
  if(temperature){
    return res.status(200).json({temperature})
  }
  else
    return res.satus(500).json({message: "can't save temperature data"})
  
  
  }
  else if(type === 'humidity'){
    // Creating Humidity
    const {humidityVal, humidityTimestamp} = req.body
    await persistInflux(type, humidityVal, humidityTimestamp)  
    const humidity = await Humidity.create({
      measurement: humidityVal,
      unit:"percentage",
      time: humidityTimestamp
  })
  if(humidity){
    return res.status(200).json({humidity})
  }
  else
    return res.satus(500).json({message: "can't save humidity data"})
  

  }
  else if(type === 'solar'){
    // Creating Solar 
    const {solarVal, solarTimestamp} = req.body
    await persistInflux(type, solarVal, solarTimestamp)    
    const solar = await Solar.create({
      measurement: solarVal,
      unit:"degrees",
      time: solarTimestamp
  })
  if(solar){
    return res.status(200).json({solar})
  }
  else
    return res.satus(500).json({message: "can't save solar data"})

  }
  else if(type === 'pressure'){
    // Creating Pressure 
    const {pressureVal, pressureTimestamp} = req.body
    await persistInflux(type, pressureVal, pressureTimestamp)  
    const pressure = await Pressure.create({
      measurement: pressureVal,
      unit:"degrees",
      time: pressureTimestamp
  })
  if(pressure){
    return res.status(200).json({pressure})
  }
  else
    return res.satus(500).json({message: "can't save pressure data"})
  }
  else if(type === 'ph'){
    // Creating ph 
    const {phVal, phTimestamp} = req.body
    await persistInflux(type, phVal, phTimestamp)  
    const ph = await Ph.create({
      measurement: phVal,
      unit:"degrees",
      time: phTimestamp
  })
  if(ph){
    return res.status(200).json({ph})
  }
  else
    return res.satus(500).json({message: "can't save ph data"})

  }
  else if(type === 'moisture'){
    // Creating Moisture 
    const {moistVal, moistTimestamp} = req.body
    await persistInflux(type, moistVal, moistTimestamp)  
    const moisture = await Moisture.create({
      measurement: moistVal,
      unit:"degrees",
      time: moistTimestamp
  })
  if(moisture){
    return res.status(200).json({moisture})
  }
  else
    return res.satus(500).json({message: "can't save moisture data"})
  }
  else if(type === 'npk'){
    // Creating Npk
    const {npkVal, npkTimestamp} = req.body
    await persistInflux(type, npkVal, npkTimestamp)   
    const npk = await Npk.create({
      measurement: npkVal,
      unit:"degrees",
      time: npkTimestamp
  })
  if(npk){
    return res.status(200).json({npk})
  }
  else
    return res.satus(500).json({message: "can't save npk data"})
  }
  else if(type === 'feeding'){
    // Creating Lastfeeding 
    const {feedingVal, feedingTimestamp} = req.body 
    await persistInflux(type, feedingVal, feedingTimestamp)  
    const feeding = await Feeding.create({
      measurement: feedingVal,
      unit:"g",
      time: feedingTimestamp
  })
  if(feeding){
    return res.status(200).json({feeding})
  }
  else
    return res.satus(500).json({message: "can't save feeding data"})

  }
  else if(type === 'watering'){
    // Creating Lastwatering
    const {wateringVal, wateringTimestamp} = req.body
    await persistInflux(type, wateringVal, wateringTimestamp)    
    const watering = await Watering.create({
      measurement: wateringVal,
      unit:"l",
      time: wateringTimestamp
  })
  
  if(watering){
    return res.status(200).json({watering})
  }
  else
    return res.satus(500).json({message: "can't save watering data"})
  }
}



  module.exports = {
    saveData,
    persistData
  }