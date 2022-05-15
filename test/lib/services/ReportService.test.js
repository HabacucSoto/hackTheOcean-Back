const Reader = require( "../../../lib/utils/Reader.js" );
const reports = Reader.readJsonFile( "reports.json" );
const ReportService = require( "../../../lib/services/ReportService.js" );

describe( "Unit test for class ReportService", () => {

    test( "1) Test for method allReports", () => {

        const result = ReportService.allReports( reports );
        
        expect( result ).not.toBeUndefined();

    } )

    test( "1) Test for method animalName", () => {

        const result = ReportService.animalName( reports );

        expect( result ).not.toBeUndefined();

    } )

} )