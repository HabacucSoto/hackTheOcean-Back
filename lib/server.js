const ReportController = require( "./controllers/ReportController.js" );
const express = require( "express" );
const app = express();
app.use( express.json() );
const port = 3000;

app.get( "/", ( req, res ) => {
    res.json({ msg: "Welcome to reports API" });
} );

app.get( "/v1/reports", ( req, res ) => {

    const result = ReportController.getReports();

    res.json( result );

} );

app.get( "/v1/reports/names", ( req, res ) => {

    const result = ReportController.getAnimalNames();

    res.json( result );

} );



app.listen( port, () => console.log( `server: ${ port }` ) );