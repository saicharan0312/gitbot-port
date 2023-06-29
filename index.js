const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = "./data.json";

const commitChange = (n) => {
    if(n==0) return simpleGit().push();
    const min = 0;
    const maxw = 54;
    const maxd = 6;
    const x = Math.random(min, maxw);
    const y = Math.random(min, maxd);
    //const z = random.int(0,10);
    const DATE = moment().subtract(1, 'y').add(1, 'd').add(x,'w').add(y, 'd').format();

    const date = {
        date : DATE
    }
    console.log(date);
    jsonfile.writeFile(FILE_PATH, date, ()=>{
        simpleGit().add([FILE_PATH]).commit(
            DATE, {'--date' : DATE}, 
            commitChange.bind(this, --n)
        );
    });
}
commitChange(10);


