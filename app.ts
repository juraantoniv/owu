//1
interface Irocket <ILink,IRocket,>{
    mission_name: string,
    launch_date_local: string,
    launch_site: {
    site_name_long: string
},
    links:ILink,
    rocket:IRocket
}



interface ILink{
    article_link: string,
    video_link: string

}

interface IRocket<Ipayloads>{
    rocket_name: string,
    first_stage: {
        cores: [
            {
                flight: number,
                core: {
                    reuse_count: number,
                    status: boolean
                }
            }
        ]
    },
    second_stage:Ipayloads
}

interface Ipayloads{
    payloads: [
        {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
        }
    ]
}
//-------------------------------------------------------
//2

class User {

    constructor( public name: string, public age: number,public gender: string,) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const user = new User('Max',18,'male');


interface sum {
    Sum: () => number
}

interface showSum{
    showSum: () => void
}

interface incAge{
    incAge: () => number
}


class All implements sum,showSum,incAge {
    constructor(private a: number, private b: number ,public inc:number, public age:number) {
    }

    Sum(): number {
        return this.a+this.b
    }

    incAge(): number {
        this.age += this.inc
        return this.age
    }

    showSum(): void {
        return console.log(this.b+this.b)
    }



}



function sum(a,b){
    return a+b
}


function showSum(a,b){
    console.log(a + b);
}

function incAge(someUser, inc){
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user.age, 2)


