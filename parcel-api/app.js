const express = require('express');
const app = express();
const port = 3000;

// Route for /parcel
app.get('/', (req, res) => {
    console.debug('GET /parcel headers:', req.headers);
    // Generate dummy parcel data
    const parcelData = [{
        id: 1,
        sender: {
            name: 'John Doe',
            address: '123 Main St, Springfield',
            phone: '555-555-5555'
        },
        receiver: {
            name: 'Jane Smith',
            address: '456 Elm St, Shelbyville',
            phone: '555-555-5556'
        },
        weight: '2kg',
        status: 'In Transit',
        estimatedDelivery: '2024-07-01'
    }];

    // Send parcel data as JSON response
    res.json(parcelData);
});

// Start the server
app.listen(port, () => {
    console.log(`Parcel API listening at http://localhost:${port}`);
});