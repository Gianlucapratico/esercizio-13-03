/*class Pet{
    constructor(petName,ownerName,species,breed){
        this.petName=petName;
        this.ownerName=ownerName;
        this.species=species;
        this.breed=breed;
    }

    isSameOwner(other) {
        if (this.ownerName === other.ownerName) {
          return true;
        } else if (this.ownerName !== other.ownerName) {
          return false;
        } 
          
        }
}

const pet1 = new Pet("Jack", "Luca", "Cane", "Labrador");
const pet2 = new Pet("Ricky", "Claudia", "Gatto", "Persiano");
const pet3 = new Pet("Akela","Claudia","Tigre","Siberiana");
const pet4 = new Pet("Rocket","Eric","Coniglio","Bianco");
const pet5 = new Pet("Billy","Eric","Uccello","Falco");
const pet6 = new Pet("Leo","Jonny","Squalo","Bianco");


console.log(pet1.isSameOwner(pet2));
console.log(pet3.isSameOwner(pet3)); 
console.log(pet4.isSameOwner(pet5));  
console.log(pet5.isSameOwner(pet2));
 */
class Pet{
    constructor(petName,ownerName,species,breed){
        this.petName=petName;
        this.ownerName=ownerName;
        this.species=species;
        this.breed=breed;
    }
    static isSameOwner(owner1, owner2){
        return owner1.ownerName === owner2.ownerName;
    }
}

const pets = [
    new Pet("Jack", "Luca", "Cane", "Labrador"),
    new Pet("Ricky", "Claudia", "Gatto", "Persiano"),
    new Pet("Akela","Claudia","Tigre","Siberiana"),
    new Pet("Rocket","Eric","Coniglio","Bianco"),
];
console.log(Pet.isSameOwner(pets[1], pets[3]));
console.log(Pet.isSameOwner(pets[1], pets[2]));