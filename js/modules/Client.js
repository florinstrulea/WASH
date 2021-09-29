export default class Client {
	constructor(name, date, obsTech, obsClient, nameTech, nameClient) {
		this.name = name.toUpperCase();
		this.date = date;
		this.obsTech = obsTech;
		this.obsClient = obsClient;
		this.nameTech = nameTech;
		this.nameClient = nameClient;
	}
}
