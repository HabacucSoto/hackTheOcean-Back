class ReportService {

    static allReports( reports ){

        return reports

    }

    static animalName( reports ){

        return reports.map( ({ animal }) => animal )

    }

}

module.exports = ReportService