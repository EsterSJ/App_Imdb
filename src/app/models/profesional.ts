export class Profesional { 

    public name: String;
    public last_name: String;
    public age: Number;
    public weight: Number;
    public height: Number;
    public isRetired: Boolean;
    public nationality: String;
    public oscarsNumber: Number;
    public profession: String;
    public photo: String;

    constructor(name: string, last_name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string, photo: string){
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
}
