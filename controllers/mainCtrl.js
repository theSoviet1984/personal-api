const profile = {
    "name": "Donald Duck",
    "location": "Timbuktu",
    "occupations": ["thwarting Buggs Bunny", "Tomfoolery"],
    "latestOccupation": "Tomfoolery",
    "hobbies": [
      {
        "name": "Watching cartoon",
        "type": "current"
      }, {
        "name": "Quacking",
        "type": "past"
      }
    ],
    "skills":[
      {"id":1,
      "name": "Javascript",
    "experience": "Intermediate"
  }
    ]

};

const secrets ='this is a secret';

module.exports = {
        myProfile: profile,
        getName(req, res, next) {
            return res.status(200).json(profile.name);
        },

        getLocation(req, res, next) {
            return res.status(200).json(profile.location);
        },

        getOccupations(req, res, next) {
            return res.status(200).json(profile.occupations);
        },

        getLatestOccupation(req, res, next) {
            return res.status(200).json(profile.occupations[occupations.length - 1])
        },

        getHobbies(req, res, next) {
            return res.status(200).json(profile.hobbies)
        },

        getHobbiesType(req, res, next) {
            let typeHobbies = [];
            for (let i = 0; i < profile.hobbies.length; i++) {
                if (hobbies[i].type === req.params.type) {
                    typeHobbies.push(hobbies[i]);
                }
            }
            return res.status(200).json(typeHobbies);
        },

        getOccupationsByOrder(req, res, next) {
            if (req.occupations.order === asc) {
                return req.query.order = req.body.sort();
            }
            if (req.occupations.order === dec) {
                return req.body.sort().reverse();
            }
        },

        changeName(req,res, next){
          profile.name= req.body.name;
          return res.status(200).json(profile.name);
        },

        changeLocation(req,res, next){
          profile.location=req.body.location;
          return res.status(200).json(profile.location);
        },

        addHobby(req,res, next){
         profile.hobbies.push(req.body);
         return res.status(200).json(profile.hobbies);
       },
       addOccupation(req,res,next){
         profile.occupations.push(req.body.occupations);
         return res.status(200).json(profile.occupations)
       },

       getSkills(req,res,next){
         let skillsByExp=[]
         for (let i = 0; i < profile.skills.length; i++) {
        if (skills[i].experience === req.query.experience) {
          skillsByExp.push(skills[i]);
        }
      }
         return res.status(200).json(profile.skills)
       },
       addSkills(req,res, next) {
         profile.skills.push(req.body);
         return res.status(200).json(profile.skills)

      },
      checkLoginInfo(req, res, next){
          if ( '12345' === req.params.pin && req.params.username === 'jared' ) {
            return res.status(200).json(secrets);

            }
            return res.status(200).json('Denied');
        }



};
