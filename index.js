/****
 Program: Javascript String Processor
 A simple list of of methods to process strings into object in Javascript
 By: ptxd
 License: MIT 
 ****/

class StringProc{
    static lowercase(key,str){
        let obj = {}
		obj[`${key}`] = str.toLowerCase();
		return obj;
    }

	static uppercase(key,str){
		let obj = {}
		obj[`${key}`] = str.toUpperCase();
		return obj;
	}
	static capitalize(key,str){
		let obj = {}
		obj[`${key}`] = str[0].toUpperCase() + str.substring(1);
		return obj;
	}
	static deletespaces(key,str){
		let obj = {}
		obj[`${key}`] = str.replace(/\s+/g,'');
		return obj;
	}
}

module.exports = {
	StringProc
}

