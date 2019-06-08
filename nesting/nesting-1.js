const log = console.log;

var arrayA = [
  "hello",
  "world",
  "hack",
  "reactor",
  "comeGetMe!",
  "is",
  "awesome"
];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin"];
var objA = {
  name: "Joker",
  favoriteColor: "Purple",
  catchPhrase: "comeGetMe!"
};
var objB = {
  yogurtFlavor: "Vanilla Tart",
  serialNumber: "64928599301ADDG",
  companyName: "comeGetMe!",
  shippingAddress: "1600 Pennsylvania Ave NW, Washington, D.C."
};

const a = arrayA[4];
const b = arrayB[4];
const oA = objA.catchPhrase;
const oB = objB.companyName;

var myStore = {
  name: "PetInc",
  founded: "2030",
  pets: "dogs"
};

myStore.pets;

var myStore = {
  name: "PetInc",
  founded: "2030",
  pets: {
    dogs: 13,
    cats: 10,
    birds: 30,
    fishes: 23
  }
};

myStore.pets;

const petNums = Object.values(myStore.pets);

var bigBox = {
  smallBoxA: { weight: 12, volume: 15, full: true },
  smallBoxB: { weight: 22, volume: 12, full: false },
  smallBoxC: { weight: 19, volume: 19, full: false }
};

var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var weightOfSmallBoxB = bigBox.smallBoxB.weight;
var isSmallBoxCFull = bigBox.smallBoxC.full;

const randomInt = num => {
  return Math.ceil(Math.random() * (num - 1) + 1);
};

const boxMaker = () => {
  let box = {
    length: randomInt(5),
    width: randomInt(10),
    height: randomInt(10),
    contents: []
  }

  return box;
};

var sampleBox1 = boxMaker(); //creates a "box" object and assigns it to "sampleBox"
var sampleBox2 = boxMaker(); //creates another "box" object, and is completely independent of the 1st function invocation in "sampleBox"
const warehouse = [];

const orderBoxes = (num) => { 
  for(let i = 0; i < num; i++){
    warehouse.push(boxMaker())
  }
  return warehouse;
};

orderBoxes(10)

const getVolume = (box) => {
  return box.length * box.width * box.height;
};

warehouse.forEach((box) => {
  box.contents.push('saftey manual');
  box.contents.push('mothballs');
});

var youDontNeedToWorryAboutAnythingInHere = function() {
    var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
    var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
    var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
    var emptyNetwork = [];

    function createNetwork(collection){

        for (var i = 0; i < NameArray.length; i++) {
            var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
            var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

            collection.push(createNewUser(NameArray[i], randomJob, randomCity));
        }

        return collection
    }

    return createNetwork(emptyNetwork);

}

function createNewUser(username, job, city){
    var newUser = {
        username: username,
        job: job,
        city: city,
        friends: [],
        family: [],
        coworkers: [],
    };

    return newUser;

};
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like


console.dir(allUsers);
log(joeyProfile);

// YOUR CODE HERE
allUsers.forEach((user) => {
  if(user.city === joeyProfile.city){
    joeyProfile.friends.push(user.username);
  }
});
log(joeyProfile);


allUsers.forEach((user) => {
  if(user.job === joeyProfile.job){
    joeyProfile.coworkers.push(user.username);
  }
});
log(joeyProfile);

allUsers.forEach((user) => {
  if(user.username.includes('Plain')){
    joeyProfile.family.push(user.username);
  }
});
log(joeyProfile);

joeyProfile.family.forEach((famName, i) => {
  joeyProfile.friends.forEach((friName, j) => {
    if(famName === friName) joeyProfile.friends.splice(j, 1);
  });
});
log(joeyProfile);

joeyProfile.family.forEach((famName, i) => {
  joeyProfile.coworkers.forEach((coName, k) => {
    if(famName === coName) joeyProfile.coworkers.splice(k, 1);
  });
});
log(joeyProfile);



