const ReportController = require( "../../../lib/controllers/ReportController.js" );

describe( "Unit test for class ReportController", () => {

    test( "1) Test for method getReports", () => {

        const result = ReportController.getReports()

        expect( result ).not.toBeUndefined();

    } )

    test( "2) Test for method getAnimalNames", () => {

        const result = ReportController.getAnimalNames()

        expect( result ).not.toBeUndefined();

    } )

} )