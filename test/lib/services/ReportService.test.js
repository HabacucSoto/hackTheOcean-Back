const Reader = require( "../../../lib/utils/Reader.js" );
const reports = Reader.readJsonFile( "reports.json" );
const ReportService = require( "../../../lib/services/ReportService.js" );

describe( "Unit test for class ReportService", () => {

    test( "1) Test for method allReports", () => {

        const result = ReportService.allReports( reports );
        
        expect( result ).not.toBeUndefined();

    } );

    test( "2) Test for method animalName", () => {

        const result = ReportService.animalName( reports );

        expect( result ).not.toBeUndefined();

    } );

    test( "3) Test for method coordinates", () => {

        const result = ReportService.coordinates( reports );

        expect( result ).not.toBeUndefined();

    } );

    test( "4) Test for method animalWithCoordinates", () => {

        const result = ReportService.animalWithCoordinates( reports );

        expect( result ).not.toBeUndefined();

    } );

} );