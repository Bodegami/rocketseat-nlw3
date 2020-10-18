const Database = require('./db');       //db = funcao db do db.js
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {


    //inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-23.6073693",
        lng: "-46.6569192",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1196354785",
        images: [
            //"https://source.unsplash.com/random?id=1"
            "https://images.unsplash.com/photo-1601933527349-a62d54d022a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

            "https://images.unsplash.com/photo-1601440225261-5504d26046ec?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

            "https://images.unsplash.com/photo-1600851908145-9afdd72e6e52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"            
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 08h até 18h",
        open_on_weekends: "0"
    })*/

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")   
    console.log(selectedOrphanages)

     //consultar somente 1 orfanato pelo id
     //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
     //console.log(orphanage)

     //deletar dado da tabela
     //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})