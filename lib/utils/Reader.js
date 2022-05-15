const fs = require("fs");

class Reader {

    static readJsonFile( jsonPath ){
        const rawdata = fs.readFileSync( jsonPath );
        const reports = JSON.parse( rawdata );
        
        return reports;
    }

}

module.exports = Reader;