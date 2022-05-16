const ReportService = require( "../services/ReportService.js" );
const Reader = require( "../utils/Reader.js" );
const reports = Reader.readJsonFile( "reports.json" );

class ReportController {

    static getReports(){

        return ReportService.allReports( reports );

    }

    static getAnimalNames(){

        return ReportService.animalName( reports );

    }

    static getCoordinates(){

        return ReportService.coordinates( reports );

    }

    static getAnimalAndCoordinates(){

        return ReportService.animalWithCoordinates( reports );

    }

}

module.exports = ReportController;