const ReportController = require( "./controllers/ReportController.js" );
const express = require( "express" );
const app = express();
app.use( express.json() );
const port = 3000;

app.get( "/", ( req, res ) => {
    res.json({ msg: "Welcome to reports API" });
} );



app.listen( port, () => console.log( `server: ${ port }` ) );