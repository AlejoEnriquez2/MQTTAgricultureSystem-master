const {InfluxDB, Point} = require('@influxdata/influxdb-client')



    

    const token = "ZzjD3v-gPcwoAX2UsuW_Os80DmciwdkKQO10PpVnlIgrcQgqBQWCzMq_LZeJJkfe5b7dJwjc6WlFfoaDGBDf5w=="
    const url = 'https://eu-central-1-1.aws.cloud2.influxdata.com'

    const client = new InfluxDB({url, token})

    let org = `mehdi.karmouche@gmail.com`
    let bucket = `se4gd`

    let writeClient = client.getWriteApi(org, bucket, 'ns')

    for (let i = 0; i < 5; i++) {
    let point = new Point('measurement7')
        .tag('tagname7', 'tagvalue7')
        .intField('field7', i)

    void setTimeout(() => {
        writeClient.writePoint(point)
        console.log("wrote:", point)
    }, i * 1000) // separate points by 1 second

    void setTimeout(() => {
        writeClient.flush()
        console.log("waiting...")
    }, 5000)

    
    //

    let queryClient = client.getQueryApi(org)
    let fluxQuery = `from(bucket: "se4gd")
    |> range(start: -10m)
    |> filter(fn: (r) => r._measurement == "measurement7")`

    queryClient.queryRows(fluxQuery, {
    next: (row, tableMeta) => {
        const tableObject = tableMeta.toObject(row)
        console.log("results:::::::::::::")
        console.log(tableObject)
    },
    error: (error) => {
        console.error('\nError', error)
    },
    complete: () => {
        console.log('\nSuccess')
        
    },
    })



    }
