const {InfluxDB, Point} = require('@influxdata/influxdb-client')


const connectInflux = async () => {
    

    const token = "R32eLxREMhBcVvvExPatvudRGYXIg2KOy3RduBDmzN-AHsBk0A9CVkW56oymLW3m-rVWR0Atov73bl97RGecow=="
    const url = 'https://eu-central-1-1.aws.cloud2.influxdata.com'

    const client = new InfluxDB({url, token})

    let org = `mehdi.karmouche@gmail.com`
    let bucket = `se4gd`
    console.log("enetered2")
    let writeClient = client.getWriteApi(org, bucket, 'ns')

    for (let i = 0; i < 5; i++) {
    let point = new Point('measurement1')
        .tag('tagname1', 'tagvalue1')
        .intField('field1', i)

    void setTimeout(() => {
        writeClient.writePoint(point)
    }, i * 1000) // separate points by 1 second

    void setTimeout(() => {
        writeClient.flush()
    }, 5000)
    }
console.log("entered")
}

module.exports = connectInflux