const ReportService = require( "../services/ReportService.js" );
const Reader = require( "../utils/Reader.js" );
const reports = Reader.readJsonFile( "reports.json" );

class ReportController {

    static getReports(){

        return ReportService.allReports( reports )

    }

}

module.exports = ReportController