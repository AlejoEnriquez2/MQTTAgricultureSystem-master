const {InfluxDB, Point} = require('@influxdata/influxdb-client')

const persistInflux = async(type, val, timeStamp) => {

    

    const token = "R32eLxREMhBcVvvExPatvudRGYXIg2KOy3RduBDmzN-AHsBk0A9CVkW56oymLW3m-rVWR0Atov73bl97RGecow=="
    const url = 'https://eu-central-1-1.aws.cloud2.influxdata.com'

    const client = new InfluxDB({url, token})

    let org = `mehdi.karmouche@gmail.com`
    let bucket = `se4gd`
    console.log("enetered2")
    let writeClient = client.getWriteApi(org, bucket, 'ns')

    if(type === "temperature"){
        console.log("entered temp")
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('temperature', 'tempValue').intField('temperature', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
        console.log("DONE?!!")

    }
    else if(type === "humidity"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('humdity', 'humidityValue').intField('humidity', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "solar"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('solar', 'solarValue').intField('solar', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "pressure"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('pressure', 'pressureValue').intField('pressure', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "ph"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp); 
        let point = new Point(type).tag('ph', 'phValue').intField('ph', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "moisture"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('moisture', 'moistureValue').intField('moisture', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "npk"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('npk', 'npkValue').intField('npk', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "feeding"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('feeding', 'feedingValue').intField('feeding', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log(point)
    }
    else if(type === "watering"){
        const d = new Date();
        d.setDate(d.getDate() - 1);
        console.log(d)
        var dd = new Date(timeStamp);
        let point = new Point(type).tag('watering', 'wateringValue').intField('watering', val).timestamp(dd)
        writeClient.writePoint(point)
        console.log("test12")
        console.log(point)
        console.log(timeStamp)
    }
}


module.exports = persistInflux