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





