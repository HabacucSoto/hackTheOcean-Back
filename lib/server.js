const ReportController = require( "./controllers/ReportController.js" );
const express = require( "express" );
const app = express();
app.use( express.json() );
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.get( "/", ( req, res ) => {
    res.json({ msg: "Welcome to reports API" });
} );

app.get( "/v1/reports", ( req, res ) => {

    const result = ReportController.getReports();

    res.json( result );

} );

app.get( "/v1/reports/animals", ( req, res ) => {

    const result = ReportController.getAnimalNames();

    res.json( result );

} );

app.get( "/v1/reports/coordinates", ( req, res ) => {

    const result = ReportController.getCoordinates();

    res.json( result );

} );

app.get( "/v1/reports/animals/location", ( req, res ) => {

    const result = ReportController.getAnimalAndCoordinates();

    res.json( result );

} );



app.listen( port, () => console.log( `server: ${ port }` ) );