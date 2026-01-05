const express = require("express");
const client = require("prom-client");
const app = express();
const PORT = process.env.PORT || 3000;

client.collectDefaultMetrics({ timeout: 5000 });
app.get("/health",(req, res) => {
    res.status(200).json({ status: "UP"});
});

app.get("/metrics", async (req, res) => {
    res.set("content-type", client.register.contentType);
    res.end(await client.register.metrics());
});

app.get("/", (req, res) => {
    res.send("autoscaleOps is running ")
});
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
