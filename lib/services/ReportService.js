class ReportService {

    static allReports( reports ){

        return reports;

    }

    static animalName( reports ){

        return reports.map( ({ animal }) => animal );

    }

    static coordinates( reports ){

        return reports.map( ({ lat, long }) => `${ lat }, ${ long }`);

    }

    static animalWithCoordinates( reports ){

        return reports.map( ({ animal, lat, long }) => { 

            return {
                animal,
                coordinates: `${ lat }, ${ long }`
            };

        } );

    }

}

module.exports = ReportService;