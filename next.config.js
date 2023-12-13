/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains:["unsplash.com","wallpapercave.com"]
    },
    redirects:async()=>{
        return([
            {
                source:'/redirect',
                destination:'/',
                permanent:false
            },
            {
                source:'/redirect-dyn',
                destination:'/',
                permanent:false
            }, {
                source:'/redirect-dyn/:ID',
                destination:'/',
                permanent:false
            },
        
        ])
    }
}

module.exports = nextConfig
